using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CheckWriter.ServiceLocator
{
    interface IServiceLocator
    {
        T GetService<T>();
    }
}
