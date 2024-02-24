
import logo from '../Img/favicon.png'

const Contact = () => {
    return (
    <>
        <div className="text-white">
            <h1 className="p-5 text-[50px] font-bold">Contactame </h1>
        </div>
        <div className='text-white p-5'>
            <div>
                <p className=' w-46 '>si tienes alguna duda o comentario, puedes agregar un comentario aqui abajo</p>
                <img  className='w-[20%] mt-[2%]' src={logo} alt="" />
            </div>
        </div>
    </>
    )
}

export default Contact;