import React from 'react';
import Carousel from './component/Carousel';
import './App.css'
function App() {
  const images = [
    'https://maqsoftware.com/images/logos/MAQ-Software-Logo.svg',
    'https://learn.microsoft.com/en-us/azure/app-service/media/scenario-secure-app-overview/web-app.svg',
    'https://www.india.com/wp-content/uploads/2021/08/microsoft-image.jpg',
    'https://thinkadnet.com/wp-content/uploads/2020/07/Azure-White.png',
  ];



  return (


    <>
    <div className="App">


      <div className="taskContainer">
      <h1>Task 1</h1> 
      <h1>Task 2</h1>
      <h1>Task 3</h1>
      </div>

      <div className="carouselContainer">

      <Carousel images={images} />
    </div>

    <div className="infoContainer">
        <div className="box">
            <h2>EMP_Name: Sourav Sharma</h2>
        </div>
        <div className="box">
          <h2>EMP_ID: 1177</h2>
        </div>


    </div>
      </div>
    </>
  );
}

export default App;
