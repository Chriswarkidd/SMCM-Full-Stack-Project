using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SMCM_Fall_2019_Full_Stack_Project.Models
{
    public class GameDTO
    {
        public string GameName { get; set; }

        public DateTime DatePublished { get; set; }

        public string Genre { get; set; }

        public string Publisher { get; set; }

        public string EsrbRating { get; set; }

        public string Platforms { get; set; }

        public int Score { get; set; }
        public GameDTO(Game g)
        {
            GameName = g.GameName;
            DatePublished = g.DatePublished;
            Genre = g.Genre.GenreName;
            Publisher = g.Publisher.PublisherName;
            EsrbRating = g.EsrbRating;
            Platforms = g.Platforms;
            Score = 0;
        }


        /// <summary>
        /// This is the constructor to be used by the JsonConvert method to retrieve the Stack of GameDTOs from session storage
        /// </summary>
        /// <param name="gameName"></param>
        /// <param name="dateTime"></param>
        /// <param name="genre"></param>
        /// <param name="publisher"></param>
        /// <param name="esrbRating"></param>
        /// <param name="platforms"></param>
        /// <param name="score"></param>
        [JsonConstructor]
        public GameDTO(string gameName, DateTime dateTime, string genre, string publisher, string esrbRating, string platforms, int score)
        {
            GameName = gameName;
            DatePublished = dateTime;
            Genre = genre;
            Publisher = publisher;
            EsrbRating = esrbRating;
            Platforms = platforms;
            Score = score;
        }

        /// <summary>
        /// Overloaded constructor to evaluate the score of the game based on user preference.
        /// </summary>
        /// <param name="g">The game to calulate the user's preference for at</param>
        /// <param name="db">The database context</param>
        /// <param name="user">The current user</param>
        public GameDTO(Game g, WgsipContext db, ClaimsPrincipal user)
        {
            GameName = g.GameName;
            DatePublished = g.DatePublished;
            Genre = g.Genre.GenreName;
            Publisher = g.Publisher.PublisherName;
            EsrbRating = g.EsrbRating;
            Platforms = g.Platforms;
            Score = getScoreFromFormula(g, db, user);
        }

        /// <summary>
        /// Get the score for the game based on our formula for scoring games based on
        /// what the user likes.
        /// </summary>
        /// <param name="game">The game to calulate the user's preference for at</param>
        /// <param name="db">The database context</param>
        /// <param name="user">The current user</param>
        /// <returns>The score calulated by the formula</returns>
        public int getScoreFromFormula(Game game, WgsipContext db, ClaimsPrincipal user)
        {
            int tagsWeight = 0;
            int genreWeight = 0;
            int publisherWeight = 0;


            //get gameid
            int gameId = game.GameId;
            //get publisherid
            int publisherId = game.Publisher.PublisherId;
            //get genreid
            int genreId = game.Genre.GenreId;

            try
            {
                PublisherWeights pW = db.PublisherWeights.Include(pw => pw.User)
            .Include(pw => pw.Publisher)
            .First(pw => pw.Publisher.PublisherId == publisherId
            && pw.User.AccountEmail.ToLower().Equals(user.Identity.Name.ToLower())
            );
                publisherWeight += pW.Weight;
            }
            catch (Exception)
            {
                publisherWeight = 0;
            }


            try
            {
                GenreWeights gW = db.GenreWeights.Include(pw => pw.User)
            .Include(gw => gw.Genre)
            .First(gw => gw.Genre.GenreId == genreId
            && gw.User.AccountEmail.ToLower().Equals(user.Identity.Name.ToLower())
            ) ?? null;
                genreWeight += gW.Weight;
            }
            catch (Exception)
            {
                genreWeight = 0;
            }

            // create list of tags assosiated with this game
            List<GameTag> tagsForGame = db.GameTags.Include(g => g.Game).Include(g => g.Tag)
                .Where(g => g.Game.GameId == gameId).ToList();
            foreach (GameTag tag in tagsForGame)
            {
                //get the tagid
                int tagid = tag.Tag.TagId;

                //adjust weight for each tag
                try
                {
                    tagsWeight += db.TagWeights.Include(pg => pg.User).Include(pg => pg.Tag)
            .First(pg =>
            pg.Tag.TagId == tagid
            && pg.User.AccountEmail.ToLower().Equals(user.Identity.Name.ToLower())
            ).Weight;
                }
                catch (Exception)
                {

                    continue;
                }
            }

            return tagsWeight + genreWeight + publisherWeight;
        }

    }
}
