using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SMCM_Fall_2019_Full_Stack_Project.Models
{
    public class GameDTO
    {
        public String GameName { get; set; }

        public DateTime DatePublished { get; set; }
        GameDTO(Game g)
        {

        }

    }
}
