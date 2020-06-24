import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

import PostPage from "./Components/PostComponents/PostPage";

export default function App() {
const [photoOfDay, setPhotoOfDay] = useState([]);

useEffect(() => {
  axios
    .get(`https://ghibliapi.herokuapp.com/films/`)
    .then(response => {
      console.log("Res from useEffect of NASA", response);
      setPhotoOfDay(response.data);
    })
    .catch(err => {
      console.log("Error occured in useEffect of NASA: ", err);
    });
}, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
     
      {photoOfDay.map(object => {
      <PostPage 
         image = {object.url}
         altImage = {object.explanation}
        />
      }
        )};
    </div>
  );

  }
