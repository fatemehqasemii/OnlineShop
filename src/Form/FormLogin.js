import { Link } from "react-router-dom";

import styles from "./FormLogin.module.css"

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <h6 className={styles.header}>Fashion Style</h6>
        <h2 className={styles.title}>Registration Login to account</h2>
        <div className={styles.formButtons}>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
