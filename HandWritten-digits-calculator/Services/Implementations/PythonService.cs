using HandWritten_digits_calculator.Models;
using HandWritten_digits_calculator.Services.Interfaces;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace HandWritten_digits_calculator.Services.Implementations
{
	public class PythonService : IPythonService
	{
		private readonly string _exePath;
		private readonly string _modelPath;

		public PythonService(IWebHostEnvironment webHostEnvironment)
		{
			_exePath = @$"{webHostEnvironment.ContentRootPath}\Resources\Python\dist\main\main.exe";
			_modelPath = @$"{webHostEnvironment.ContentRootPath}\Resources\Python\workspace\models\model0\model.h5";
		}
		public PythonResponse Process(string drawsPath)
		{
			ProcessStartInfo psi = new ProcessStartInfo();
			psi.FileName = _exePath;
			psi.Arguments = $"\"{_modelPath}\" \"{drawsPath}\"";

			psi.UseShellExecute = false;
			psi.CreateNoWindow = true;
			psi.RedirectStandardOutput = true;
			psi.RedirectStandardError = true;

			var results = "";
			var errors = "";
			using (Process process = System.Diagnostics.Process.Start(psi))
			{
				if (process != null)
				{
					errors = process.StandardError.ReadToEnd();
					results = process.StandardOutput.ReadToEnd();
				}
			}

			return new PythonResponse { Results = results, Errors = errors };
		}

		public List<Prediction> ParseResponse(PythonResponse pythonResponse)
		{
			var rawStrings = pythonResponse.Results.Split("\r\n\r\n");
			rawStrings = rawStrings.Take(rawStrings.Length - 1).ToArray();
			return rawStrings.Select(x => new Prediction(x)).ToList();
		}
	}
}
