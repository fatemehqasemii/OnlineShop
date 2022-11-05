import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Functions
import { validate } from "./Validate";
import { notify } from "./toast";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouch] = useState([]);

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data, touched]);

  const changeHandler = (event) => {
    {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouch({ ...touched, [event.target.name]: true });
  };

  const sunmitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("Your signed in successfuly", "success");
    } else {
      notify("Invalid data!", "error");
      setTouch({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={sunmitHandler}>
        <h2 className={styles.header}>Login</h2>
        <div className={styles.formField}>
          <label>Email</label>
          <input
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
            name="email"
            type="text"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <label>Password</label>
          <input
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
            name="password"
            type="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link to="/signup">Sign Up</Link>
          <button type="submit">Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
