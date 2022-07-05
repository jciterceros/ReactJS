import "./App.css";

// const photoFile = document.getElementById("photo-file");
// document.getElementById("select-image").onclick = function () {
//     photoFile.click();
// };

// window.addEventListener("DOMContentLoaded", () => {
//     photoFile.addEventListener("change", () => {
//         let file = photoFile.files.item(0);
//         let reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = function (event) {
//             let image = document.getElementById("photo-preview");
//             image.src = event.target.result;
//         };
//     });
// });
import React, { useState } from "react";

export default function App() {
    const [image, setImage] = useState(
        document.getElementById("photo-preview").src
    );
    const [photoFile, setPhotoFile] = useState(
        document.getElementById("photo-file")
    );

    function handleClick() {
        photoFile.click();
        console.log(" estou aqui ");
        console.log(photoFile.files.item(0));
        //handleChange();
    }

    function handleChange(e) {
        let file = e.target.files.item(0);
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event) {
            setImage(event.target.result);
        };
    }
    return (
        <div className="App">
            <header>
                <h1> Image Crop</h1>
                <p>com HTML5 Canvas e JS</p>
            </header>
            <main>
                <button id="select-image" onClick={handleClick}>
                    <input type="file" id="photo-file" />
                    Selecionar Imagem testess
                </button>
                <img id="photo-preview" alt="" />
            </main>
            <footer></footer>
        </div>
    );
}
