using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SMCM_Fall_2019_Full_Stack_Project.Models
{
    public class Publisher
    {
        public int PublisherId { get; set; }

        [Required]
        public string PublisherName { get; set; }
    }
}
