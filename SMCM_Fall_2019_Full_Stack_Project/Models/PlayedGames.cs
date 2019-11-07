using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SMCM_Fall_2019_Full_Stack_Project.Models
{
    public class PlayedGames
    {
        public int PlayedGamesId { get; set; }
        [Required]
        public String GameName { get; set; }
        public bool PlayedGame { get; set; }
        [Required]
        [ForeignKey("AccountId")]
        public Account User { get; set; }
    }
}
