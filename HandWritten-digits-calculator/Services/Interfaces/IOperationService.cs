using HandWritten_digits_calculator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HandWritten_digits_calculator.Services.Interfaces
{
	public interface IOperationService
	{
		int BuildNumber(List<Draw> number);
		double GetResult(Operation operation);
		Operation GetComputedOperation(Operation operation);
	}
}
