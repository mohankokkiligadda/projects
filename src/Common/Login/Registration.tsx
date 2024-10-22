// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaGithub } from 'react-icons/fa'; 
// import { FcGoogle } from 'react-icons/fc'; 
// import './Registration.scss';
// import axios from 'axios';

// function Registration() {
//   const [registrationData, setRegistrationData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

  // const handleRegistration = async () => {
  //   try {
  //     // Send a registration request to your backend using Axios
  //     const response = await axios.post('http://localhost:8090/users', registrationData);

  //     // Handle the response from the server
  //     if (response.status === 201) {
  //       // Registration successful, you can redirect or perform any other action here
  //       console.log('Registration successful');
  //     } else {
  //       // Registration failed
  //       console.log('Registration failed');
  //     }
  //   } catch (error) {
  //     // Handle any network or server errors here
  //     console.error('Error:', error);
  //   }
  //   console.log('Registering with:', registrationData);
  // };

//   return (
//     <div className="registration-container">
//       <h2>Registration</h2>
//       <div className="social-login">
//         <div className='login-btns'>
//         <a href="/auth/github" className="social-icon">
//           <FaGithub /> GitHub
//         </a>
//         </div>
//         <div className='login-btns'>
//         <a href="/auth/google" className="social-icon">
//           <FcGoogle /> Google
//         </a>
//         </div>
//       </div>
//       <div className="form-group">
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           placeholder="Enter your username"
//           className="form-control"
//           value={registrationData.username}
//           onChange={(e) => setRegistrationData({ ...registrationData, username: e.target.value })}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           placeholder="Enter your email"
//           className="form-control"
//           value={registrationData.email}
//           onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           placeholder="Enter your password"
//           className="form-control"
//           value={registrationData.password}
//           onChange={(e) => setRegistrationData({ ...registrationData, password: e.target.value })}
//         />
//       </div>
//       <button className="btn btn-primary" onClick={handleRegistration}>
//         Register
//       </button>
//       <p>
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   );
// }

// export default Registration;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaGithub } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';
// import './Registration.scss';

// function Registration() {
//   const [registrationData, setRegistrationData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState<string | null>(null);
//   const [isRegistered, setIsRegistered] = useState(false);

//   const handleRegistration = () => {
//     // Simple client-side validation
//     if (!registrationData.username || !registrationData.email || !registrationData.password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     setError(null);

    
//     console.log('Registering with:', registrationData);
//     console.log('Registration successful');

    
//     setIsRegistered(true);
//   };

//   return (
//     <div className="registration-container">
//       <h2>Registration</h2>
//       <div className="social-login">
//         <div className='login-btns'>
//           <a href="/auth/github" className="social-icon">
//             <FaGithub /> GitHub
//           </a>
//         </div>
//         <div className='login-btns'>
//           <a href="/auth/google" className="social-icon">
//             <FcGoogle /> Google
//           </a>
//         </div>
//       </div>

//       {error && <p className="error-message">{error}</p>}
//       {isRegistered && (
//         <p className="success-message">Registration successful! You can now <Link to="/login">login</Link>.</p>
//       )}

//       <div className="form-group">
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           placeholder="Enter your username"
//           className="form-control"
//           value={registrationData.username}
//           onChange={(e) => setRegistrationData({ ...registrationData, username: e.target.value })}
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           placeholder="Enter your email"
//           className="form-control"
//           value={registrationData.email}
//           onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           placeholder="Enter your password"
//           className="form-control"
//           value={registrationData.password}
//           onChange={(e) => setRegistrationData({ ...registrationData, password: e.target.value })}
//         />
//       </div>

//       <button className="btn btn-primary" onClick={handleRegistration}>
//         Register
//       </button>

//       <p>
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   );
// }

// export default Registration;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaGithub } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';
// import axios from 'axios';
// import './Registration.scss';

// function Registration() {
//   const [registrationData, setRegistrationData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState<string | null>(null);
//   const [isRegistered, setIsRegistered] = useState(false);

//   const handleRegistration = async () => {
//     // Simple client-side validation
//     if (!registrationData.username) {
//       setError('Username is required');
//       return;
//     }

//     if (!registrationData.email) {
//       setError('Email is required');
//       return;
//     }

