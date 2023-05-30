using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using WebAPI.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OtherDController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public OtherDController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
            select OtherDId,OtherDName,Price
            from dbo.OtherD
            ";
            DataTable table = new DataTable();

            string sqlDataSource = _configuration.GetConnectionString("RMSCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();

                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(OtherD fi)
        {

            string query = @"
               insert into dbo.OtherD
                (OtherDName, Price)
                values
                (
                     '" + fi.OtherDName + @"'
                    , '" + fi.Price + @"'
                )
                insert into dbo.Hod
                (name,price,data)
                values
                (         
                         '" + fi.OtherDName + @"'
                        ,'" + fi.Price + @"'
                        ,getdate()
                )
                ";
            DataTable table = new DataTable();

            string sqlDataSource = _configuration.GetConnectionString("RMSCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();

                }
            }
            return new JsonResult("Added Succesfully");

        }

        [HttpPut]
        public JsonResult Put(OtherD fi)
        {
            string query = @"
                update dbo.OtherD set
                OtherDName ='" + fi.OtherDName + @"',
                Price ='" + fi.Price + @"'
                where OtherDId=" + fi.OtherDId + @"
                ";

            DataTable table = new DataTable();

            string sqlDataSource = _configuration.GetConnectionString("RMSCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();

                }
            }
            return new JsonResult("Updated Succesfully");

        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                delete from dbo.OtherD
                where OtherDId=" + id + @"
                ";

            DataTable table = new DataTable();

            string sqlDataSource = _configuration.GetConnectionString("RMSCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();

                }
            }
            return new JsonResult("Deleted Succesfully");

        }

    }
}
