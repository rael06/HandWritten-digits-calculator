using HandWritten_digits_calculator.Models;
using HandWritten_digits_calculator.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HandWritten_digits_calculator.Services.Implementations
{
	public class OperationService : IOperationService
	{
		public int BuildNumber(List<Draw> number)
		{
			if (number.Count == 0) return 0;
			var builder = new StringBuilder();
			foreach (var draw in number)
			{
				builder.Append(draw.Prediction.Digit);
			}

			return int.Parse(builder.ToString());
		}

		public double GetResult(Operation operation)
		{
			return operation.Operator switch
			{
				"-" => (double)operation.PredictedNumber1 - operation.PredictedNumber2,
				"x" => (double)operation.PredictedNumber1 * operation.PredictedNumber2,
				"/" => operation.PredictedNumber2 != 0 ? (double)operation.PredictedNumber1 / operation.PredictedNumber2 : double.MaxValue,

				_ => (double)operation.PredictedNumber1 + operation.PredictedNumber2,
			};
		}

		public Operation GetComputedOperation(Operation operation)
		{
			operation.PredictedNumber1 = BuildNumber(operation.Number1);
			operation.PredictedNumber2 = BuildNumber(operation.Number2);
			operation.Result = GetResult(operation);
			operation.OperationString = $"{operation.PredictedNumber1} {operation.Operator} {operation.PredictedNumber2} = {operation.Result}";
			return operation;
		}
	}
}
