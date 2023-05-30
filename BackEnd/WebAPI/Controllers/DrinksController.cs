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
    public class DrinksController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public DrinksController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
            select DID,Kodi,Alcoholic,NonAlcoholic,Tea,Coffee,OtherD,TotalP
            from dbo.Drinks
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
        public JsonResult Post(Drinks fi)
        {
            string result = "";
            string q = @"select KodiName from dbo.Kodi where KodiName='" + fi.Kodi + @"'";
            DataTable t = new DataTable();

            string sql = _configuration.GetConnectionString("RMSCon");
            SqlDataReader Reader;
            using (SqlConnection myCon = new SqlConnection(sql))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    Reader = myCommand.ExecuteReader();
                    t.Load(Reader); ;
                    string getValue = (string)myCommand.ExecuteScalar();
                    Reader.Close();
                    if (getValue != null)
                    {
                        result = getValue.ToString();
                    }
                    else
                        myCon.Close();

                }
            }

            if (result != "")
            {
                string query = @"
                insert into dbo.Drinks
                (Kodi,Alcoholic,NonAlcoholic,Tea,Coffee,OtherD,TotalP)
                values
                (
                    '" + fi.Kodi + @"'                    
                    , '" + fi.Alcoholic + @"'
                    , '" + fi.NonAlcoholic + @"'
                    , '" + fi.Tea + @"'
                    , '" + fi.Coffee + @"'
                    , '" + fi.OtherD + @"'
            
                    ,(isnull((select Price from dbo.Alcoholic where AlcoholicName='" + fi.Alcoholic + @"'),0)
                    +isnull((select Price from dbo.NonAlcoholic where NonAlcoholicName='" + fi.NonAlcoholic + @"'),0)
                    +isnull((select Price from dbo.Tea where TeaName='" + fi.Tea + @"'),0)
                    +isnull((select Price from dbo.Coffee where CoffeeName='" + fi.Coffee + @"'),0)
                    +isnull((select Price from dbo.OtherD where OtherDName='" + fi.OtherD + @"'),0) )

                )";
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

            else
            {
                return new JsonResult("Shenoni Kodin e Tavolines tuaj");
            }


        }

        [HttpPut]
        public JsonResult Put(Drinks fi)
        {
            string query = @"
                update dbo.Drinks set
                Kodi ='" + fi.Kodi + @"',
                Alcoholic ='" + fi.Alcoholic + @"',
                NonAlcoholic ='" + fi.NonAlcoholic + @"',
                Tea ='" + fi.Tea + @"',
                Coffee ='" + fi.Coffee + @"',
                OtherD ='" + fi.OtherD + @"',
                TotalP = (isnull((select Price from dbo.Alcoholic where AlcoholicName='" + fi.Alcoholic + @"'),0)
                    +isnull((select Price from dbo.NonAlcoholic where NonAlcoholicName='" + fi.NonAlcoholic + @"'),0)
                    +isnull((select Price from dbo.Tea where TeaName='" + fi.Tea + @"'),0)
                    +isnull((select Price from dbo.Coffee where CoffeeName='" + fi.Coffee + @"'),0)
                    +isnull((select Price from dbo.OtherD where OtherDName='" + fi.OtherD + @"'),0) )

                where DID=" + fi.DID + @"
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
                delete from dbo.Drinks
                where DID=" + id + @"
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
            return new JsonResult("Deleted  Succesfully");

        }

    }
}
