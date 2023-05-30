using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Drink
    {
        public int DrinkId { get; set; }
        public string DrinkName { get; set; }
        public decimal Price { get; set; }
    }
}
