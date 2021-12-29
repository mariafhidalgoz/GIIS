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
        <style>{'body { background-color: blue; }'}</style>
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
      <br></br>
      </div>
      </div>
      <div class="filters">
       <h3>Filters</h3>
       <label for="datefilter">Month </label>
       <input type="month" id="datefilter" name="datefilter" value="2018-09" min="2018-09" max="2020-12"></input>
       <br></br>
       <label for="forces">Force Type </label>
       <input list="allforces" id="forces" name="force" ></input>
       <datalist id="allforces">
         <option value="Camebridgeshire Police"></option>
       </datalist>
       <br></br>
       <label for="crime">Crime Type </label>
       <input list="allcrimes" id="crimes" name="crime" ></input>
       <datalist id="allcrimes">
         <option value="Theft"></option>
       </datalist>
       <br></br>
       <br></br>
       <br></br>
       </div>
      <div class="layers">
        <h3>Layers</h3>
        <div>
        <h4>Crimes</h4>
        <label for="incidents">Incidents        </label>
        <input type="radio" id="incidents" name="crimelayer"></input>
        <label for="heatmap">Heatmap            </label>
        <input type="radio" id="heatmap" name="crimelayer"></input>
        <label for="choropleth">Choropleth      </label>
        <input type="radio" id="choropleth" name="crimelayer"></input>
        </div>
        <div>
          <h4>Police Stations</h4>
          <label for="stations">Stations      </label>
          <input type="checkbox" id="policestations" name="policestations"></input>
        </div>
      </div>
      <Map/>
      
    </div>
  );
}

export default App;
