using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace SMCM_Fall_2019_Full_Stack_Project
{
    //This code is auto generated from VS
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
