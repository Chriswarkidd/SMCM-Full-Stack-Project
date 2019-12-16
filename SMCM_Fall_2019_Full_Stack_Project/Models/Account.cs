using System;
using System.ComponentModel.DataAnnotations;

namespace SMCM_Fall_2019_Full_Stack_Project.Models
{
    public class Account
    {
        public int AccountId { get; set; }
        [Required]
        [EmailAddress]
        public String AccountEmail { get; set; }
    }
}
