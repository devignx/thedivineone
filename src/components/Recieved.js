import copy from '../assets/icons/copy.svg'
import share from '../assets/icons/share.svg'

const Recieved = () => {

    return(
        <div className="relative ml-5 mt-5 mb-10 rounded-[2rem] rounded-bl-none bg-yellow-500 text-black font-medium w-fit p-5 max-w-[80%] right-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt. Pellentesque elit eget gravida cum sociis natoque. Tortor posuere ac ut consequat. Quam lacus suspendisse faucibus interdum posuere. Sit amet volutpat consequat mauris. Sed velit dignissim sodales ut eu sem integer vitae justo. Vitae semper quis lectus nulla at volutpat. Amet nisl suscipit adipiscing bibendum. Est placerat in egestas erat imperdiet sed euismod nisi porta.</p>
            {/* this 👇div can be applied conditionally*/}
            <div className='flex flex-row gap-2 mt-4'>   
                <button className='px-3 py-2 text-xs flex flex-row gap-1 bg-white text-black rounded-full'>Copy <img className='w-[1rem]' src={copy} alt='' /></button>
                <button className='px-3 py-2 text-xs flex flex-row gap-1 bg-white text-black rounded-full'>Share <img className='w-[1rem]'  src={share} alt='' /></button>
            </div>
        </div>
    )
}

export default Recieved;