import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase-auth';
import { useNavigate } from 'react-router-dom';
function Signup() {

  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    username: '',
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
    if (!formData.username || !formData.email || !formData.password) {
      return toast.error("All fields are required");
    }
    else {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) =>  
      {const user=res.user
        updateProfile(user,{
          displayName:formData.username
        })
        toast.success(`Succesfully registered`)
        navigate('/login')

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
                Sign Up
              </h1>
              <div className="py-2 text-left">
                <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Username" name='username' value={formData.username} onChange={handleFormData} />
              </div>
              <div className="py-2 text-left">
                <input type="email" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Email" name='email' value={formData.email} onChange={handleFormData} />
              </div>
              <div className="py-2 text-left">
                <input type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Password" name='password' value={formData.password} onChange={handleFormData} />
              </div>
              <div className="py-2">
                <button onClick={handleSubmit} type="submit" className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                  Sign Up
                </button>
              </div>
            </form>

            <div className="text-center mt-12">
              <span>
                Already have an account?
              </span>
              <Link to={'/login'} className=" text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Log In</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Signup
