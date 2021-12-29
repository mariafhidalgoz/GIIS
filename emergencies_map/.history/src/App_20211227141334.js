import Map from './components/Map.js';
import {PieChart, Pie, Cell, Tooltip} from "recharts";

function App() {

  let renderLabel = function(entry){
    return entry.name;
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const data = [

    {name:"Theft", value:9},
    {name:"Antisocial Behaviour", value:10},
    {name:"Public order", value:23},
    {name:"Violence", value:58}
  ]

  
  return (
    <div className="App">
      <h1>Landing Page</h1>
      <div>
      <h3>Crime Type</h3>  
      <PieChart width={300} height={300}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={40}
          fill="#8884d8"
          label={renderLabel}
        />
        {
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
        }
        <Tooltip />  
      </PieChart>
      </div>
      <Map/>
    </div>
  );
}

export default App;
