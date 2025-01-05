function Tag() {
    return (
        <span className='p-2 relative pl-3 pr-4 border border-solid border-white/20 rounded-full flex  items-center gap-3 overflow-hidden  justify-self-start '>
            <div className='aspect-square h-1 relative'>
                <div className='aspect-square h-2 z-20 rounded-full bg-neutral-100 absolute animate-ping top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 origin-bottom-right'></div>
                <div className='aspect-square h-1 z-20 rounded-full bg-neutral-100 '></div>
            </div>
            <span className='font-semibold text-neutral-300 z-10 text-xs'>Available for works</span>
            <span className='absolute inset-0 bg-neutral-700/35 z-0'></span>
        </span>
    );
}

export default Tag;
