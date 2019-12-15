using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SMCM_Fall_2019_Full_Stack_Project.Models
{
    public class PlayedGameDTO
    {
        public string GameName { get; set; }

        public bool PlayedGame { get; set; }

        public Int16? Rating { get; set; }
        public PlayedGameDTO(PlayedGames game)
        {
            GameName = game.Game.GameName;
            PlayedGame = game.PlayedGame;
            Rating = game.Rating;
        }
    }
}
