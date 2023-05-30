using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Drinks
    {

        public int DID { get; set; }
        public string Kodi { get; set; }
        public string Alcoholic { get; set; }
        public string NonAlcoholic { get; set; }
        public string Tea { get; set; }
        public string Coffee { get; set; }
        public string OtherD { get; set; }
        public decimal TotalP { get; set; }


    }
}
