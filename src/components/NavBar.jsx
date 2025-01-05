function NavBar() {
    return (
        <ul className='flex gap-6 justify-between items-center'>
            <li className='text-xl font-semibold font-playwrite'>iamfiham</li>
            <ul className='rounded-full border border-solid relative border-white/20 flex items-center p-1 gap-1 overflow-hidden bg-neutral-200/10'>
                <li className='text-sm font-medium cursor-pointer bg-neutral-500/20 p-2 px-4 rounded-full text-neutral-200'>
                    Home
                </li>
                <li className='text-neutral-400 text-sm font-medium cursor-pointer  p-2 px-4 rounded-full'>About</li>
                <li className='text-sm font-medium cursor-pointer  p-2 px-4  rounded-full text-neutral-400'>Stacks</li>
            </ul>
        </ul>
    );
}

export default NavBar;
