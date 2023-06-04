import { useContext , useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import { login } from "../../http/userAPI";
import { HOME_ROUTE, LOGIN_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const Login = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const navigation = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    let data;
    data = await login(email, password)
    user.setUser(user)
    user.setIsAuth(true)
    navigation(HOME_ROUTE)
    console.log(data)
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );

});

export default Login;
