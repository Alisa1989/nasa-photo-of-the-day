import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import styled, {css} from "styled-components";

import PostPage from "./Components/PostComponents/PostPage";

 export const Container = styled.div`
   margin: 30em;`




export default function App() {
const [photoOfDay, setPhotoOfDay] = useState([]);

useEffect(() => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=SWuGozl5VDxtcdwQ2xIOHOE67eO39PiXOxqErmsV`)
    .then(response => {
      console.log("Res from useEffect of NASA", response);
      setPhotoOfDay(response.data);
    })
    .catch(err => {
      console.log("Error occured in useEffect of NASA: ", err);
    });
}, []);

  return (
    <Container>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
     
      {/* {photoOfDay.map(object => { */}
      <PostPage 
         image = {photoOfDay.url}
         title = {photoOfDay.title}
         text = {photoOfDay.explanation}
        />
      <Button color="primary" size= "lg" block href= "http://www.nasa.gov">TO NASA'S WEBSITE</Button>
    </Container>
  );

  }
