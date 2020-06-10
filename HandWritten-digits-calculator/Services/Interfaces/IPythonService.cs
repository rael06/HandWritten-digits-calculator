using HandWritten_digits_calculator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HandWritten_digits_calculator.Services.Interfaces
{
	public interface IPythonService
	{
		PythonResponse Process(string drawsPath);
		List<Prediction> ParseResponse(PythonResponse pythonResponse);
	}
}
