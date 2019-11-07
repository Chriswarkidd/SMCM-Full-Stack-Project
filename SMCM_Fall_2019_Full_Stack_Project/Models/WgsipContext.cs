using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace SMCM_Fall_2019_Full_Stack_Project.Models
{
    public class WgsipContext : DbContext
    {        
        public DbSet<PlayedGames> PlayedGames { get; set; }
        public DbSet<Account> Accounts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            //options.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=test;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            options.UseSqlServer("Data Source=full-stack-2019.database.windows.net;Initial Catalog=Full_Stack_2019;User ID=Full_Stack_SMCM_2019;Password=Admin1123!;Connect Timeout=30;Encrypt=True;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
        }
        public WgsipContext(DbContextOptions options) : base(options)
        {

        }
        public WgsipContext() : base()
        {

        }

    }
}
