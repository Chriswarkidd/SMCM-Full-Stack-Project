using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SMCM_Fall_2019_Full_Stack_Project.Models
{
    public class Account {
        public int AccountId { get; set; }
        [Required]
        [EmailAddress]
        public String AccountEmail { get; set; }
    }
}
