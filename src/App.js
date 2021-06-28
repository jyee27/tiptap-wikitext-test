import './App.css';
import Tiptap from './Tiptap.jsx';

let App = () => {
  return (
    <div className="App">
      <Tiptap />
      <button className="submitButton" onClick ={handleSubmit}>
        {'Submit'}
      </button>
    </div>
  );
}

function handleSubmit() {
  console.log('button!');
}

export default App;
