using System.ComponentModel.DataAnnotations;

namespace SMCM_Fall_2019_Full_Stack_Project.Models
{
    public class Publisher
    {
        public int PublisherId { get; set; }

        [Required]
        public string PublisherName { get; set; }

        public override string ToString()
        {
            return PublisherName;
        }
    }
}
