using System;
using System.Data;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UsersController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        public IActionResult Create(Users user)
        {
            if (ModelState.IsValid)
            {
                string query = @"
                    INSERT INTO Users (Username, PasswordHash, Email, CreatedAt, IsActive)
                    VALUES (@Username, @PasswordHash, @Email, @CreatedAt, @IsActive)
                    ";
                string connectionString = _configuration.GetConnectionString("RMSCon");

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        // Hash the password before storing it
                        user.PasswordHash = HashPassword(user.PasswordHash);

                        command.Parameters.AddWithValue("@Username", user.Username);
                        command.Parameters.AddWithValue("@PasswordHash", user.PasswordHash);
                        command.Parameters.AddWithValue("@Email", user.Email);
                        command.Parameters.AddWithValue("@CreatedAt", DateTime.Now);
                        command.Parameters.AddWithValue("@IsActive", true);

                        connection.Open();
                        int rowsAffected = command.ExecuteNonQuery();
                        connection.Close();

                        if (rowsAffected > 0)
                        {
                            return Ok("User created successfully.");
                        }
                    }
                }
            }

            return BadRequest("Invalid user data.");
        }

        private string HashPassword(string password)
        {
            return password;
        }
    }
}
