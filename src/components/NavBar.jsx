import Button from './Button';

function NavBar() {
    return (
        <ul className='flex gap-6 justify-center '>
            <li className='mr-auto text-xl font-semibold font-playwrite'>iamfiham</li>
            <li className='text-sm font-medium'>Home</li>
            <li className='text-sm font-medium'>About</li>
            <li className='text-sm font-medium'>Stacks</li>
        </ul>
    );
}

export default NavBar;
