using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace SMCM_Fall_2019_Full_Stack_Project.Models
{
    public class WgsipContext : IdentityDbContext<IdentityUser>
    {        
        public DbSet<PlayedGames> PlayedGames { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Publisher> Publishers { get; set; }

        public DbSet<Tag> Tags { get; set; }

        public DbSet<TagWeights> TagWeights { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            //use this when working with a local database
            options.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=test;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");

            //use this when working with the production database. (Should only be when publishing)
            //options.UseSqlServer("Data Source=full-stack-2019.database.windows.net;Initial Catalog=Full_Stack_2019;User ID=Full_Stack_SMCM_2019;Password=*********;Connect Timeout=30;Encrypt=True;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
        }
        public WgsipContext(DbContextOptions options) : base(options)
        {
            Database.EnsureCreated();
        }
        public WgsipContext() : base()
        {

        }

    }
}
