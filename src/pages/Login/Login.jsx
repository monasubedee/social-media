import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from '../../store/user/actions';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    const data = {
      email,
      password
    };
    dispatch(userLogin(data,history));
 
  }; 

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginText">
          <div className="title">MNsocial</div>
          <div className="bodyText">
            Connect with friends and the world around you on Lamasocial.
          </div>
        </div>
        <div className="inputContainer">
          <form autoComplete="off" className="inputForm" onSubmit={handleLogIn}>
            <div className="inputWrapper">
              <TextField
                className="inputField"
                label="Email"
                name="email"
                variant="outlined"
                onChange={handleEmailChange}
              />
              <TextField
                className="inputField"
                style={{ marginTop: "12px" }}
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                onChange={handlePasswordChange}
              />
            </div>
            <div className="loginButton">
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "blue",
                  color: "#fff",
                  padding: "10px",
                }}
                variant="contained"
                onClick={handleLogIn}
              >
                {isLoading ? <CircularProgress /> : "Log In"}
              </Button>
            </div>
            <div className="newAccount">
              <p style={{ alignSelf: "center" }}>Forgot Password?</p>
              <Link to="/register">
                <div style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      width: "50%",
                      alignSelf: "center",
                    }}
                  >
                    Create a New Account
                  </Button>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
