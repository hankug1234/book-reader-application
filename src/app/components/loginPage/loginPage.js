
import logo from './images/logo.svg';
import './css/LoginPage.css';
import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from 'react-router-dom';


const LoginPage = () => {

  const {register,handleSubmit} = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div className="LoginPage">
      <header className="Login-header">
        <img src={logo} className="Login-logo" alt="logo" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='Enter ID' class="InputField" {...register("id")}/>
          <br/>
          <br/>
          <input placeholder='Enter PW' class="InputField"  type='password' {...register("password")}/>
        </form>
        <br/>
        <div>
          <Link className="link" to="">sign up</Link>
          <Link className="link sign-in" to="/train">sign in</Link>
        </div>
      </header>
    </div>
  );
}

export default LoginPage;