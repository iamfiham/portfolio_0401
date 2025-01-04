import Home from './layouts/Home';
import './App.css';
import NavBar from './components/NavBar';

function App() {
    return (
        <div className='wrapper bg-blue-700'>
            <NavBar />
            <Home />
        </div>
    );
}

export default App;
