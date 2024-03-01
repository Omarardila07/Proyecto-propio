import React, { useState } from 'react';
import { firestore } from '../Firebase/config'; // Importa firestore desde tu archivo de configuración de Firebase

const Pages = () => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [comment, setComment] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Guarda los datos en Firestore
      await firestore.collection('Comentarios').add({
        name: name,
        grade: grade,
        comment: comment,
        timestamp: new Date() // Agrega un campo de marca de tiempo con la fecha actual
      });
  
      // Actualiza el estado con los datos enviados
      setSubmittedData({ name, grade, comment });
    } catch (error) {
      alert('Error al enviar el formulario:', error);
      // Agrega un mensaje de error o realiza alguna acción adicional en caso de error
    }
  };

  return (
    <>
      <div className="flex justify-center items-center self-center text-center w-[80%] mt-[10%] gap-3 bg-green-600 p-3 rounded-3xl">
        <div className="w-[45%] text-center font-sans">
          <div>
            <h1 className="text-white font-semibold text-[45px]">
              Hola, ¿por quién vas a votar en estas elecciones 2024 en el Cesar
              Pompeyo Mendoza Hinojoza?
            </h1>
          </div>
          <br />
          <button
            className="p-3 text-[25px] bg-green-900 text-white font-semibold rounded-2xl hover:bg-white hover:text-green-600 transition duration-500 ease-in-out"
            onClick={openPopup}
          >
            Vota aquí
          </button>
        </div>
        <div className="w-[300px] h-[510px]">
          <img src={escudo} alt="" className="" />
        </div>
        <div>
          <label htmlFor="comment" className='text-white'>Comentario:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='text-white'>Enviar</button>
      </form>

      {submittedData && (
        <div>
          <h2 className='text-white'>Datos enviados:</h2>
          <p className='text-white'>Nombre: {submittedData.name}</p>
          <p className='text-white'>Grado: {submittedData.grade}</p>
          <p className='text-white'>Comentario: {submittedData.comment}</p>
        </div>
        
      )}
    </div>
  );
};

export default Pages;
