
// import React, { useState } from 'react';
// import { useRouter } from 'next/router';

// const Login = ({ onLogin }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   const handleLoginClick = () => {
//     onLogin();
//   };
//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
//         <img src="travel.png" alt="" className="w-full h-full object-cover" />
//       </div>

//       <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
//         <div className="w-full">
//           <h1 className="text-xl md:text-2xl font-bold leading-tight mt-6 md:mt-12">
//             Log in to your account
//           </h1>

//           <form className="mt-6">
//             <div>
//               <label className="block text-gray-700">Email Address</label>
//               <input
//                 type="email"
//                 name=""
//                 id=""
//                 placeholder="Enter Email Address"
//                 className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
//                 autoFocus
//                 autoComplete="email"
//                 required
//               />
//             </div>

//             <div className="mt-4 relative">
//               <label className="block text-gray-700">Password</label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
//                 placeholder="Enter password"
//                 required
//               />

//               <span
//                 className="absolute inset-y-0 right-0 grid place-content-center px-4 mt-8 cursor-pointer"
//                 onClick={togglePasswordVisibility}
//               >
//                 {showPassword ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 text-gray-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     {/* Your SVG paths */}
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 text-gray-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     {/* Your SVG paths */}
//                   </svg>
//                 )}
//               </span>
//             </div>

//             <button
//               onClick={handleLoginClick}
//               className="w-full block text-white font-semibold rounded-lg px-4 py-3 mt-6 bg-gradient-to-r from-orange-500 to-yellow-300"
//             >
//               Log In
//             </button>
//           </form>

//           <hr className="my-6 border-gray-300 w-full" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;






import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Login = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginClick = () => {
    // Perform authentication here, and if successful, save the password in localStorage.
    const isAuthenticated = true; // Replace with your actual authentication logic
    if (isAuthenticated) {
      localStorage.setItem('userPassword', password);
      onLogin();
    }
  };

  useEffect(() => {
    // Check if the user's password is saved in localStorage.
    const savedPassword = localStorage.getItem('userPassword');
    if (savedPassword) {
      // Automatically log in the user.
      setPassword(savedPassword);
      handleLoginClick();
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src="travel.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-6 md:mt-12">
            Log in to your account
          </h1>

          <form className="mt-6">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus
                autoComplete="email"
                required
              />
            </div>

            <div className="mt-4 relative">
              <label className="block text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                className="absolute inset-y-0 right-0 grid place-content-center px-4 mt-8 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Your SVG paths */}
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Your SVG paths */}
                  </svg>
                )}
              </span>
            </div>

            <button
              onClick={handleLoginClick}
              className="w-full block text-white font-semibold rounded-lg px-4 py-3 mt-6 bg-gradient-to-r from-orange-500 to-yellow-300"
            >
              Log In
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Login;
