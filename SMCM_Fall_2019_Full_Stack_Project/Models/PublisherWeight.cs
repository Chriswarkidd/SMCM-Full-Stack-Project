using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SMCM_Fall_2019_Full_Stack_Project.Models
{
    public class PublisherWeights
    {
        public int PublisherWeightsId { get; set; }

        [Required]
        [ForeignKey("AccountId")]
        public Account User { get; set; }

        [Required]
        [ForeignKey("PublisherId")]
        public Publisher Publisher { get; set; }
        public int Weight { get; set; }
    }
}
