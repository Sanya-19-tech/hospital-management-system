using HospitalAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace HospitalAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Patient> Patients { get; set; }
    }
}
