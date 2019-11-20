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

namespace SMCM_Fall_2019_Full_Stack_Project.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        //private readonly JWTSettings _options;

        public HomeController(ILogger<HomeController> logger, UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            _logger = logger;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost]
        public async Task<IActionResult> CreateAccount(String username, String password)
        {
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
                var gameList = db.Games.Include(g => g.Genre).ToList();
                Random rng = new Random();
                gameList = gameList.FindAll(
                    g => g.Genre.GenreName.ToLower().Contains(genre.ToLower()) 
                    && g.EsrbRating.ToLower().Contains(rating.ToLower())
                    && g.Platforms.ToLower().Contains(platform.ToLower())
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
                    return Json(new
                    {
                        test = a
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
                    return Json(new
                    {
                        test = a
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
    }
}
