import Map from './components/Map.js';
import './index.css'
//import { Chart, PieController } from 'chart.js'
import {ResponsiveContainer, PieChart, Pie, Cell, Tooltip} from "recharts";
import { Helmet } from 'react-helmet';


function App() {

  let renderLabel = function(entry){
    return entry.name;
  }

  const data = [
    {name: 'theft', value: 9, fill:'yellow' },
    {name: 'antisocial behaviour', value: 9 , fill:'blue'},
    {name: 'public order', value: 9, fill:'green'},
    {name: 'violence', value: 58, fill:'orange' }

  ]

  const COLORS = ['#3066BE', '#20A39E', '#61D895', '#FFBA49', '#A4036F'];

 
  return (
    <div className="App" background-color= 'black'>
      <Helmet>
        <style>{'body { background-color: black; }'}</style>
      </Helmet>
      <h3>Crime types</h3>
      <ResponsiveContainer width="20%" height={400}>
      <PieChart width={300} height={300}>
        <Pie
          dataKey="value"
          data={data}
          cx={100}
          cy={100}
          innerRadius={10}
          outerRadius={50}
          unit='%'
          //fill="#8884d8"
          label={renderLabel}
        />
        {
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        <Tooltip />  
      </PieChart>
      </ResponsiveContainer>
      <h3>Crime types</h3>
      <ResponsiveContainer width="20%" height={400}>
      <PieChart width={300} height={300}>
        <Pie
          dataKey="value"
          data={data}
          cx={100}
          cy={100}
          innerRadius={10}
          outerRadius={50}
          unit='%'
          //fill="#8884d8"
          label={renderLabel}
        />
        {
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        <Tooltip />  
      </PieChart>
      </ResponsiveContainer>    
      <Map/>
    </div>
  );
}

export default App;
