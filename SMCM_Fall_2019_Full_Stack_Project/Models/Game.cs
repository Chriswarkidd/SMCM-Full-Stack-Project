using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SMCM_Fall_2019_Full_Stack_Project.Models
{
    public class Game
    {
        public int GameId { get; set; }

        [Required]
        public string GameName { get; set; }

        public DateTime DatePublished { get; set; }

        [Required]
        [ForeignKey("GenreId")]
        public Genre Genre{ get; set; }

        [Required]
        [ForeignKey("PublisherId")]
        public Publisher Publisher { get; set; }

        public string EsrbRating { get; set; }

        public string Platforms { get; set; }

    }
}
