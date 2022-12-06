import './App.css';
import Search from './components/Search';
import Links from './components/Links';


function App() {
  return (
    <div className="App">
      <div className='container d-flex d-flex flex-column justify-content-center vh-100 col-md-12 col-lg-2'>
        <Search />
        <Links />
      </div>
    </div>
  );
}

export default App;
