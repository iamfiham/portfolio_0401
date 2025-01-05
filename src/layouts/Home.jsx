import HomeContent from '../components/HomeContent';

function Home() {
    return (
        <div className='grid grid-cols-[4fr_3fr] gap-12 items-start'>
            <HomeContent />
            <div></div>
        </div>
    );
}

export default Home;
