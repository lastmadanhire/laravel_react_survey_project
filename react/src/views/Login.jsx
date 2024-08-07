import { useState } from "react";
import axiosClient from "../axios";
import { useStateContext } from "../contexts/ContextProvider";

export default function Login() {
    const {setCurrentUser,setUserToken}=useStateContext();
    const [email,setEmail] =useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState({__html:''})
    const onSubmit = (e) => {
        e.preventDefault();
        setError
        axiosClient.post('http://localhost:8000/api/v1/signin',{
            email,password
        })

        .then(({data})=>{
            setCurrentUser(data[0].user);
            setUserToken(data[0].token);
        })
        .catch((error) =>{
            console.log(error.response.errors);
            if (error.response.data && error.response.data.errors) {
                const errors=error.response.data.errors
                    setError({__html:errors})
            }

        })
    }
    return (
      <>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
        </h2>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {error.__html && (
                <div className="bg-red-500 py-2 px-4 text-white" dangerouslySetInnerHTML={error}>

                </div>
            )}
            <form className="space-y-6" method="POST" onSubmit={onSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={e=>setPassword(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

          </div>
      </>
    )
  }
