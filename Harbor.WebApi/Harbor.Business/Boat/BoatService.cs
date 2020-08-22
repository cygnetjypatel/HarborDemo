using Harbor.Model;
using Harbor.Utility;
using System;
using System.Collections.Generic;
using System.Text;

namespace Harbor.Business
{
    public class BoatService : IBoatService
    {

        #region Public Methods

        public IList<Boat> GenerateBots(int boatsToBeGenerated)
        {
            IList<Boat> boatList = new List<Boat>();
            for (int index = 1; index <= boatsToBeGenerated; index++)
            {
                Boat boat = new Boat();
                boat.BoatId = index;
                boat.BoatType = Healper.GeRandomValue<Enums.BoatTypes>();
                boat.BoatSpeed = GetBoatSpeed(boat.BoatType);
                boat.Duration = GetBoatDuration(boat.BoatType);
                boatList.Add(boat);
            }
            return boatList;
        }

        #endregion

        #region Private Methods

        private static int GetBoatSpeed(Enums.BoatTypes boatType)
        {
            if (boatType == Enums.BoatTypes.CargoShip)
            {
                return Constants.CargoShipSpeed;
            }
            else if (boatType == Enums.BoatTypes.SailBoat)
            {
                return Constants.SailBoatSpeed;
            }
            else
            {
                return Constants.SpeedBoatSpeed;
            }
        }

        private static int GetBoatDuration(Enums.BoatTypes boatType)
        {
            if (boatType == Enums.BoatTypes.CargoShip)
            {
                return Constants.CargoShipDuration;
            }
            else if (boatType == Enums.BoatTypes.SailBoat)
            {
                return Constants.SailBoatDuration;
            }
            else
            {
                return Constants.SpeedBoatDuration;
            }
        }

        #endregion
    }
}
