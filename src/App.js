import React from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Test from "./components/Test"
import FilesUpload from "./components/FilesUpload";

function App() {
    return (
        <div className="container" style={{width: "600px"}}>
            <div className="my-3">
                <h3>bezkoder.com</h3>
                <h4>React Hooks Multiple Files Upload</h4>

            </div>


            <FilesUpload/>
            <Test/>

        </div>


                );
                }

                export default App;