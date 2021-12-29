import Map from './components/Map.js';
//import { Chart, PieController } from 'chart.js'
import {PieChart, Pie, Cell, Tooltip} from "recharts";

function App() {

  let renderLabel = function(entry){
    return entry.name;
  }

  const data = [
    {name: 'theft', value: 9 },
    {name: 'antisocial behaviour', value: 9 },
    {name: 'public order', value: 9 },
    {name: 'violence', value: 58 }

  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

 
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
