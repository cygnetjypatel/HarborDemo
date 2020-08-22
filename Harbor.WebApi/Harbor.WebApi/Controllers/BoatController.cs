using Harbor.Business;
using Microsoft.AspNetCore.Mvc;

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

        [HttpGet("[action]")]
        public IActionResult GenerateBoats(int boatsToBeGenerated)
        {
            return Ok(_boatService.GenerateBots(boatsToBeGenerated));
        }

        #endregion
    }
}
