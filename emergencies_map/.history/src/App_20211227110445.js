import Map from './components/Map.js';
import {PieChart, Pie, Tooltip} from "recharts";

function App() {

  let renderLabel = function(entry){
    return entry.name;
  }

  const data = [

    {name:"Theft", value:9},
    {name:"Antisocial Behaviour", value:10},
    {name:"Public order", value:23},
    {name:"Violence", value:58}
  ]

  
  return (
    <div className="App">
      <h1>Crime Types</h1>
      <PieChart width={300} height={300}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          //outerRadius={20}
          fill="#8884d8"
          label={renderLabel}
        />  
      </PieChart>
      <Map/>
    </div>
  );
}

export default App;
