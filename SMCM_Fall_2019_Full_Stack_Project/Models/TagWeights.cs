using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SMCM_Fall_2019_Full_Stack_Project.Models
{
    public class TagWeights
    {
        public int TagWeightsId { get; set; }

        [Required]
        [ForeignKey("TagId")]
        public Tag Tag { get; set; }
        [Required]
        [ForeignKey("AccountId")]
        public Account User { get; set; }
        public int  Weight{ get; set; }
    }
}
