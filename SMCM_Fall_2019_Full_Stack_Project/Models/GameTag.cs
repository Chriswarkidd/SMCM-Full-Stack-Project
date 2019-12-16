using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SMCM_Fall_2019_Full_Stack_Project.Models
{
    public class GameTag
    {
        public int GameTagId { get; set; }

        [Required]
        [ForeignKey("GameId")]
        public Game Game { get; set; }
        [Required]
        [ForeignKey("TagId")]
        public Tag Tag { get; set; }

    }
}
