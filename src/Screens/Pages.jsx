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
    <div>
      <h2 className='text-white'>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className='text-white'>Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="grade" className='text-white'>Grado:</label>
          <input
            type="text"
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
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
