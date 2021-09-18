import './App.css';
import Calculator from './components/Calculator/Calculator';
import Title from './components/Title/Title';

function App() {
  return (
    <div className="App">
      <Title title = "Ma super calculatrice à moi" />
      <Calculator/>
    </div>
  );
}

export default App;
