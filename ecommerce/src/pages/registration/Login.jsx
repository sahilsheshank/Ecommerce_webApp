import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { auth } from '../../Firebase/Firebase-auth';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate();

  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
  });

  const handleFormData = (e) => {
    e.preventDefault
    const value = e.target.value;
    const name = e.target.name;

    setFormData({ ...formData, [name]: value })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( !formData.email || !formData.password) {
      return toast.error("All fields are required");
    }
    else {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) =>  
      {
        
        toast.success(`Logged In`)
        navigate('/')

      }

      )
      .catch((err) => toast.error(err.message));
    }
}

  return (
    <Layout>
        <section className="min-h-screen h-full flex flex-col">
            <nav>
                
            </nav>
            <div className="flex flex-1 items-center justify-center">
                <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form className="text-center">
                        <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                            Log in
                        </h1>
                        <div className="py-2 text-left">
                        <input type="email" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Email" name='email' value={formData.email} onChange={handleFormData} />
                        </div>
                        <div className="py-2 text-left">
                        <input type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Password" name='password' value={formData.password} onChange={handleFormData} />
                        </div>
                        <div className="py-2">
                            <button onClick={handleSubmit}  type="submit" className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <a href="#" className="hover:underline">Forgot password?</a>
                    </div>
                    <div className="text-center mt-12">
                        <span>
                            Don't have an account?
                        </span>
                        <Link to={'/signup'} className=" text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Create One</Link>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default Login
