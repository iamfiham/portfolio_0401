import Home from './layouts/Home';
import './App.css';
import NavBar from './components/NavBar';

function App() {
    return (
        <div className='wrapper '>
            <NavBar />
            <div className='h-20'></div>
            <Home />
        </div>
    );
}

export default App;
