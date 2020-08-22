using Harbor.Model.Constants;

namespace Harbor.Model.Boat
{
    public class BoatModal
    {
        public BoatModal()
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
