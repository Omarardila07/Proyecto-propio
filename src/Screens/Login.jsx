import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthPopUp } from '../Firebase/loginGoo';
import { FacebookAuthPopUp } from '../Firebase/face';
import GoogleIcon from '../icons/google';
import FacebookIcon from '../icons/Face';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (authFunction, storageKey) => {
    try {
      const result = await authFunction();
      const token = await result.user.getIdToken(true);
      sessionStorage.setItem(storageKey, JSON.stringify(token));
      navigate('/');
    } catch (error) {
      console.error('Error de autenticación:', error.message);
    }
  };



  return (
    <div className="flex justify-center items-center overflow-hidden h-screen">
      <div className="text-white font-bold bg-green-600 w-full md:w-[35%] flex flex-col justify-center items-center p-8 rounded-lg">
        <h1 className="text-4xl mb-8 text-center">¿Cómo quieres iniciar sesión?</h1>

        <button onClick={() => handleLogin(GoogleAuthPopUp, 'token')} className='flex items-center justify-center bg-white text-green-600 py-3 px-6 rounded-3xl mb-4 cursor-pointer'>
          <GoogleIcon className="w-6 h-6 mr-2" /> Iniciar con Google
        </button>

        <button onClick={() => handleLogin(FacebookAuthPopUp, 'token1')} className='flex items-center justify-center bg-white text-green-600 py-3 px-6 rounded-3xl mb-4 cursor-pointer'>
          <FacebookIcon className="w-6 h-6 mr-2" /> Iniciar con Facebook
        </button>

        <div className='text-center font-bold'>
          ¿No tienes cuenta?{' '}
          <Link to="/crear" className='text-red-400'>
            Crear cuenta aquí
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
