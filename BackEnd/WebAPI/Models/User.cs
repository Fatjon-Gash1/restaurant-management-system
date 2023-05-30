using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Restaurant { get; set; }
        public string FoodItem { get; set; }
        public string Drink { get; set; }

    }
}
