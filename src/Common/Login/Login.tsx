// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaGithub } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';
// import './Login.scss';
// import axios from 'axios';

// function Login() {

//   const [loginData, setLoginData] = useState({
//     emailOrUserName: '',
//     password: '',
//   });

  // const handleLogin = async () => {
  //   try {
  //     // Send a request to authenticate the user using Axios
  //     const response = await axios.post('http://localhost:8090/signIn', loginData);

  //     // Handle the response from the server
  //     if (response.data.message === 'SUCCESS') {
  //       // Authentication successful, you can redirect or perform any other action here
  //       console.log('Login successful');
  //     } else {
  //       // Authentication failed
  //       console.log('Login failed');
  //     }
  //   } catch (error) {
  //     // Handle any network or server errors here
  //     console.error('Error:', error);
  //   }

  //   console.log('Logging in with:', loginData);
  // };

//   return (
//     <div className="login-container">
//       <h2 className="login-title">Login</h2>

//       <div className="social-login">
//         <div className="login-btns">
//           <a href="/auth/github" className="social-icon">
//             <FaGithub /> GitHub
//           </a>
//         </div>
//         <div className="login-btns">
//           <a href="/auth/google" className="social-icon">
//             <FcGoogle /> Google
//           </a>
//         </div>
//       </div>

//       <div className="form-group">
//         <label htmlFor="username" className="login-label">
//           Username or Email:
//         </label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={loginData.emailOrUserName}
//           onChange={(e) => setLoginData({ ...loginData, emailOrUserName: e.target.value })}
//           className="login-input"
//           placeholder="Enter your username or email"
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="password" className="login-label">
//           Password:
//         </label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={loginData.password}
//           onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
//           className="login-input"
//           placeholder="Enter your password"
//         />
//       </div>

//       <button className="btn btn-primary login-button" onClick={handleLogin}>
//         Login
//       </button>

//       <div className="login-footer">
//         <p className="login-in-register">
//           Don't have an account? <Link to="/register" className="login-link">Register</Link>
//         </p>
//         <p className="login-forgot-password">Forgot password</p>
//       </div>
//     </div>
//   );
// }

// export default Login;





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './Login.scss';
import { Header } from '../Header/Header';

function Login() {
  const [loginData, setLoginData] = useState({
    emailOrUserName: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
   
    if (!loginData.emailOrUserName || !loginData.password) {
      setError('Please fill in all fields');
      return;
    }
    setError(null);

    const dummyToken = "token";

    console.log('Logging in with:', loginData);
    console.log('Login successful');

    localStorage.setItem("token",dummyToken);

   
    window.location.href = '/';
  };

  return (
    <>
    <Header/>
    <div className="login-container">
      <h2 className="login-title">Login</h2>

      <div className="social-login">
        <div className="login-btns">
          <a href="/auth/github" className="social-icon">
            <FaGithub /> GitHub
          </a>
        </div>
        <div className="login-btns">
          <a href="/auth/google" className="social-icon">
            <FcGoogle /> Google
          </a>
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="form-group">
        <label htmlFor="username" className="login-label">
          Username or Email:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={loginData.emailOrUserName}
          onChange={(e) => setLoginData({ ...loginData, emailOrUserName: e.target.value })}
          className="login-input"
          placeholder="Enter your username or email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="login-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          className="login-input"
          placeholder="Enter your password"
          />
      </div>

      <button className="btn btn-primary login-button" onClick={handleLogin}>
        Login
      </button>

      <div className="login-footer">
        <p className="login-in-register">
          Don't have an account? <Link to="/register" className="login-link">Register</Link>
        </p>
        <p className="login-forgot-password">Forgot password</p>
      </div>
    </div>
          </>
  );
}

export default Login;






