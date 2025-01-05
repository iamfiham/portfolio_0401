import Home from './layouts/Home';
import './App.css';
import NavBar from './components/NavBar';
import Stacks from './layouts/Stacks';
import image3 from './assets/image3.jpg';
import About from './layouts/About';

function App() {
    return (
        <section>
            <div className='wrapper relative'>
                <NavBar />
                <div className='h-40' />
                <Home />
                <div className='h-60' />
                <About />
                <div className='h-60' />
                <Stacks />
            </div>
            <div className='absolute top-8 -z-10 blur-sm'>
                <span className='absolute inset-0  bg-gradient-to-t from-black via-20% via-transparent to-90% to-black'></span>
                <span className='absolute inset-0 bg-black/30'></span>
                <img src={image3} alt='Home Content' />
            </div>
            <div className='h-60' />
        </section>
    );
}

export default App;
