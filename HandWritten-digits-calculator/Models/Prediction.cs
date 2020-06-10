using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace HandWritten_digits_calculator.Models
{
	public class Prediction
	{
		public string Name { get; set; }
		public int Digit { get; set; }
		public List<float> Scores { get; set; }
		public Prediction(string pythonPrediction)
		{
			var lines = pythonPrediction.Split("\r\n");
			Name = lines[0].Replace(".jpg", "");
			Digit = int.Parse(lines[1]);
			Scores = new List<float>();
			for (int i = 2; i < 12; i++)
			{
				Scores.Add(float.Parse(lines[i], CultureInfo.InvariantCulture));
			}
		}
	}
}
