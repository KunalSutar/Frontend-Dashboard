import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from './components/Accordion';
import Emp from './components/Emp';
import Search from './components/Search';

function App(){
  return (
    <div>
      <h3>Total Active Employees</h3>
      <Emp/>
    </div>
  );
}

export default App;
