using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OS_17
{
	class Program
	{
		public static double Factorial(double n)
		{
			if (n == 0) return 1;
			else return n * Factorial(n - 1);
		}
		static void Main(string[] args)
		{
			double a, b, k, result, n, x;
			a = 0.000001;
			b = 0.999999;
			k = 0.000001;
			n = 2;
			x = 1;
			result = 1 + Math.Pow(x, n) / Factorial(n);
			while (a < b)
			{
				if (true)
				{
					Console.Write("x: " + x.ToString() + "\tf: " + result.ToString() + "\r\n");
					n += 2;
					a += k;
					x += 0.0000001;
					result += Math.Pow(x, n) / Factorial(n);
				}
			}

		}
	}
}

