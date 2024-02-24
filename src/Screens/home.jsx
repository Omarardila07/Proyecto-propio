import { useState } from 'react';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    if (inputValue.trim() !== '') {
      const whatsappLink = `https://api.whatsapp.com/send?phone=573207169889&text=${encodeURIComponent(inputValue)}`;
      window.open(whatsappLink, '_blank');

      console.log('Mensaje enviado:', inputValue);
      setInputValue('');
    }
  };


  return (
    <>
      <div className="flex flex-col text-white w-[76%] text-center self-center mt-[8%]">
        <div className="">
          <h1 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            <span className="text-green-600"> Obtén la calificación de tus sueños en informática{' '}
           </span> con C-Core
          </h1>
        </div>
        <div className="w-[90%] md:w-[65%] text-center self-center mt-5">
          <p className="font-bold text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            Escribe en la etiqueta tu nombre, grado y cómo puedo ayudarte. Al presionar el botón, irás a mi WhatsApp personal. ¡Contacta para asistencia informática u otras consultas! Estoy disponible de inmediato.
          </p>
        </div>
        <div className=" flex-none gap-2 input-button text-center  self-center ml-5 md:ml-10 mt-5">
          <input
            type="text"
            placeholder="¡Escribe aquí!"
            className="enviar text-white font-semibold p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 "
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="botonwha font-semibold text-white p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 mt-3"
            onClick={handleClick}
          >
            Enviar a WhatsApp
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
