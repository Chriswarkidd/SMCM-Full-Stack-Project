using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SMCM_Fall_2019_Full_Stack_Project.Models
{
    public class Genre
    {
        public int GenreId { get; set; }

        [Required]
        public String GenreName { get; set; }

        public override string ToString()
        {
            return GenreName;
        }
    }
}
