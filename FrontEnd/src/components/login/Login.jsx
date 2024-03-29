import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        userData,
        config
      );

      console.log(response);
      toast.success(response.data.message);
      localStorage.setItem("token", response.data.token);
      navigate("/admin");
      // Redirect or handle successful login as needed
    } catch (error) {
      console.error(error.response?.data?.message);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
