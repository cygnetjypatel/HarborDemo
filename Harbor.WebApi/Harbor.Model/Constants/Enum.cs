﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Harbor.Model.Constants
{
    public static class Enum
    {
        
    }

    public enum BoatTypes
    {
        CargoShip = 1,
        SailBoat = 2,
        SpeedBoat = 3
    }

    public enum StatusTypes
    {
        InQueue = 1,
        InProgress = 2,
        Completed = 3,
        CannotProcess = 4
    }
}
