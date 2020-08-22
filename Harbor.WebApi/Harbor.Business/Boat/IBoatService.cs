using System.Collections.Generic;
using Harbor.Model.Boat;

namespace Harbor.Business.Boat
{
    public interface IBoatService
    {
        /// <summary>
        /// Generate Boats
        /// </summary>
        /// <param name="boatsToBeGenerated"> Total Boats want to generate</param>
        /// <returns></returns>
        public IList<BoatModal> GenerateBoats(int boatsToBeGenerated);
    }
}
