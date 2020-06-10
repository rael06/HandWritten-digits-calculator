using HandWritten_digits_calculator.Models;
using HandWritten_digits_calculator.Services.Interfaces;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HandWritten_digits_calculator.Services.Implementations
{
	public class DrawService : IDrawService
	{
		private readonly string _basePath;
		private readonly string _path;
		public DrawService(IWebHostEnvironment webHostEnvironment)
		{
			_basePath = @$"{webHostEnvironment.ContentRootPath}\Resources\Python\workspace\datasets\draws\";
			_path = _basePath + RandomPathName();
			Directory.CreateDirectory(_path);
		}
		public void SaveFiles(Operation operation)
		{
			foreach (var draw in operation.Number1)
			{
				File.WriteAllBytes(
					$@"{_path}\{draw.Name}.jpg",
					Convert.FromBase64String(draw.Data));
			}

			foreach (var draw in operation.Number2)
			{
				File.WriteAllBytes(
					$@"{_path}\{draw.Name}.jpg",
					Convert.FromBase64String(draw.Data));
			}
		}

		public string GetPath()
		{
			return _path;
		}

		public void Delete()
		{
			Directory.Delete(_path, true);
		}

		public void MapPredictions(List<Draw> draws, List<Prediction> predictions)
		{
			foreach (var draw in draws)
			{
				draw.Prediction = predictions.FirstOrDefault(x => x.Name.Equals(draw.Name));
			}
		}

		private string RandomString(int size, bool lowerCase)
		{
			StringBuilder builder = new StringBuilder();
			Random random = new Random();
			char ch;
			for (int i = 0; i < size; i++)
			{
				ch = Convert.ToChar(Convert.ToInt32(Math.Floor(26 * random.NextDouble() + 65)));
				builder.Append(ch);
			}
			if (lowerCase)
				return builder.ToString().ToLower();
			return builder.ToString();
		}

		private int RandomNumber(int min, int max)
		{
			Random random = new Random();
			return random.Next(min, max);
		}

		public string RandomPathName()
		{
			StringBuilder builder = new StringBuilder();
			builder.Append(RandomString(20, true));
			builder.Append(RandomNumber(1000, 9999));
			builder.Append(RandomString(10, false));
			return builder.ToString();
		}
	}
}
