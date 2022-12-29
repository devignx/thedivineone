import wallet from '../assets/icons/wallet.svg'
import jesus from '../assets/jesus.png'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Wallet = () => {

    return(
        <div>
            <img className='fixed top-10 left-10 w-[6rem]' alt='' src={logo} />
            <img className='fixed mix-blend-multiply pc w-1/3 -z-2 left-[10%] top-[2rem]' alt='' src={jesus} />
            <div className='w-full h-screen items-center gap-12 z-1 flex flex-col justify-center items-center -mt-10 '>
                <p className='text-white text-lg text-center'>Try <span className='text-yellow-500 font-medium'>The Divine One for free</span> <br></br>without connecting wallet (limited trials)</p>
                <div className='flex gap-7 flex-col'>
                    <button className='flex justify-center gap-2 text-center px-4 py-2 font-medium items-center rounded bg-white'>Connect Wallet <img className='w-[1.2rem]' src={wallet} alt='' /></button>
                    <Link to= '/'><button className='flex justify-center gap-2 text-center px-4 py-2 items-center bg-white/10 backdrop-blur-lg text-white rounded border-solid border-[1px] border-white/30'>Continue without Wallet</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Wallet;