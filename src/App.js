import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <Header/>
    <div className='container-flex'>
     <Form/>
     <Display/>
     </div>
    </div>
  );
}

export default App;
