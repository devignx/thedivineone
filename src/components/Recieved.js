import copy from '../assets/icons/copy.svg'
import share from '../assets/icons/share.svg'

const Recieved = () => {

    return(
        <div className="relative ml-3 md:ml-5 text-sm md:text-[1rem] leading-normal mt-5  rounded-[2rem] rounded-bl-none bg-yellow-500 text-black font-medium w-fit p-5 max-w-[75%] right-0">
            <p>Recieved</p>
            {/* this 👇div can be applied conditionally*/}
            <div className='flex flex-row gap-2 mt-4'>   
                <button className='px-3 py-2 text-xs flex flex-row gap-1 bg-white text-black rounded-full'>Copy <img className='w-[1rem]' src={copy} alt='' /></button>
                <button className='px-3 py-2 text-xs flex flex-row gap-1 bg-white text-black rounded-full'>Share <img className='w-[1rem]'  src={share} alt='' /></button>
            </div>
        </div>
    )
}

export default Recieved;