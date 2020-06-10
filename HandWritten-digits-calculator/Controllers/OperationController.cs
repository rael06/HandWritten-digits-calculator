using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HandWritten_digits_calculator.Models;
using HandWritten_digits_calculator.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HandWritten_digits_calculator.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class OperationController : ControllerBase
	{
		private readonly IDrawService _drawService;
		private readonly IPythonService _pythonService;
		private readonly IOperationService _operationService;
		public OperationController(IDrawService drawService, IPythonService pythonService, IOperationService operationService)
		{
			_drawService = drawService;
			_pythonService = pythonService;
			_operationService = operationService;
		}

		[HttpPost]
		public Operation Python(Operation operation)
		{
			_drawService.SaveFiles(operation);
			var pythonResponse = _pythonService.Process(_drawService.GetPath());
			_drawService.Delete();
			var predictions = _pythonService.ParseResponse(pythonResponse);
			_drawService.MapPredictions(operation.Number1, predictions);
			_drawService.MapPredictions(operation.Number2, predictions);
			return _operationService.GetComputedOperation(operation);
		}
	}
}
