import React, { useState } from 'react';
import SignUp from '../images/welcome.gif';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {

  const imageStyle = {
    height: '50%',
    width: '100%',
    marginTop:'55%'
  };

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [isClientRegistration, setIsClientRegistration] = useState(true);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  const toggleRegistration = (isClient) => {
    setIsClientRegistration(isClient);
  };


  return (

    <main className="flex-row justify-center container">
      <div className="col-10">
        <section className="bg-white">
          <div className="flex justify-center h-screen">

            <div className="hidden bg-cover lg:block lg:w-3/5 border border:cyan-500">
              <img src={SignUp} alt="hold hands" style={imageStyle} />
            </div>

            <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 border">
              <div className="w-full">
                <div className="mt-6">
                  <h1 className="text-gray-500 text-3xl ">Please Login to Access Your Account</h1>
                  <>
                    <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                     
                    </div>

                    <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">

                      <div>
                        <label
                          className="block mb-2 text-sm text-gray-600 ">
                          Email address
                        </label>
                        <input
                          placeholder="Your email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                          required />
                      </div>

                      <div>
                        <label
                          className="block mb-2 text-sm text-gray-600 ">
                          Password
                        </label>
                        <input
                          placeholder="************"
                          name="password"
                          type="password"
                          value={formState.password}
                          onChange={handleChange}
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          required />
                      </div>

                      <button
                        className="flex items-center justify-between w-full px-4 py-2 text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-500 rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                        type="submit" 
                        style={{ cursor: 'pointer' }}>
                        <span>
                          Login
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 rtl:-scale-x-100"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                          </svg>
                      </button>

                    </form>
                  </>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
};

export default Login;


// old button for patient (changed to skydiver, but don't really need now)
//  <button
// className={`flex justify-center w-full px-6 py-3 text-white rounded-lg md:w-auto md:mx-2 focus:outline-none ${isClientRegistration ? 'bg-cyan-500' : 'bg-gray-300'
// }`}
// onClick={() => toggleRegistration(true)}
// >
// <svg
// xmlns="http://www.w3.org/2000/svg"
// className="w-6 h-6"
// fill="none"
// viewBox="0 0 24 24"
// stroke="currentColor"
// strokeWidth="2"
// >
// <path
//   strokeLinecap="round"
//   strokeLinejoin="round"
//   d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
// />
// </svg>
// <span className="mx-2">Skydiver</span>
// </button>