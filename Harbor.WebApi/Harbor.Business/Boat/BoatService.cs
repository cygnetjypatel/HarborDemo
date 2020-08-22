using Harbor.Utility;
using System.Collections.Generic;
using Harbor.Model.Boat;
using Harbor.Model.Constants;

namespace Harbor.Business.Boat
{
    public class BoatService : IBoatService
    {

        #region Public Methods
        /// <summary>
        /// Generate Boats
        /// </summary>
        /// <param name="boatsToBeGenerated"> Total Boats want to generate</param>
        /// <returns></returns>
        public IList<BoatModal> GenerateBoats(int boatsToBeGenerated)
        {

            IList<BoatModal> boatList = new List<BoatModal>();
            for (int index = 1; index <= boatsToBeGenerated; index++)
            {
                BoatModal boat = new BoatModal {BoatId = index, BoatType = Helper.GeRandomValue<BoatTypes>()};
                boat.BoatSpeed = GetBoatSpeed(boat.BoatType);
                boat.Duration = GetBoatDuration(boat.BoatType);
                boatList.Add(boat);
            }
            return boatList;
        }

        #endregion

        #region Private Methods
        /// <summary>
        /// Get speed of boat based on boat Type
        /// </summary>
        /// <param name="boatType">Type of the boat</param>
        /// <returns></returns>
        private static int GetBoatSpeed(BoatTypes boatType)
        {
            if (boatType == BoatTypes.CargoShip)
            {
                return ConstantValues.CargoShipSpeed;
            }
            else if (boatType == BoatTypes.SailBoat)
            {
                return ConstantValues.SailBoatSpeed;
            }
            else
            {
                return ConstantValues.SpeedBoatSpeed;
            }
        }

        /// <summary>
        /// Get duration of boat
        /// </summary>
        /// <param name="boatType">Type of the boat</param>
        /// <returns></returns>
        private static int GetBoatDuration(BoatTypes boatType)
        {
            if (boatType == BoatTypes.CargoShip)
            {
                return ConstantValues.CargoShipDuration;
            }
            else if (boatType == BoatTypes.SailBoat)
            {
                return ConstantValues.SailBoatDuration;
            }
            else
            {
                return ConstantValues.SpeedBoatDuration;
            }
        }

        #endregion
    }
}
