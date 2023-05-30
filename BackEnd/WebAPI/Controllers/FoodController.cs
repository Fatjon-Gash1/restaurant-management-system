using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using WebAPI.Models;
namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public FoodController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select FID, Kodi, ChineseFoods, ItalianFoods, Desserts,SeaFoods,
                    FastFood,Tradicional,Salads,Other,TotalP
                    
                    from dbo.Food
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
        public JsonResult Post(Food emp)
        {
            string result = "";
            string q = @"select KodiName from dbo.Kodi where KodiName='" + emp.Kodi + @"'";
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
                    insert into dbo.Food 
                    (Kodi,ChineseFoods,ItalianFoods,Desserts,SeaFoods,
                    FastFood,Tradicional,Salads,Other,TotalP)
                    values 
                    (
                    '" + emp.Kodi + @"'
                    ,'" + emp.ChineseFoods + @"'
                    ,'" + emp.ItalianFoods + @"'
                    ,'" + emp.Desserts + @"'
                    ,'" + emp.SeaFoods + @"'
                    ,'" + emp.FastFood + @"'
                    ,'" + emp.Tradicional + @"'
                    ,'" + emp.Salads + @"'
                    ,'" + emp.Other + @"'

                    ,(isnull((select Price from dbo.ChineseFoods where ChineseFoodsName='" + emp.ChineseFoods + @"'),0)
                    +isnull((select Price from dbo.ItalianFoods where ItalianFoodsName='" + emp.ItalianFoods + @"'),0)
                    +isnull((select Price from dbo.Desserts where DessertsName='" + emp.Desserts + @"'),0)
                    +isnull((select Price from dbo.SeaFoods where SeaFoodsName='" + emp.SeaFoods + @"'),0)
                    +isnull((select Price from dbo.FastFood where FastFoodName='" + emp.FastFood + @"'),0)
                   +isnull((select Price from dbo.Tradicional where TradicionalName='" + emp.Tradicional + @"'),0)
                   +isnull((select Price from dbo.Salads where SaladsName='" + emp.Salads + @"'),0)
                   +isnull((select Price from dbo.Other where OtherName='" + emp.Other + @"'),0))
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

                return new JsonResult("Added Successfully");
            }

            else
            {
                return new JsonResult("Shenoni Kodin e Tavolines tuaj");
            }
        }


        [HttpPut]
        public JsonResult Put(Food emp)
        {
            string query = @"
                    update dbo.Food set 
                    Kodi = '" + emp.Kodi + @"'
                    ,ChineseFoods = '" + emp.ChineseFoods + @"'
                    ,ItalianFoods = '" + emp.ItalianFoods + @"'
                    ,Desserts = '" + emp.Desserts + @"'
                    ,SeaFoods = '" + emp.SeaFoods + @"'
                    ,FastFood = '" + emp.FastFood + @"'
                    ,Tradicional = '" + emp.Tradicional + @"'
                    ,Salads = '" + emp.Salads + @"'
                    ,Other = '" + emp.Other + @"'
                   , TotalP = (isnull((select Price from dbo.ChineseFoods where ChineseFoodsName='" + emp.ChineseFoods + @"'),0)
                    +isnull((select Price from dbo.ItalianFoods where ItalianFoodsName='" + emp.ItalianFoods + @"'),0)
                    +isnull((select Price from dbo.Desserts where DessertsName='" + emp.Desserts + @"'),0)
                    +isnull((select Price from dbo.SeaFoods where SeaFoodsName='" + emp.SeaFoods + @"'),0)
                    +isnull((select Price from dbo.FastFood where FastFoodName='" + emp.FastFood + @"'),0)
                   +isnull((select Price from dbo.Tradicional where TradicionalName='" + emp.Tradicional + @"'),0)
                   +isnull((select Price from dbo.Salads where SaladsName='" + emp.Salads + @"'),0)
                   +isnull((select Price from dbo.Other where OtherName='" + emp.Other + @"'),0))

                    where FID = " + emp.FID + @"
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

            return new JsonResult("Updated Successfully");
        }


        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from dbo.Food
                    where FID = " + id + @" 
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

            return new JsonResult("Deleted Successfully");
        }



    }
}