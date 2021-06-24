import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="container" style={{ width: "600px" }}>
        <div className="my-3">
          <h3>bezkoder.com</h3>
          <h4>React Hooks Multiple Files Upload</h4>
        </div>

        <FilesUpload />
      </div>
  );
}

export default App;
