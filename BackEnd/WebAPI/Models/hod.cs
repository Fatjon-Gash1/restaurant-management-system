using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class hod
    {
        public string name { get; set; }
        public decimal price { get; set; }

        public DateTime data = DateTime.Now;
    }
}
