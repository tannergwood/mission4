using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace mission4.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0, 100)]
        public float Assignments { get; set; }

        [Required]
        [Range(0, 100)]

        public float Groupprojects { get; set; }

        [Required]
        [Range(0, 100)]

        public float Quizzes { get; set; }

        [Required]
        [Range(0, 100)]

        public float Midterms { get; set; }

        [Required]
        [Range(0, 100)]

        public float Final { get; set; }

        [Required]
        [Range(0, 100)]

        public float Intex { set; get; }
    }
}

