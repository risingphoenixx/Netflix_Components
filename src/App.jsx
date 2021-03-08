import './App.css';
import React from 'react';
function App(props)
{
  return(
    <>
        <div className="card">
          <div className="cards"> 
            <div className="card_info"> 
            <h3 className="card_title">{props.sname}</h3>  
          <img src={props.imgsrc} alt="myPic" className="card_img" />
              <span className="card_category">{props.title}</span>
              <a href={props.link}>
              <button> Watch Now </button>
              </a>
            </div>
        </div>
    </div>
    </>
  );
}
export default App;
