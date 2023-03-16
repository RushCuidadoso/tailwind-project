import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailClass, setEmailClass] = useState('border-gray-200 focus:outline-purple-secondary focus:outline-0 hover:border-purple-secondary')
  const [emailValid, setEmailValid] = useState(true)

  const emailValidation = (e) => {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    var emailValue = e.target.value;
    setEmail(emailValue);
    if(email.match(pattern)){
      setEmailValid(true)
      setEmailClass('border-gray-200 focus:outline-purple-secondary focus:outline-0 hover:border-purple-secondary')
    } else {
      setEmailValid(false)
      setEmailClass('border-red-primary focus:outline-red-primary focus:outline-0 hover:border-red-primary')
    }
  }

  function handleShowPassword() {
    setShowPassword((showPassword) => !showPassword);
  }

  let toggleClassNormal = showPassword ? "hidden" : "block";
  let toggleClassSlash = showPassword ? "block" : "hidden";
  let toggleInputType = showPassword ? "text" : "password";

  let toggleMessage = emailValid ? 'hidden' : 'block'


  return (
    <div className="bg-black w-screen h-screen">
      <div className="login-screen bg-gray-50 w-full sm:w-2/3 lg:w-1/2 h-full flex justify-center items-center">
        <div className="login-content flex flex-col justify-center items-start w-3/4 gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl text-gray-800">Acesse a plataforma</h1>
            <p className="font-normal text-base text-gray-600">Faça login ou registre-se para começar a construir seus projetos ainda hoje</p>
          </div>
          <form className="login-form flex flex-col w-full ">
            <div className="flex flex-col mb-4">
              <label className="font-semibold m-2" htmlFor="email">
                E-mail
              </label>
              <input
                onChange={e => emailValidation(e)}
                className={`p-4 rounded border ${emailClass} transition-all duration-300 ease-in-out`}
                required
                type="email"
                name="email"
                id="email"
                placeholder="Digite sua credencial"
              />
              <span className={`mt-1 text-red-primary text-sm ${toggleMessage}`}>Digite um e-mail válido</span>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between">
                <label className="font-semibold m-2" htmlFor="password">
                  Senha
                </label>
                <a className="text-purple-primary font-semibold m-2 hover:underline" href="#">
                  Esqueceu a senha?
                </a>
              </div>
              <div className="flex relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 rounded border border-gray-200 focus:outline-purple-secondary focus:outline-0 hover:border-purple-secondary transition-all duration-300 ease-in-out"
                  required
                  type={toggleInputType}
                  name="password"
                  id="password"
                  placeholder="Digite sua credencial"
                />
                <FaEye
                  onClick={handleShowPassword}
                  size={25}
                  className={`absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/2 text-gray-400 cursor-pointer ${toggleClassNormal}`}
                  id="show-password"
                />
                <FaEyeSlash
                  onClick={handleShowPassword}
                  size={25}
                  className={`absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/2 text-gray-400 cursor-pointer ${toggleClassSlash}`}
                  id="show-password"
                />
              </div>
            </div>
            <button className="bg-purple-primary select-none text-white py-4 px-6 w-full my-8 rounded font-bold hover:bg-purple-secondary transition-all duration-300 ease-in-out">
              Entrar
            </button>

            <span className="text-gray-600">
              Ainda não tem uma conta?{" "}
              <a href="#" className="text-purple-primary font-bold hover:underline">
                Inscreva-se
              </a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
