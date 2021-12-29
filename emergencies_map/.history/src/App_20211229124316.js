import Map from './components/Map.js';
import './index.css'
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
    <div className="App">
      <Helmet>
        <style>{'body { background-color: black; }'}</style>
      </Helmet>  
    <header>
        <h1>Crimes on December 2018</h1> 
    </header>
      <div class="charts">
      <div class="piechart">  
      <h3>Crime types</h3>
      <ResponsiveContainer width={400} height={200}>
      <PieChart width={300} height={200}>
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
      
      <div class="barchart">
      <h3>Crime by force type</h3>
      <ResponsiveContainer width={300} height={200}>
      <BarChart width={200} height={200} data={data2}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Tooltip/>
      <Bar isAnimationActive={false} barSize={15} dataKey="value" fill='#0f6980'/>
           
      </BarChart>
      </ResponsiveContainer>
      </div>
      </div>
      <div class="filters">
       <h3>Filters</h3>
       <label for="date" color='white'>Date</label>
       <input type="date" id="datefilter" name="datefilter" min="2018-09-01" max="2020-12-31"></input>
      </div>
      <Map/>
      
    </div>
  );
}

export default App;
