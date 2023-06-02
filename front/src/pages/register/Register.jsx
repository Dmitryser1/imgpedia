import { Link } from "react-router-dom";
import "./register.scss";
import { registration } from "../../http/userAPI";
import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";



const Register = observer(() => {
  const {user} = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async () => {
   // let data;
    console.log('Матье')
    //data = await registration(email, password)
    //user.setUser(user)
    //user.setIsAuth(true)
  };
  
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={console.log(232133213132112312312312) /*handleRegister*/}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Register;
