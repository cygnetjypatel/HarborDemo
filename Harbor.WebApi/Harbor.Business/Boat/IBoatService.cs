using Harbor.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Harbor.Business
{
    public interface IBoatService
    {
        IList<Boat> GenerateBots(int boatsToBeGenerated);
    }
}