//     if (!registrationData.password) {
//       setError('Password is required');
//       return;
//     }

//     if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*[0-9]).{8,}$/.test(registrationData.password)) {
//       setError('Password must start with a capital letter, contain at least one special character, one number, and be at least 8 characters long');
//       return;
//     }

//     try {
//       // Check if the username or email is already taken
//       const userCheckResponse = await axios.get(`http://localhost:8090/users/check?username=${registrationData.username}&email=${registrationData.email}`);

//       if (userCheckResponse.data.exists) {
//         setError('Username or email already exists. Please choose a different one.');
//         return;
//       }

//       // Send a registration request to your backend using Axios
//       const response = await axios.post('http://localhost:8090/users', registrationData);

//       // Handle the response from the server
//       if (response.status === 201) {
//         // Registration successful, you can redirect or perform any other action here
//         console.log('Registration successful');
//         setError(null); // Clear any previous error messages
//         setIsRegistered(true); // Set the registration success state
//         // Clear the input fields
//         setRegistrationData({
//           username: '',
//           email: '',
//           password: '',
//         });
//       } else {
//         // Registration failed
//         setError('Registration failed. Please try again.'); // Set an error message
//       }
//     } catch (error) {
//       // Handle any network or server errors here
//       console.error('Error:', error);
//       setError('Network or server error. Please try again later.'); // Set a general error message
//     }

//     console.log('Registering with:', registrationData);
//   };

//   return (
//     <div className="registration-container">
//       <h2>Registration</h2>
//       <div className="social-login">
//         <div className='login-btns'>
//           <a href="/auth/github" className="social-icon">
//             <FaGithub /> GitHub
//           </a>
//         </div>
//         <div className='login-btns'>
//           <a href="/auth/google" className="social-icon">
//             <FcGoogle /> Google
//           </a>
//         </div>
//       </div>

//       {error && <p className="error-message">{error}</p>}
//       {isRegistered && (
//         <p className="success-message">Registration successful! You can now <Link to="/login">login</Link>.</p>
//       )}

//       <div className="form-group">
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           placeholder="Enter your username"
//           className="form-control"
//           value={registrationData.username}
//           onChange={(e) => setRegistrationData({ ...registrationData, username: e.target.value })}
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           placeholder="Enter your email"
//           className="form-control"
//           value={registrationData.email}
//           onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           placeholder="Enter your password"
//           className="form-control"
//           value={registrationData.password}
//           onChange={(e) => setRegistrationData({ ...registrationData, password: e.target.value })}
//         />
//       </div>

//       <button className="btn btn-primary" onClick={handleRegistration}>
//         Register
//       </button>

//       <p>
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   );
// }

// export default Registration;






import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './Registration.scss';
import { Header } from '../Header/Header';

function Registration() {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = () => {
    const { username, email, password } = registrationData;
    const newErrors = {
      username: '',
      email: '',
      password: '',
    };

    // Simple client-side validation
    if (!username) {
      newErrors.username = 'Username is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      newErrors.password = 'Password must contain at least one special character';
    }

    // If there are errors, set them and return
    if (newErrors.username || newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    // Clear errors
    setErrors({
      username: '',
      email: '',
      password: '',
    });

    console.log('Registering with:', registrationData);
    console.log('Registration successful');

    setIsRegistered(true);

    // Clear the input fields
    setRegistrationData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
  <>
 <Header/>
    <div className="registration-container">
      <h2>Registration</h2>
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

      {errors.username && <p className="error-message">{errors.username}</p>}
      {errors.email && <p className="error-message">{errors.email}</p>}
      {errors.password && <p className="error-message">{errors.password}</p>}
      {isRegistered && (
        <p className="success-message">Registration successful! You can now <Link to="/login">login</Link>.</p>
        )}

      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          className="form-control"
          value={registrationData.username}
          onChange={(e) => setRegistrationData({ ...registrationData, username: e.target.value })}
          />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="form-control"
          value={registrationData.email}
          onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
          />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          className="form-control"
          value={registrationData.password}
          onChange={(e) => setRegistrationData({ ...registrationData, password: e.target.value })}
          />
      </div>

      <button className="btn btn-primary" onClick={handleRegistration}>
        Register
      </button>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
          </>
  );
}

export default Registration;
