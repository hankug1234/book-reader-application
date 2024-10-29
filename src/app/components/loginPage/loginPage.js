import './css/LoginPage.css';
import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from 'react-router-dom';
import MusicNoteCircle from '../../utils/components/musicNoteCircle/musicNoteCircle';

const LoginPage = () => {

  const {register,handleSubmit} = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div className="LoginPage">
      <header className="Login-header">
        <MusicNoteCircle/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='Enter ID' className="InputField" {...register("id")}/>
          <br/>
          <br/>
          <input placeholder='Enter PW' className="InputField"  type='password' {...register("password")}/>
        </form>
        <br/>
        <div>
          <Link className="link" to="">sign up</Link>
          <Link className="link sign-in" to="/models/tts">sign in</Link>
        </div>
      </header>
    </div>
  );
}

export default LoginPage;