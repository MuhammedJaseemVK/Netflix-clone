import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { useState } from "react";
import axios from 'axios';

function App() {
  const [state,setState]=useState([]);
  return (
    <div className="App">
      {/* <NavBar />
      <Banner />
      <RowPost /> */}


      {/* API response has our necessary data in response.data */}
      <button onClick={()=>
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{console.log(response.data);
          setState(response.data);
        })
    }>Click me</button>

    {/* index is second parameter  and is not required */}
    {/* map has a return;return can have ony one div */}
    {state.map((obj,index)=>{
      return (
        <div>
          <h1>{index+1}</h1>
          <h2>{obj.title}</h2>
          <p>{obj.body}</p>
        </div>
      )
    })}
    </div>
  );
}

export default App;
