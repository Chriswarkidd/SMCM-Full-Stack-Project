using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SMCM_Fall_2019_Full_Stack_Project.Models
{
    public class GenreWeights
    {
        public int GenreWeightsId { get; set; }

        [Required]
        [ForeignKey("AccountId")]
        public Account User { get; set; }

        [Required]
        [ForeignKey("GenreId")]
        public Genre Genre { get; set; }
        public int Weight { get; set; }
    }
}
