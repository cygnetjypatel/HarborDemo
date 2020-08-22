using System;
using System.Collections.Generic;
using System.Text;
using static Harbor.Model.Enums;

namespace Harbor.Model
{
    public class Boat
    {
        public Boat()
        {
            this.BoatStatus = StatusTypes.InQueue;
        }
        public int BoatId { get; set; }
        public BoatTypes BoatType { get; set; }
        public int BoatSpeed { get; set; }
        public int Duration { get; set; }
        public StatusTypes BoatStatus { get; set; }
    }
}
