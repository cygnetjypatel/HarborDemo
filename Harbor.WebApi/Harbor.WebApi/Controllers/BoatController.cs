using Microsoft.AspNetCore.Mvc;
using System;
using Harbor.Business.Boat;
using Serilog;

namespace Harbor.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoatController : ControllerBase
    {

        #region Private Variables     

        private readonly IBoatService _boatService;

        #endregion

        #region Constructor

        public BoatController(IBoatService boatService)
        {
            _boatService = boatService;
        }

        #endregion

        #region Public Methods

        /// <summary>
        /// This Action will be used to Generate boats
        /// </summary>
        /// <param name="boatsToBeGenerated">Based on this number it will generate boats.</param>
        /// <returns></returns>
        [HttpGet("[action]")]
        public IActionResult GenerateBoats(int boatsToBeGenerated)
        {
            try
            {
               return Ok(_boatService.GenerateBoats(boatsToBeGenerated));
            }
            catch (Exception ex)
            {
                Log.Logger.Error(ex, "An unhandled error occurred in GenerateBoats.");
                return StatusCode(500, ex.Message);
            }
        }

        #endregion
    }
}
