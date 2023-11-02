import { BsFillBusFrontFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { MdLocalOffer, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { SlBadge } from 'react-icons/sl'

const MainComponent = () => {
  return (
    <>
      <main className="max-w-7xl m-auto">
        <div className=" text-center flex justify-center min-h-screen  bg-no-repeat bg-center relative bg-cover lg:bg-cover h-20 " style={{ backgroundImage: "url('/gris.png')" }}>
          <h2 className="absolute top-24 left-0 text-white font-bold text-md animate-fadeInFromTop text-left  px-3">Alize Viajes y Turismo</h2>
          <p className="absolute top-32 left-0 font-bold text-white text-3xl flex text-left animate-fadeInFromTop  md:text-4xl px-3 lg:text-4xl">Viaja con nosotros al <br /> destino que vos elijas</p>
          <p className="absolute top-72 left-0 lg:left-auto md:left-auto right-0 font-bold text-white text-2xl flex text-left animate-fadeInFromTop md:top-auto md:bottom-40  md:text-md lg:text-4xl px-3 ">
            Nos dedicamos al turismo Provincial <br />  y Nacional hace mas de 8 años.
          </p>
        </div>
      </main>

      <section className="bg-gray-100 py-10">
        <div className="lg:max-w-7xl lg:m-auto  lg:py-20 px-5 lg:flex lg:gap-10">
          <div className="w-full">
            <p className="font-extrabold animate-fadeInFromTop focus:animate-fadeInFromTop lg:text-4xl text-gray-900 w-full mb-8 lg:mb-16 mt-8" tabIndex="0">Tu viaje a aventuras auténticas y memorables.</p>
            <p className="animate-fadeIn-focus font-bold text-gray-900 lg:text-xl animate-fadeInFromTop focus:animate-fadeInFromTop mb-8 lg:mb-48" tabIndex="0">
              Somos una empresa familiar. Nos dedicamos a explorar el mundo y brindarte experiencias de viaje genuinas. Con un enfoque en la seguridad y la calidad, seleccionamos destinos cuidadosamente para ofrecerte momentos inolvidables. Únete a nosotros y descubre nuevos horizontes sin preocupaciones. Viaja con confianza, viaja con Alize.
            </p>
            <button className="border border-red-400 text-red-400 px-6 py-2 rounded-md font-bold hover:bg-red-400 hover:text-white transition duration-500 ease-in-out mb-16">Mas Info</button>
          </div>
          <div className="w-full">
            <img className="h-80 w-full md:w-full md:h-full object-cover object-center" src="/alize-federacion.png" alt="" />
          </div>
        </div>
      </section>

      <section className="relative">
        <img className="lg:hidden w-full h-full absolute top-0 left-0 z-0 object-cover object-center" src="/alize-route.jpg" alt="" />
        <div className="max-w-7xl m-auto  relative z-1 p-5">
          <BsFillBusFrontFill className='text-white animate-fadeInFromTop focus:animate-fadeInFromTop mb-3' />
          <h1 className="text-white font-bold mb-4 lg:text-4xl animate-fadeInFromTop focus:animate-fadeInFromTop">Viajes sin limites,<br /> viajes unicos.</h1>
          <p className="text-white font-bold mb-10 lg:text-xl animate-fadeInFromTop focus:animate-fadeInFromTop">
            En Alize, te llevamos de vacaciones al lugar que desees, y si!!, no te preocupes, tambien planeamos tus viajes de fin  de semanas largos, para que puedas darte esa escapada que mereces.
          </p>
          <button className="bg-red-400 text-white px-6 py-2 rounded-md font-bold transition duration-500 ease-in-out hover:border hover:border-white hover:text-white hover:bg-transparent hover:transition hover:duration-500 hover:ease-in-out mb-16 animate-fadeInFromTop focus:animate-fadeInFromTop">Viajes</button>
        </div>
      </section>

      <section className="bg-gray-100 w-full py-16">
        <div className="lg:max-w-7xl lg:m-auto   p-10 w-full">
          <div className="w-full">
            <h2 className="text-red-400 lg:text-2xl flex justify-center font-bold w-full mb-5">
              #MELAPASOVIAJANDO
            </h2>
            <div className="lg:flex justify-center mb-5 gap-3 w-full">
              <img className='h-full lg:h-72 w-full mb-10' src="/cataratas-3.webp" alt="" />
              <img className="h-full lg:h-72 w-full mb-10 flex justify-center" src="/alize-bus.jpg" alt="" />
              <img className='h-full lg:h-72 w-full mb-10' src="/termas-2.webp" alt="" />
            </div>
            <p className='justify-center text-center flex font-bold text-red-400 w-full mb-5'>
              CONOCÉ NUESTRAS PROXIMAS SALIDAS
            </p>
            <div className='border bg-red-100 p-5 lg:flex lg:text-center lg:items-center lg:gap-5 mb-12'>
              <p className='text-sm text-center justify-center flex mb-5 font-bold w-full'>
                Dejanos tu correo para saber de nuestros proximos destinos
              </p>
              <form className='w-full justify-center flex' action="">
                <input className='w-full mb-5 outline-none p-2 rounded-md md:max-w-sm' type="text" placeholder='Email' />
              </form>
              <div className='justify-center flex w-full mb-5'>
                <button className='w-full border border-red-400 text-red-400 px-2 py-1 rounded-md font-bold hover:bg-red-400 hover:text-white transition duration-500 ease-in-out '>Enviar</button>
              </div>
            </div>

            <div>
              <p className='font-bold text-red-400 justify-center flex mb-5'>
                TESTIMONIOS
              </p>
              <p className='font-bold text-red-400 justify-center flex text-2xl mb-5 text-center'>
                ¡Clientes Felices!
              </p>
              <div className='flex justify-center'>
                <AiFillStar className='text-red-400' />
                <AiFillStar className='text-red-400' />
                <AiFillStar className='text-red-400' />
                <AiFillStar className='text-red-400' />
                <AiFillStar className='text-red-400' />
              </div>
              <div className='bg-white rounded-xl lg:px-10 px-5 py-3 relative shadow-2xl mt-20 lg:mt-20 lg:pb-20 lg:pt-20 hidden md:block mb-20'>
                <div className='bg-red-700 rounded-full w-4 absolute top-12 left-2 md:top-20 lg:top-32 md:left-4 lg:left-10 cursor-pointer'>
                  <MdOutlineKeyboardArrowLeft className='text-white' />
                </div>
                <div className='bg-red-700 rounded-full w-4  absolute top-12 right-2 md:top-20 lg:top-32 lg:right-10 cursor-pointer'>
                  <MdOutlineKeyboardArrowRight className='text-white' />
                </div>
                <div className='md:pb-5'>
                  <p className='font-semibold text-red-400 justify-center md:flex text-xs hidden md:text-lg'>Clientes Felices, Viajes Felices</p>
                </div>
                <div className='flex w-full md:gap-5 items-center justify-center'>
                  <img className='md:h-14' src="/testimonios.png" alt="" />
                  <img className='hidden md:h-14 lg:block ' src="testimonios-2.png" alt="" />
                  <img className='hidden md:h-14 ' src="testimonios-3.png" alt="" />
                  <img className='hidden md:h-14 ' src="testimonios-4.png" alt="" />
                  <img className='hidden md:h-14 ' src="testimonios-5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='border-red-400 border p-5'>
            <MdLocalOffer className='text-red-400 flex justify-center items-center w-full text-4xl mb-5' />
            <h2 className='text-red-400 flex justify-center items-center w-full font-bold mb-5'>OFERTAS</h2>
            <p className='text-red-400 flex justify-center text-center w-full font-semibold'>Regístrate en nuestra página y recibe informacion sobre nuestros proximos movimientos.</p>
          </div>
          <div className='border-red-400 border p-5'>
            <BsFillBusFrontFill className='text-red-400 flex justify-center items-center w-full text-4xl mb-5' />
            <h2 className='text-red-400 flex justify-center items-center w-full font-bold mb-5'>LOGÍSTICA</h2>
            <p className='text-red-400 flex justify-center text-center w-full font-semibold'>Llevamos a nuestros pasajeros sin ningun tipo de problema a todo el país con nuestro motor que nos caracteriza, amor al viaje.</p>
          </div>
          <div className='border-red-400 border p-5'>
            <SlBadge className='text-red-400 flex justify-center items-center w-full text-4xl mb-5' />
            <h2 className='text-red-400 flex justify-center items-center w-full font-bold mb-5'>CALIDAD</h2>
            <p className='text-red-400 flex justify-center text-center w-full font-semibold'>Garantía de calidad. Viajes confiables y placenteros para tu satisfacción.</p>
      <button id="scrollToTopBtn" class="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2 hidden">
        ↑ hola
      </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainComponent