﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OpenSky.Models
{
    public class UpdatesLogModel
    {
        public int IdUpdate { get; set; }
        public int DocumentId { get; set; }
        public DateTime DateTimeModification { get; set; }
        public bool UploadsNewFile { get; set; }
        public string LastVersion { get; set; }
        public string NewVersion { get; set; }
        public int User { get; set; }
    }
}