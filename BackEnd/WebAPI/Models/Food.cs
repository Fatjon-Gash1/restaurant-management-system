using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Food
        
    {
         public int FID { get; set; }

         public string Kodi { get; set; }

        public string ChineseFoods { get; set; }
        public string ItalianFoods { get; set; }
        public string Desserts { get; set; }

        public string SeaFoods { get; set; }
        public string FastFood { get; set; }
        public string Tradicional { get; set; }

        public string Salads { get; set; }
        public string Other { get; set; }

        public string TotalP { get; set; }

    }
}
