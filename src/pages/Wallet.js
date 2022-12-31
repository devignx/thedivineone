import wallet from '../assets/icons/wallet.svg'
import jesus from '../assets/jesus.png'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Wallet = () => {

    return(
        <div>
            <Link to = '/'><img className='absolute md:fixed top-10 left-10 w-[4rem] md:w-[6rem]' alt='' src={logo} /></Link>
            <img className='fixed z-[1]  md:fixed mix-blend-multiply w-1/2 md:w-1/4 left-0 md:left-[10%] md:top-[10rem] bottom-0' alt='' src={jesus} />
            
            <div className='w-full h-screen items-center gap-12 z-1 flex flex-col justify-center items-center -mt-10 '>
                <p className='text-white text-lg text-center'>Try <span className='text-yellow-500 font-medium'>The Divine One</span> for free <br></br>without connecting wallet <span className='opacity-50'>(limited trials)</span></p>
                <div className='flex gap-7 z-[10]  flex-col'>
                    <Link to= '/' className='flex justify-center gap-2 text-center px-4 py-2 font-medium items-center rounded bg-white'>Connect Wallet <img className='w-[1.2rem]' src={wallet} alt='' /></Link>
                    <Link to= '/' className='flex justify-center gap-2 text-center px-4 py-2 items-center bg-white/10 backdrop-blur-xl text-white rounded border-solid border-[1px] border-white/30'>Continue without Wallet</Link>
                </div>
            </div>
        </div>
    )
}

export default Wallet;