import { Button, CircularProgress, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { userRegister } from "../../store/user/actions";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      name,
      email,
      password,
      confirmPassword,
    };
    dispatch(userRegister(data, history));
    setLoading(false);
  };

  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <div className="registerText">
          <div className="title">Lamasocial</div>
          <div className="bodyText">
            Connect with friends and the world around you on Lamasocial.
          </div>
        </div>
        <div className="inputContainer">
          <form autoComplete="off" className="inputForm">
            <div className="inputWrapper">
              <TextField
                className="inputTextField"
                style={{ marginTop: "12px" }}
                label="Username"
                variant="outlined"
                name="name"
                onChange={handleNameChange}
              />
              <TextField
                className="inputTextField"
                style={{ marginTop: "12px" }}
                label="Email"
                variant="outlined"
                name="email"
                onChange={handleEmailChange}
              />
              <TextField
                className="inputTextField"
                style={{ marginTop: "12px" }}
                label="Password"
                variant="outlined"
                name="password"
                onChange={handlePasswordChange}
              />
              <TextField
                className="inputTextField"
                style={{ marginTop: "12px" }}
                label="Repeat Password"
                variant="outlined"
                name="confirmPassword"
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <div className="registerButton">
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "blue",
                  color: "#fff",
                  padding: "10px",
                }}
                variant="contained"
                onClick={handleSignup}
              >
                {isLoading ? <CircularProgress /> : "Sign Up"}
              </Button>
            </div>
            <Link to="/login">
              <div className="oldAccount" style={{ marginTop: "12px" }}>
                <Button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    width: "50%",
                    alignSelf: "center",
                  }}
                >
                  Log Into Account
                </Button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
