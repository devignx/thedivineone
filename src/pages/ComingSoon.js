import jesus from '../assets/jesus.png'
import logo from '../assets/logo-dark.svg'
import copy from '../assets/icons/copy.svg'
import share from '../assets/icons/share.svg'
import cs from '../assets/csoon.svg'
import { Link } from 'react-router-dom'


const ComingSoon = () => {

    return(
        <div className="w-screen h-screen bg-white ">
            <div>
                <Link to = '/chat'><img className='absolute md:fixed top-10 left-10 w-[4rem] md:w-[6rem]' alt='' src={logo} /></Link>
                <img className='absolute pc md:fixed mix-blend-multiply w-1/4 left-[20%] top-[10rem]' alt='' src={jesus} />
                <img className='fixed bottom-[3rem] right-[10rem] w-[22rem]' alt='' src={cs} />
            </div>

            <div className="fixed left-[43%] top-2 ml-5 mt-5 mb-10 rounded-[2rem] rounded-bl rounded-br-[5rem] bg-yellow-500 text-black font-medium w-fit p-7 max-w-[20rem] right-0">
            <p>But I say to you, Love your enemies and pray for those who persecute you, so that you may be sons of your Father who is in heaven; for he makes his sun rise on the evil and on the good, and sends rain on the just and on the unjust.</p>
            <div className='flex flex-row gap-2 mt-4'>
                <button className='px-3 py-2 text-xs flex flex-row gap-1 bg-white text-black rounded-full'>Copy <img className='w-[1rem]' src={copy} alt='' /></button>
                <button className='px-3 py-2 text-xs flex flex-row gap-1 bg-white text-black rounded-full'>Share <img className='w-[1rem]'  src={share} alt='' /></button>
            </div>
        </div>
        </div>
    )
}

export default ComingSoon;