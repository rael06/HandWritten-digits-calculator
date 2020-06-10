using HandWritten_digits_calculator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HandWritten_digits_calculator.Services.Interfaces
{
	public interface IDrawService
	{
		void SaveFiles(Operation operation);
		string GetPath();
		void Delete();
		void MapPredictions(List<Draw> draws, List<Prediction> predictions);
	}
}
