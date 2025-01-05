import HomeContent from '../components/HomeContent';
import pic from '../assets/pic2.jpg';

function Home() {
    return (
        <div className='grid grid-cols-[4fr_3fr] gap-12 items-start'>
            <HomeContent />
            <div className='relative bg-blue-400'>
                <span className='absolute inset-0  bg-gradient-to-r from-black to-65% to-transparent'></span>
                <span className='absolute inset-0  bg-gradient-to-t from-black to-25% to-transparent'></span>
                <img src={pic} alt='Home Content' />
            </div>
        </div>
    );
}

export default Home;
