function Button({content = 'None'}) {
    return (
        <button className='group p-1 backdrop-blur-md bg-neutral-800/50  text-neutral-100  leading-none font-medium relative text-sm'>
            <span className='absolute h-[1px]  w-[40%] block -top-[1px] left-1/2 -translate-x-1/2 bg-gradient-to-l from-transparent via-neutral-100 to-transparent  opacity-0 group-hover:opacity-100 transition-all'></span>
            <span className='absolute h-[3px]  w-[50%] block -top-[1px] left-1/2 -translate-x-1/2 bg-neutral-200 blur-md opacity-0 group-hover:opacity-100 transition-all'></span>
            <span className='bg-neutral-800/20 bg-gradient-to-b from-transparent group-hover:from-blue-500/10 to-transparent backdrop-blur-md  block'>
                {content}
            </span>
        </button>
    );
}

export default Button;
