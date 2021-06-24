import React from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import FilesUpload from "./components/FilesUpload";

// voor uitleg: https://bezkoder.com/react-hooks-multiple-file-upload/
//https://bezkoder.com/react-image-upload-preview/




function App() {
    return (
        <div className="container" style={{width: "600px"}}>
            <div className="my-3">
                <h3>bezkoder.com</h3>
                <h4>React Hooks Multiple Files Upload</h4>

            </div>


            <FilesUpload/>


        </div>


                );
                }

                export default App;