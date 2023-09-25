import React from 'react';
import AreaChart from './area/AreaChart';
import LineChart from './line/LineChart';
import BarChart from './bar/BarChart';
import PieChart from './pie/PieChart';
import "./Visitors.css"

function Visitor() {
    return (
      <div className="main">
        <div className="sec grid grid-cols-4 gap-4">
          <div className="pie_chart col-span-1">
            <PieChart />
          </div>
          <div className="bar_chart col-span-1">
            <BarChart />
          </div>
          <div className="line_chart col-span-1">
            <LineChart />
          </div>
          <div className="col-span-1">
            <AreaChart />
          </div>
        </div>
      </div>
    );
  }
  
  export default Visitor;

