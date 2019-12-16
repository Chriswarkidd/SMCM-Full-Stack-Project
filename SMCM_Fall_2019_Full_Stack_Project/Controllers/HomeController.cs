using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using SMCM_Fall_2019_Full_Stack_Project.Models;
using System.Reflection;

namespace SMCM_Fall_2019_Full_Stack_Project.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;

        public HomeController(ILogger<HomeController> logger, UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            _logger = logger;
            _userManager = userManager;
            _signInManager = signInManager;
        }


        #region api
        [HttpPost]
        public async Task<IActionResult> CreateAccount(String username, String password)
        {
            List<string> s = new List<string>();
            if (username == null) s.Add("You must enter an email");
            if (password == null) s.Add("Password cannot be empty");
            if (password == null || username == null) return Json(new { a = s });
            IdentityUser user = new IdentityUser { UserName = username, Email = username, };
            IdentityResult result = await _userManager.CreateAsync(user, password);
            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, isPersistent: false);
                ViewBag.loggedIn = User.Identity.IsAuthenticated;
                ViewBag.accountName = User.Identity.Name;
                using (var db = new WgsipContext())
                {
                    Account account = new Account();
                    account.AccountEmail = username;
                    db.Accounts.Add(account);
                    db.SaveChanges();
                }
                return Json(new { a = true });
            }
            return Json(new {a = result.Errors.ToArray()});
        }

        [HttpGet]
        public IActionResult SoundsGood(String game)
        {
            if (!User.Identity.IsAuthenticated)
            return Json(new {message = "You need to be logged in to add a game to your game list."});

            try
            {
                using (WgsipContext db = new WgsipContext())
                {
                    Account user = db.Accounts.First(a => a.AccountEmail == User.Identity.Name);
                    Game gameEntry = db.Games.First(g => g.GameName.ToLower().Equals(game.ToLower()));
                    PlayedGames playedGame = new PlayedGames();
                    playedGame.User = user;
                    playedGame.Game = gameEntry;
                    playedGame.PlayedGame = false;
                    if (!db.PlayedGames.Include(pg => pg.Game)
                        .Include(pg => pg.User)
                        .Any(pg => pg.Game == gameEntry
                        && pg.User == user))
                    {
                        db.PlayedGames.Add(playedGame);
                        db.SaveChanges();
                        return Json(new { message = "Game added to your games list! 😆" });
                    }
                    else
                    {
                        return Json(new { message = "The game is already in your games list." });
                    }
                }
            }
            catch (Exception e)
            {
                return Json(new { message = e.Message });
            }

        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> DeleteAccountAsync()
        {
            if (!User.Identity.IsAuthenticated)
                return Json(new { message = "You need to be logged in to delete your account" });

            try
            {
                using (WgsipContext db = new WgsipContext())
                {
                    Account user = db.Accounts.First(a => a.AccountEmail == User.Identity.Name);
                    db.Accounts.Remove(user);
                    db.Users.Remove(db.Users.Where(u => u.Email == user.AccountEmail).First());
                    await _signInManager.SignOutAsync();
                    db.SaveChanges();
                }
                return Json(new { message = "Account Deleted", success = true });
            }
            catch (Exception e)
            {
                return Json(new { message = e.Message });
            }

        }

        [HttpGet]
        public IActionResult SearchGames(string searchTerm)
        {
            List<GameDTO> games = new List<GameDTO>();
            //Not the best use of reflection, but reduces amount of typing required.
            Func<Game, bool> Predicate = delegate(Game a) {
                //loops through all the properties, and sees if the search term is included.
                foreach (var item in a.GetType().GetProperties())
                {
                    if (item.Name.Contains("Id")) continue;//skip over Id columns
                    if (item.GetValue(a).ToString().ToLower().Contains(searchTerm.ToLower())) {
                        return true;
                    }
                }
                return false;
            };

            try
            {
                using (WgsipContext db = new WgsipContext())
                {
                    List<Game> resultingGames = db.Games.Include(g => g.Genre).Include(g => g.Publisher).Where(Predicate).ToList();
                    foreach (Game g in resultingGames)
                    {
                        games.Add(new GameDTO(g));
                    }
                    return Json(new { gamesList = games, success = true });
                }
            }
            catch (Exception e)
            {
                return Json(new { message = e.Message });
            }

        }

        [HttpGet]
        [Authorize]
        public IActionResult HasPlayed(String[][] gameList)
        {
            try
            {
                
                using (var db = new WgsipContext())
                {
                    foreach (var gameA in gameList)
                    {
                        var game = gameA[0].Split(',');
                        Int16 rate = 3;
                        var query = db.PlayedGames.Include(pg => pg.User).Include(pg => pg.Game)
                        .First(pg =>
                        pg.Game.GameName.ToLower().Equals(game[0].ToLower())
                        && pg.User.AccountEmail.ToLower().Equals(User.Identity.Name.ToLower())
                        );

                        query.PlayedGame = game[1] == "true" ? true : false;

                        // when a game is marked as played, set the rating to 3 as a default
                        query.Rating = rate;
                    }

                    db.SaveChanges();
                }
                return Json(new { message = "success" });
            }
            catch (Exception e)
            {

                return Json(new { message = e.Message });
            }
        }

        [HttpGet]
        [Authorize]
        public IActionResult Rate(String gameName, Int16 rating)
        {
            try
            {
                using (var db = new WgsipContext())
                {
                    int weight= 0;
                    switch (rating)
                    {
                        case 1:
                            weight = -2;
                            break;
                        case 2:
                            weight = -1;
                            break;
                        case 3:
                            weight = 0;
                            break;
                        case 4:
                            weight = 1;
                            break;
                        case 5:
                            weight = 2;
                            break;
                    }

                    //get gameid
                    int gameid = db.Games.Where(g => g.GameName.ToLower().Equals(gameName.ToLower())).First().GameId;
                    //get publisherid
                    int publisherid = db.Games.Include(g => g.Publisher).Where(g => g.GameName.ToLower().Equals(gameName.ToLower())).First().Publisher.PublisherId;
                    //get genreid 
                    int genreid = db.Games.Include(g => g.Genre).Where(g => g.GameName.ToLower().Equals(gameName.ToLower())).First().Genre.GenreId;
                    
                    // create list of tags assosiated with this game
                    List<GameTag> tagsForGame = db.GameTags.Include(g => g.Game)
                        .Where(g => g.Game.GameId == gameid ).ToList();

                    db.PlayedGames.Include(pg => pg.User).Include(pg => pg.Game)
                    .First(pg =>
                    pg.Game.GameName.ToLower().Equals(gameName.ToLower())
                    && pg.User.AccountEmail.ToLower().Equals(User.Identity.Name.ToLower())
                    ).Rating = rating;

                    // adjust weight of the publisher
                    db.PublisherWeights.Include(pg => pg.User).Include(pg => pg.Publisher)
                    .First(pg =>
                    pg.Publisher.PublisherId == publisherid
                    && pg.User.AccountEmail.ToLower().Equals(User.Identity.Name.ToLower())
                    ).Weight += weight;

                    //adjust weight for the genre
                    db.GenreWeights.Include(pg => pg.User).Include(pg => pg.Genre)
                    .First(pg =>
                    pg.Genre.GenreId == genreid
                    && pg.User.AccountEmail.ToLower().Equals(User.Identity.Name.ToLower())
                    ).Weight += weight;

                    /*tag weight is assigned for each tag a game has the tag weight is assigned 
                    the weight dived by the number of tagsa game has*/
                    foreach (GameTag tag in tagsForGame)
                    {
                        //get the tagid
                        int tagid = tag.Tag.TagId;
                       
                        //adjust weight for each tag
                        db.TagWeights.Include(pg => pg.User).Include(pg => pg.Tag)
                        .First(pg =>
                        pg.Tag.TagId == tagid
                        && pg.User.AccountEmail.ToLower().Equals(User.Identity.Name.ToLower())
                        ).Weight += (weight/ tagsForGame.Count);
                    }

                    db.SaveChanges();

                }
                return Json(new { message = "success" });
            }
            catch (Exception e)
            {

                return Json(new { message = e.Message });
            }
        }

        [HttpPost]
        public async Task<IActionResult> LogIn(String username, String password)
        {
            IdentityUser user = await _userManager.FindByNameAsync(username);
            if (user == null){
                return Json(new { a = "Either the Email or Password provided was incorrect." });
            }
            Microsoft.AspNetCore.Identity.SignInResult result = await _signInManager.CheckPasswordSignInAsync(user, password, false);
            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, isPersistent: false);
                ViewBag.loggedIn = User.Identity.IsAuthenticated;
                ViewBag.accountName = User.Identity.Name;
                return Json(new {a = true });
            }
            return Json(new { a = result.IsLockedOut ? "This account is currently locked out" : "Either the Email or Password provided was incorrect."});
        }

        [HttpGet]
        public IActionResult Test(String genre = null, String rating = null, String platform = null)
        {
            string a = "";
            genre = genre ?? "";
            rating = rating ?? "";
            platform = platform ?? "";
            using (var db = new WgsipContext())
            {
                List<PlayedGames> userGames;
                if (User.Identity.IsAuthenticated)
                {
                    userGames = db.PlayedGames.Include(g => g.User).Include(g => g.Game)
                        .Where(g => g.User.AccountEmail.ToLower().Equals(User.Identity.Name.ToLower()))
                        .ToList();
                }
                else
                {
                   userGames = new List<PlayedGames>();
                }
                var gameList = db.Games.Include(g => g.Genre).ToList();
                Random rng = new Random();
                gameList = gameList.FindAll(
                    g => g.Genre.GenreName.ToLower().Contains(genre.ToLower()) 
                    && g.EsrbRating.ToLower().Contains(rating.ToLower())
                    && g.Platforms.ToLower().Contains(platform.ToLower())
                    && !userGames.Any(ug => ug.Game.GameName.ToLower().Equals(g.GameName.ToLower()))
                );
                if (!gameList.Any()) return Json(new
                {
                    test = "No matching games found. 😢"
                });
                a = gameList[rng.Next(0,gameList.Count)].GameName;
            }

                return Json(new
                { 
                    test = a
                });
        }



        [HttpGet]
        public IActionResult TestAllGames()
        {

            using (var db = new WgsipContext())
            {
                try
                {
                    var a = db.Games.Include(g => g.Publisher).Include(g => g.Genre).OrderBy(g => g.GameName).ToList();
                    List<GameDTO> games = new List<GameDTO>();
                    foreach (var g in a)
                    {
                        games.Add(new GameDTO(g));
                    }
                    return Json(new
                    {
                        test = games
                    });

                }
                catch (Exception e)
                {
                    return Json(new
                    {
                        test = e.Message
                    });
                }
            }
        }


        [HttpGet]
        [Authorize]
        public IActionResult TestGameList()
        {

            using (var db = new WgsipContext())
            {
                try
                {
                    var a = db.PlayedGames.Include(g => g.User).Include(g => g.Game).Where(g => g.User.AccountEmail.ToLower().Equals(User.Identity.Name.ToLower())).ToList();
                    List<PlayedGameDTO> games = new List<PlayedGameDTO>();
                    foreach (var g in a)
                    {
                        games.Add(new PlayedGameDTO(g));
                    }
                    return Json(new
                    {
                        test = games
                    });

                }
                catch (Exception e)
                {
                    return Json(new
                    {
                        test = e.Message
                    });
                }
            }
        }

        public IActionResult Test2()
        {
            String game = "Divinity 2: Original Sin";
            return Json(new { test = game });
        }

        #endregion

        #region page direction
        public IActionResult Index()
        {
            ViewBag.loggedIn = User.Identity.IsAuthenticated;
            if (ViewBag.loggedin) ViewBag.accountName = User.Identity.Name;
            return View();
        }

        public IActionResult Login()
        {
            ViewBag.loggedIn = User.Identity.IsAuthenticated;
            if (ViewBag.loggedin) ViewBag.accountName = User.Identity.Name;
            return View();
        }

        public IActionResult AllGames()
        {
            ViewBag.loggedIn = User.Identity.IsAuthenticated;
            if (ViewBag.loggedin) ViewBag.accountName = User.Identity.Name;
            return View();
        }
        
        [Authorize]
        public IActionResult Account()
        {
            ViewBag.loggedIn = User.Identity.IsAuthenticated;
            ViewBag.accountName = User.Identity.Name;
            return View();
        }

        [Authorize]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            ViewBag.loggedIn = User.Identity.IsAuthenticated;
            return RedirectToAction("Index", "Home");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        #endregion
    }
}
