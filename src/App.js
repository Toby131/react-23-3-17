import './App.css';
import MyCounter from './Counter';

function App() {
  return (
    <div>
      <MyCounter title="🐽대보보 카운터🐽" initValue={10}></MyCounter>
    </div>
  );
}

export default App;