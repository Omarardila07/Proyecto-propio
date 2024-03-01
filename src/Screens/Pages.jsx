import { useState, useEffect } from "react";
import escudo from "../Img/escudo.png";
import img01 from "../Img/01.png";
import img02 from "../Img/02.png";
import img03 from "../Img/03.png";
import imgC01 from "../Img/C01.png";
import imgC02 from "../Img/C02.png";
import imgC03 from "../Img/C03.png";
import img2 from "../Img/img.png";

const Card = ({ imageSrc, name, isSelected, onVote, onCancelVote, name1, votes, namee }) => {
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
        {isSelected ? (
          <button
            className="mt-4 bg-red-500 text-white font-semibold py-2 px-4 rounded"
            onClick={() => onCancelVote(name)}
          >
            Eliminar voto
          </button>
        ) : (
          <button
            className="mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded"
            onClick={() => onVote(name)}
          >
            Votar
          </button>
        )}
        <br />
        <br />
        <h1 className="text-lg font-semibold">Votos = {votes || 0}</h1>
      </div>
    </div>
  );
};

const Pages = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedPersoneria, setSelectedPersoneria] = useState(null);
  const [selectedContraloria, setSelectedContraloria] = useState(null);
  const [votes, setVotes] = useState(() => {
    const storedVotes = localStorage.getItem("votes");
    return storedVotes
      ? JSON.parse(storedVotes)
      : {
          "Candidato 01": 0,
          "Candidato 02": 0,
          "Candidato 03": 0,
          "voto en blanco personeria": 0,
          "Candidato C04": 0,
          "Candidato C05": 0,
          "Candidato C06": 0,
          "voto en blanco contraloria": 0,
        };
  });
  const [votedPersoneria, setVotedPersoneria] = useState(false);
  const [votedContraloria, setVotedContraloria] = useState(false);

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedPersoneria(null);
    setSelectedContraloria(null);
    setVotedPersoneria(false);
    setVotedContraloria(false);
  };

  const handlePersoneriaVote = (candidateName) => {
    if (!votedPersoneria && candidateName.startsWith("Candidato")) {
      setSelectedPersoneria(candidateName);
      setVotes((prevVotes) => ({
        ...prevVotes,
        [candidateName]: prevVotes[candidateName] + 1,
      }));
      setVotedPersoneria(true);
    } else if (
      candidateName === "voto en blanco personeria" &&
      !votedPersoneria
    ) {
      setSelectedPersoneria(candidateName);
      setVotes((prevVotes) => ({
        ...prevVotes,
        ["voto en blanco personeria"]: prevVotes["voto en blanco personeria"] + 1,
      }));
      setVotedPersoneria(true);
    } else if (selectedPersoneria === candidateName) {
      setSelectedPersoneria(null);
      setVotes((prevVotes) => ({
        ...prevVotes,
        [candidateName]: prevVotes[candidateName] - 1,
      }));
      setVotedPersoneria(false);
    }
  };

  const handleContraloriaVote = (candidateName) => {
    if (!votedContraloria && candidateName.startsWith("Candidato C")) {
      setSelectedContraloria(candidateName);
      setVotes((prevVotes) => ({
        ...prevVotes,
        [candidateName]: prevVotes[candidateName] + 1,
      }));
      setVotedContraloria(true);
    } else if (
      candidateName === "voto en blanco contraloria" &&
      !votedContraloria
    ) {
      setSelectedContraloria(candidateName);
      setVotes((prevVotes) => ({
        ...prevVotes,
        ["voto en blanco contraloria"]: prevVotes["voto en blanco contraloria"] + 1,
      }));
      setVotedContraloria(true);
    } else if (selectedContraloria === candidateName) {
      setSelectedContraloria(null);
      setVotes((prevVotes) => ({
        ...prevVotes,
        [candidateName]: prevVotes[candidateName] - 1,
      }));
      setVotedContraloria(false);
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
      </div>

      {popupOpen && (
        <div className="fixed inset-0 flex justify-center itemsm-center bg-black bg-opacity-50 ">
          <div className="bg-green-500 p-8 rounded-3xl">
            <h1 className="text-center text-[23px] font-semibold mb-4 text-white ">
              Elige a tu candidato de personería 2024
            </h1>
            <div className="grid grid-cols-4 gap-4 ">
              <Card
                imageSrc={img01}
                name="Candidato 01"
                namee="Candidato"
                name1="01"
                isSelected={selectedPersoneria === "Candidato 01"}
                onVote={handlePersoneriaVote}
                onCancelVote={handlePersoneriaVote}
                votes={votes["Candidato 01"]}
              />
              <Card
                imageSrc={img02}
                name="Candidato 02"
                namee="Candidato"
                name1="02"
                isSelected={selectedPersoneria === "Candidato 02"}
                onVote={handlePersoneriaVote}
                onCancelVote={handlePersoneriaVote}
                votes={votes["Candidato 02"]}
              />
              <Card
                imageSrc={img03}
                name="Candidato 03"
                namee="Candidato"
                name1="03"
                isSelected={selectedPersoneria === "Candidato 03"}
                onVote={handlePersoneriaVote}
                onCancelVote={handlePersoneriaVote}
                votes={votes["Candidato 03"]}
              />
              <Card
                imageSrc={img2}
                name="voto en blanco personeria"
                namee="Voto en blanco"
                isSelected={selectedPersoneria === "voto en blanco personeria"}
                onVote={handlePersoneriaVote}
                onCancelVote={handlePersoneriaVote}
                votes={votes["voto en blanco personeria"]}
              />
            </div>
            <h1 className="text-center text-[23px] font-semibold mb-4 text-white mt-4 ">
              Elige a tu candidato de Contraloría 2024
            </h1>
            <div className="grid grid-cols-4 gap-4 ">
              <Card
                imageSrc={imgC01}
                name="Candidato C04"
                namee="Contraloría"
                name1="01"
                isSelected={selectedContraloria === "Candidato C04"}
                onVote={handleContraloriaVote}
                onCancelVote={handleContraloriaVote}
                votes={votes["Candidato C04"]}
              />
              <Card
                imageSrc={imgC02}
                name="Candidato C05"
                namee="Contraloría"
                name1="02"
                isSelected={selectedContraloria === "Candidato C05"}
                onVote={handleContraloriaVote}
                onCancelVote={handleContraloriaVote}
                votes={votes["Candidato C05"]}
              />
              <Card
                imageSrc={imgC03}
                name="Candidato C06"
                namee="Contraloría"
                name1="03"
                isSelected={selectedContraloria === "Candidato C06"}
                onVote={handleContraloriaVote}
                onCancelVote={handleContraloriaVote}
                votes={votes["Candidato C06"]}
              />
              <Card
                imageSrc={img2}
                name="voto en blanco contraloria"
                namee="Voto en blanco"
                isSelected={selectedContraloria === "voto en blanco contraloria"}
                onVote={handleContraloriaVote}
                onCancelVote={handleContraloriaVote}
                votes={votes["voto en blanco contraloria"]}
              />
            </div>
            <div className="flex justify-center self-center items-center mt-8">
              <button className="p-3 text-[25px] bg-green-900 text-white font-semibold rounded-2xl hover:bg-white hover:text-green-600 transition duration-500 ease-in-out" onClick={closePopup}> Finalizar formulario </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pages;
