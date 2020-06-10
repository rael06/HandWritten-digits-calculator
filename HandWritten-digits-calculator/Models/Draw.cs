using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HandWritten_digits_calculator.Models
{
	public class Draw
	{
		public int NumberIndex { get; set; }
		public int DigitIndex { get; set; }
		public string Name { get; set; }
		public string Data { get; set; }
		public Prediction Prediction { get; set; }
	}
}
