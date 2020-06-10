using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HandWritten_digits_calculator.Models
{
	public class Operation
	{
		public List<Draw> Number1 { get; set; }
		public List<Draw> Number2 { get; set; }
		public string Operator { get; set; }
		public double Result { get; set; }
		public string OperationString { get; set; }
		public int PredictedNumber1 { get; set; }
		public int PredictedNumber2 { get; set; }
	}
}
