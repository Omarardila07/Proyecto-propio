import { useState, useEffect } from "react";
import img2 from "../Img/img.png";
import escudo from "../Img/escudo.png";
import img02 from "../Img/02.png";
import img01 from "../Img/01.png";
import img03 from "../Img/03.png";
import imgC01 from "../Img/C01.png";
import imgC02 from "../Img/C02.png";
import imgC03 from "../Img/C03.png";


const Pages = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [votes, setVotes] = useState(() => {
    const storedVotes = localStorage.getItem("votes");
    return storedVotes
      ? JSON.parse(storedVotes)
      : {
          "Candidato 01": 0,
          "Candidato 02": 0,
          "Candidato 03": 0,
          "voto en blanco": 0,
          "Candidato C04": 0,
          "Candidato C05": 0,
          "Candidato C06": 0,
          "Cvoto en blanco": 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const CerraPopUp = () => {
    setPopupOpen(false);
  }


  const handleVote = (candidateName) => {
    setSelectedCandidate(candidateName);
    setVotes((prevVotes) => ({
      ...prevVotes,
      [candidateName]: prevVotes[candidateName] + 1,
    }));
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
      </div>

      {popupOpen && (
      
        <div className="fixed inset-0 flex justify-center itemsm-center bg-black bg-opacity-50 ">
          <div className="bg-green-500 p-8 rounded-3xl">
            <h1 className="text-center text-xl font-semibold mb-4 text-white ">
              Elige a tu candidato de personeria 2024
            </h1>
            <div className="grid grid-cols-4 gap-4 ">
              <Card
                imageSrc={img01}
                name="Candidato 01"
                namee="Candidato"
                name1="01"
                isSelected={selectedCandidate === "Candidato 01"}
                onVote={handleVote}
                votes={votes["Candidato 01"]}
              />
              <Card
                imageSrc={img02}
                name="Candidato 02"
                namee="Candidato"
                name1="02"
                isSelected={selectedCandidate === "Candidato 02"}
                onVote={handleVote}
                votes={votes["Candidato 02"]}
              />
              <Card
                imageSrc={img03}
                name="Candidato 03"
                namee="Candidato"
                name1="03"
                isSelected={selectedCandidate === "Candidato 03"}
                onVote={handleVote}
                votes={votes["Candidato 03"]}
              />
              <Card
                imageSrc={img2}
                name="voto en blanco"
                namee="Voto en blanco"
                isSelected={selectedCandidate === "voto en blanco"}
                onVote={handleVote}
                votes={votes["voto en blanco"]}
              />
            </div>
            <h1 className="text-center text-xl font-semibold mb-4 text-white mt-4 ">
              Elige a tu candidato de Contraloria 2024
            </h1>
            <div className="grid grid-cols-4 gap-4 ">
              <Card
                imageSrc={imgC01}
                name="Candidato C04"
                namee="Candidato"
                name1="01"
                isSelected={selectedCandidate === "Candidato C04"}
                onVote={handleVote}
                votes={votes["Candidato C04"]}
              />
              <Card
                imageSrc={imgC02}
                name="Candidato C05"
                namee="Candidato"
                name1="02"
                isSelected={selectedCandidate === "Candidato C05"}
                onVote={handleVote}
                votes={votes["Candidato C05"]}
              />
              <Card
                imageSrc={imgC03}
                name="Candidato C06"
                namee="Candidato"
                name1="03"
                isSelected={selectedCandidate === "Candidato C06"}
                onVote={handleVote}
                votes={votes["Candidato C06"]}
              />
              <Card
                imageSrc={img2}
                name="Cvoto en blanco"
                namee="Voto en blanco"
                isSelected={selectedCandidate === "Cvoto en blanco"}
                onVote={handleVote}
                votes={votes["Cvoto en blanco"]}
              />
            </div>
            <div className="flex justify-center self-center items-center mt-8">
              <button className="p-3 text-[25px] bg-green-900 text-white font-semibold rounded-2xl hover:bg-white hover:text-green-600 transition duration-500 ease-in-out" onClick={CerraPopUp}> Finalizar fomulario </button>
            </div>
          </div>
        </div>
        
      )}

    </>
  );
};



const Card = ({ imageSrc, name, isSelected, onVote, name1, votes, namee }) => {
  return (
    <div
      className={`bg-gray-100 p-4  gap-3 rounded-3xl flex justify-center self-center text-center ${
        isSelected ? "opacity-50" : ""
      }`}
    >
      <div className="w-[200px]">
        <img src={imageSrc} alt={name} className=" rounded-3xl" />
      </div>
      <div className="self-center">
        <h2 className="font-semibold text-lg">{namee}</h2>
        <h2 className="font-semibold text-[70px]">{name1}</h2>
        <button
          className="mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded"
          onClick={() => onVote(name)}
        >
          Votar
        </button>
        <br />
        <br />
        <h1 className="text-lg font-semibold">Votos = {votes}</h1>
      </div>
    </div>
  );
};

export default Pages;
