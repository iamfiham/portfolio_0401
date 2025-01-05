function Tag() {
    return (
        <span className='p-2 relative px-3 border border-solid border-white/20 rounded-full flex items-center gap-2'>
            <span className='aspect-square h-2 inline-block rounded-full bg-neutral-300'></span>
            <span className='font-semibold text-neutral-300 text-xs'>Available for works</span>
        </span>
    );
}

export default Tag;
