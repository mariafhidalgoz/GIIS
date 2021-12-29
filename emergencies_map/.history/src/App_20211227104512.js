import Map from './components/Map.js';
import {PieChart, Pie} from "recharts";

function App() {

  const data = [

    {name:"Theft", value:9},
    {name:"Antisocial Behaviour", value:10},
    {name:"Public order", value:23},
    {name:"Violence", value:58}
  ]

  
  return (
    <div className="App">
      <h1>Crime Types</h1>
      
      <Map/>
    </div>
  );
}

export default App;
