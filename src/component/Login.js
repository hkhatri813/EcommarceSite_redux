import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({data}) => {
  const [enteredName, setEnteredName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid =
    enteredName.trim() !== ""  || password.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const passwordCangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const history = useNavigate();

  const onSubmit = (e) => {
      e.preventDefault()
      history('/signup')
      
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    
    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(password);
    setEnteredName("");
    setPassword("");
    alert("Login in successfully");
    history("/");
    setEnteredNameTouched(false);
    data()
    
  };

  return (
    <>
      <div style={{ textAlign: "" }}>
        <h1>Login Form</h1>
      </div>

      <div style={{ width: "40%", marginLeft: "30%", marginTop: "20px" }}>
        <form onSubmit={formSubmissionHandler}>
          <div className="form-group" style={{textAlign:'start'}}>
            <label>Email address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              value={enteredName}
              onBlur={nameInputBlurHandler}
              onChange={nameInputChangeHandler}
            />
            {nameInputIsInvalid && (
              <p style={{ color: "red" }}>Email is required</p>
            )}

            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onBlur={nameInputBlurHandler}
              onChange={passwordCangeHandler}
            />

            {nameInputIsInvalid && (
              <p style={{ color: "red" }}>password is required</p>
            )}
          </div>
          <div>
            <Link to="/forget">Forgot Password</Link>
          </div>
          <button
            style={{ marginTop: "10px" }}
            type="submit"
            class="btn btn-primary"
          >
            Login
          </button>
        </form>
        <button onClick={onSubmit}
          style={{marginTop:'-60px', marginLeft: "200px" }}
          type="submit"
          class="btn btn-primary"
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default Login;








// import React from "react";
// import "../Styles/Login.css";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//   const [enteredName, setEnteredName] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState([]);

//   const [enteredNameTouched, setEnteredNameTouched] = useState(false);
//   const enteredNameIsValid =
//     enteredName.trim() !== "" || password.trim() !== "";
//   const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

//   let formIsValid = false;

//   if (enteredNameIsValid) {
//     formIsValid = true;
//   }

//   const nameInputChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//   };

//   const passwordCangeHandler = (event) => {
//     setPassword(event.target.value);
//   };

//   const nameInputBlurHandler = (event) => {
//     setEnteredNameTouched(true);
//   };

//   const history = useNavigate();

//   const onSubmit = (e) => {
//     e.preventDefault();
//     history("/signup");
//   };

//   const formSubmissionHandler = (event) => {
//     event.preventDefault();
//     // const expenseData = {
//     //     //Add data in list
//     //     id: new Date().getTime(),
//     //     enteredName: enteredName,
//     //     password: password,
//     //   };
//     //   console.log(expenseData);

//     //   setUser([expenseData, ...user]);

//     setEnteredNameTouched(true);
//     if (!enteredNameIsValid) {
//       return;
//     }
//     console.log(enteredName);
//     console.log(password);
//     setEnteredName("");
//     setPassword("");
//     alert("Login in successfully");
//     history("/");
//     setEnteredNameTouched(false);
//   };

//   return (
//     <div class="login-box">
//       <h2>Login</h2>
//       <form onSubmit={formSubmissionHandler}>
//             <label>Username</label>
//         <div class="user-box">
//           <input
//             type="text"
//             name=""
//             placeholder="Enter Email"
//             value={enteredName}
//             onBlur={nameInputBlurHandler}
//             onChange={nameInputChangeHandler}
//             />
//             {nameInputIsInvalid && (
//                 <p style={{ color: "red" }}>Email is required</p>
//               )}
//         </div>
//             <label>Password</label>
//         <div class="user-box">
//           <input
//             type="password"
//             name=""
//             placeholder="Enter Password"
//             value={password}
//             onBlur={nameInputBlurHandler}
//             onChange={passwordCangeHandler}
//           />
//           {nameInputIsInvalid && (
//               <p style={{ color: "red" }}>password is required</p>
//             )}
//         </div>
//         <Link to="/">
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           Submit
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default Login;
