using Harbor.Business.Boat;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Serilog;

namespace Harbor.WebApi
{
    public class Startup
    {

        #region Variable Declaration

        private const string CorsPolicyName = "CORS";
        public IConfiguration Configuration { get; }

        #endregion

        #region Constructor

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        #endregion

        #region Configuration
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            ConfigureDependencyInjection(services);
            ConfigureCors(services);
            services.AddControllers();
            services.AddSwaggerGen();
        }

        #endregion

        #region Configure DependencyInjection

        private void ConfigureDependencyInjection(IServiceCollection services)
        {
            services.AddTransient<IBoatService, BoatService>();
        }

        #endregion


        #region Configure CORS

        public void ConfigureCors(IServiceCollection services)
        {
            services.AddCors(opts =>
            {
                opts.AddPolicy(CorsPolicyName, builder =>
                {
                    builder
                    .AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                });
            });
        }

        #endregion

        #region configure Envirounmnet
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env,ILoggerFactory loggerFactory )
        {

            // Serilog configuration
            Log.Logger = new LoggerConfiguration()
                .WriteTo.RollingFile(pathFormat: "logs\\log-{Date}.log")
                .CreateLogger();

            if (env.IsDevelopment())
            {
                loggerFactory.WithFilter(new FilterLoggerSettings
                    {
                        {"Trace",LogLevel.Trace },
                        {"Default", LogLevel.Trace},
                        {"Microsoft", LogLevel.Warning},
                        {"System", LogLevel.Warning}
                    })
                    .AddSerilog();

                app.UseDeveloperExceptionPage();
            }
            else
            {
                loggerFactory.WithFilter(new FilterLoggerSettings
                    {
                        {"Trace",LogLevel.Trace },
                        {"Default", LogLevel.Trace},
                        {"Microsoft", LogLevel.Warning},
                        {"System", LogLevel.Warning}
                    })
                    .AddSerilog();
            }

            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
                c.RoutePrefix = string.Empty;
            });

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors(CorsPolicyName);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        #endregion
    }
}
