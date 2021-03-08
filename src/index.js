//project 3- Netflix Component By Sushree Sonali Panda

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
ReactDOM.render(
<>
    <h1>Top 3 Netflix Original Series</h1>
    <App 
     sname = 'DARK'
   imgsrc="https://i.pinimg.com/originals/67/5e/bc/675ebc2fd210a8bd5362928a51514960.jpg"
    title="A Netflix Original."
     link="https://www.netflix.com/in/title/80100172"
     />
     
    <App 
    sname = 'Money Heist'
    imgsrc="https://m.media-amazon.com/images/M/MV5BMGUyOTFkMzUtOTQ5ZC00YjMzLWIyMGMtOWU2M2VkMDMxZTRjXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg"
     title="A Netflix Original."
     link="https://www.netflix.com/in/title/80192098"
     />
    <App 
    sname = 'Stranger Things'
    imgsrc="https://wallpapercave.com/wp/wp1839617.jpg"
     title="A Netflix Original."
     link="https://www.netflix.com/in/title/80057281"
     />
</>,
  document.getElementById("root")
  );