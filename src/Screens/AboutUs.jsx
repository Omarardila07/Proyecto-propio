import img1 from '../Img/img1.jpeg'
import misi from '../Img/misi.png'
import visi from '../Img/visi.png'
import '../resolucion/lapto.css'
import '../resolucion/tablet.css'
import '../resolucion/movil.css'

const About = () => {
    return (
    <>
        <div className="pedrito flex self-center items-center g-8 text-white w-[90%] mt-10  ">
            <div>
                <h2 className=" text-[60px] font-bold text-green-600">Quien Soy ?</h2>
                <p>Soy Omar Ardila, estudiante y desarrollador web en Syntactic. Actualmente, estoy estudiando técnico en software en el Servicio Nacional de Aprendizaje (Sena) y estoy en el último año, cursando el grado 11 en la institución Cesar Pompeyo Mendoza Hinojoza. </p>
                <br />
                <p>C-Core es una plataforma educativa dedicada a facilitar el aprendizaje y el éxito académico en el campo de la informática. Nuestro enfoque se centra en proporcionar recursos educativos de calidad, tutorías personalizadas y un entorno virtual colaborativo. Nos esforzamos por ser una fuente integral que no solo ayuda en la comprensión teórica, sino también en el desarrollo de habilidades prácticas. Nuestra misión es apoyar a los estudiantes en su viaje educativo, preparándolos para el éxito en sus estudios y futuras carreras en el ámbito informático.</p>
            </div>
            <div>
                <img className=' w-[1800px] rounded-[10%]' src={img1} />
            </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[10%] justify-center text-white mt-10 mx-auto">
                <div className="bg-green-600 border-solid border-2 border-white p-10 lg:w-[40%] rounded-xl">
                    <div className="flex gap-[2%] text-center">
                        <img className="w-[18%]" src={misi} alt="Misión" />
                        <h4 className="text-[40px] font-bold mt-4">Mision</h4>
                    </div>
                    <div className="w-[95%] text-left mt-[1%]">
                        <p>
                            En C-Core, trabajamos incansablemente para ser el epicentro del conocimiento y apoyo, proporcionando herramientas innovadoras, tutorías personalizadas y un espacio colaborativo. Nuestra misión es ser el cimiento esencial que guía a los estudiantes hacia un éxito sólido en sus estudios de informática, fortaleciendo su confianza y preparándolos para un futuro destacado en el ámbito informático.
                        </p>
                    </div>
                </div>
                <div className="bg-green-600 border-solid border-2 border-white p-10 lg:w-[40%] rounded-xl">
                    <div className="flex gap-[5%] text-center">
                        <img className="w-[15%]" src={visi} alt="Visión" />
                        <h4 className="text-[40px] font-bold mt-2">Vision</h4>
                    </div>
                    <div className="w-[95%] text-left mt-[1%]">
                        <p>
                            Posicionarnos como la principal fuente de apoyo educativo, bajo el nombre de C-Core, donde estudiantes de informática encuentran inspiración, recursos avanzados y una comunidad activa. Aspiramos a ser reconocidos como un referente que cataliza el éxito académico, impulsando a los estudiantes hacia un rendimiento excepcional y el dominio de las habilidades informáticas.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;