using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.Models
{
    public class DocumentModel
    {
        public int IdDocument { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Version { get; set; }
        public string FileName { get; set; }
        public string FilePath { get; set; }
        public DateTime DateTimeUpload { get; set; }
        public int User { get; set; }
    }
}
