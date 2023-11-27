using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Microthings.Domain.Models
{
    public class User
    {
        public Guid UniqueId { get; set; }
        public long FriendlyId { get; set; }
        public DateTime CreatedDate { get; set; }
        public Guid CreatedById { get; set; }
        public string CreatedBy { get; set; } = null!;
        public DateTime LastModifiedDate { get; set; }
        public Guid LastModifiedById { get; set; }
        public string LastModifiedBy { get; set; } = null!;
        public bool Deleted { get; set; }
        public byte[] RowVersion { get; set; } = null!;
        public string FirstName { get; set; } = null!;
        public string? MiddleName { get; set; }
        public string LastName { get; set; } = null!;
        public string? EmailAddress { get; set; }
        public string Password { get; set; } = null!;
        public string? Address { get; set; }
    }
}