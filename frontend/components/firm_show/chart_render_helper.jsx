import {linearGradient, Area, AreaChart, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import React from 'react';

class RenderHelper extends React.Component{

  constructor(props){
    super(props);
    this.state = props;
  }

  render(){
    return(<AreaChart width={730} height={250} data={this.state.data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="year" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey={this.state.financeVar1} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
    </AreaChart>);
  }
  
}

export default RenderHelper;
