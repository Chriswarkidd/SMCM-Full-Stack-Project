using System;

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
        public GameDTO(Game g)
        {
            GameName = g.GameName;
            DatePublished = g.DatePublished;
            Genre = g.Genre.GenreName;
            Publisher = g.Publisher.PublisherName;
            EsrbRating = g.EsrbRating;
            Platforms = g.Platforms;
        }

    }
}
