import Map from './components/Map.js';
import './index.css'
//import { Chart, PieController } from 'chart.js'
import {ResponsiveContainer, PieChart, Pie, BarChart, Bar, Cell, Tooltip, XAxis, YAxis, CartesianGrid, Legend} from "recharts";
import { Helmet } from 'react-helmet';


function App() {

  let renderLabel = function(entry){
    return entry.name;
  }

  const data1 = [
    {name: 'theft', value: 9, fill:'yellow' },
    {name: 'antisocial behaviour', value: 9 , fill:'blue'},
    {name: 'public order', value: 9, fill:'green'},
    {name: 'violence', value: 58, fill:'orange' }

  ]

  const data2 = [
    {name: 'Cambridgeshire Constabulary', value: 4.5 },
    {name: 'Transport Police', value: 3.5 },
    {name: 'Cambridgeshire Police', value: 2.5},
    {name: 'Aversby and Somerset Constabulary', value: 4 }
  ]

  const COLORS = ['#3066BE', '#20A39E', '#61D895', '#FFBA49', '#A4036F'];

 
  return (
    <div className="App" background-color= 'black'>
      <Helmet>
        <style>{'body { background-color: black; }'}</style>
      </Helmet>
      <div>
      <h3>Crime types</h3>
      <ResponsiveContainer width="20%" height={400}>
      <PieChart width={300} height={300}>
        <Pie
          dataKey="value"
          data={data1}
          cx={100}
          cy={100}
          innerRadius={10}
          outerRadius={50}
          unit='%'
          //fill="#8884d8"
          label={renderLabel}
        />
        {
          	data1.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        <Tooltip />  
      </PieChart>
          
      </ResponsiveContainer>
      </div>
      <div>
      <h3>Crime by force type</h3>
      <ResponsiveContainer width="20%" height={400}>
      <BarChart width={300} height={300} data={data2}>
      <CartesianGrid strokeDasharray='5 5'/>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Tooltip/>
      <Legend/>
        <Bar dataKey="value" fill='white'/>
           
      </BarChart>
      </ResponsiveContainer>
      </div>    
      <Map/>
    </div>
  );
}

export default App;
