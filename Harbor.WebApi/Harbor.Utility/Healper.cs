using System;

namespace Harbor.Utility
{
    public static class Healper
    {
        #region Public Variables

        public static Random random = new Random();

        #endregion

        #region Public Methods 

        public static T GeRandomValue<T>()
        {
            var enumList = Enum.GetValues(typeof(T));
            return (T)enumList.GetValue(random.Next(enumList.Length));
        }

        #endregion
    }
}
