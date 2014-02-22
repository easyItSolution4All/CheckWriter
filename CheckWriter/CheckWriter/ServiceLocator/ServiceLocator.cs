using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CheckWriter.ServiceLocator
{


    //public class stub {

    //    public void UseServiceLocator()
    //    {
    //        IServiceLocator service = new ServiceLocator();

    //        Ia ia = service.GetService<Ia>();

    //        ia.showResults();


    //    }
    
    //}
    //public interface Ia { void showResults(); }
    //public class A : Ia
    //{
    //    public void showResults()
    //    {
    //        throw new NotImplementedException();
    //    }
    //};
    //public interface Ib { }
    //public class B : Ib { }

    //public interface Ic { };

    //public class C : Ic { }
    //public class ServiceLocator : IServiceLocator
    //{
    //    public T GetService<T>()
    //    {
    //        throw new NotImplementedException();
    //    }


    //    private IDictionary<object, object> services;

    //    internal ServiceLocator()
    //    {
    //        services = new Dictionary<object, object>();

    //        // fill the map
    //        this.services.Add(typeof(Ia), new A());
    //        this.services.Add(typeof(Ib), new B());
    //        this.services.Add(typeof(Ic), new C());
    //    }

    //    public T GetService<T>()
    //    {
    //        try
    //        {
    //            return (T)services[typeof(T)];
    //        }
    //        catch (KeyNotFoundException)
    //        {
    //            throw new ApplicationException("The requested service is not registered");
    //        }
    //    }

    //}
}