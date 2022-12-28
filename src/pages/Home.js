import jesus from '../assets/jesus.png'
import logo from '../assets/logo.svg'
import dollar from '../assets/icons/dollar.svg'
import star from '../assets/icons/star.svg'
import clear from '../assets/icons/clear.svg'
import bible from '../assets/icons/book.svg'
import wallet from '../assets/icons/wallet.svg'
import { Link } from 'react-router-dom'

import Recieved from '../components/Recieved'
import Sent from '../components/Sent'

const Home = () => {

    return(
        <div>
            <img className='absolute md:fixed top-10 left-10 w-[4rem] md:w-[6rem]' alt='' src={logo} />
            <img className='absolute pc md:fixed mix-blend-multiply w-1/3 left-[10%] top-[2rem]' alt='' src={jesus} />
            <Link to='/wallet' className='text-sm flex flex-row gap-2 w-fit px-5 py-3 fixed right-6 top-6 z-[999] font-medium rounded-full bg-white text-black'><button>Connect Wallet </button><img className='w-[1rem]'  src={wallet} alt='' /></Link>
            
            <section className="overflow-scroll-y absolute right-0 h-full w-[95%] md:w-[37%]">
                <div className='absolute'>
                    <Recieved/>
                    <Sent/>
                    <Recieved/>
                    <Sent/>
                    <Recieved/>
                    <Sent/>
                    <Recieved/>
                    <br></br>
                    <br></br>
                </div>
                <input className='fixed w-[37%] rounded-full bottom-0 p-5 border-none' type="text" placeholder='Ask here'></input>
            </section>

            <footer className='absolute pc md:fixed flex justify-between p-10 bottom-0 mt-auto mb-0 w-[63%]'>
                <div className='flex gap-5'>
                    <button className='flex gap-2 px-4 py-2 font-medium items-center rounded bg-yellow-500'>Sponsor <img className='w-[1.2rem]' src={dollar} alt='' /></button>
                    <button className='flex gap-2 px-4 py-2 items-center bg-white/10 text-white rounded border-solid border-[1px] border-white/30'>Bible <img className='w-[1.2rem]' src={bible} alt='' /></button>
                    <button className='flex gap-2 px-4 py-2 items-center bg-white/10 text-white rounded border-solid border-[1px] border-white/30'>Feedback & Ratings <img className='w-[1.2rem]' src={star} alt='' /></button>
                </div>
                <button className='flex gap-2 px-4 py-2 items-center bg-white/10 text-white rounded border-solid border-[1px] border-white/30'>Clear Chat <img className='w-[1.2rem]' src={clear}alt='' /></button>
            </footer>
        </div>
    )
}

export default Home;