import React, { useState } from 'react';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Accordion from './Accordion';
import Card from './Card';

function Emp() {
  const [activeTab, setActiveTab] = useState('bar');

  return (
    <div className="container-fluid">
      <ul className="nav nav-tabs flex-column flex-sm-row mb-3">
        <li className="nav-item mb-1">
          <button
            className={`nav-link ${activeTab === 'bar' ? 'active' : ''}`}
            onClick={() => setActiveTab('bar')}
          >
            Bar chart
          </button>
        </li>
        <li className="nav-item mb-1">
          <button
            className={`nav-link ${activeTab === 'line' ? 'active' : ''}`}
            onClick={() => setActiveTab('line')}
          >
            Line chart
          </button>
        </li>
        <li className="nav-item mb-1">
          <button
            className={`nav-link ${activeTab === 'share' ? 'active' : ''}`}
            onClick={() => setActiveTab('share')}
          >
            Share
          </button>
        </li>
      </ul>

      <div className="tab-content">
        {activeTab === 'bar' && (
          <div>
            <Chart1 />
            <Card />
          </div>
        )}
        {activeTab === 'line' && (
          <div>
            <Chart2 />
            <Card />
          </div>
        )}
        {activeTab === 'share' && <Accordion />}
      </div>
    </div>
  );
}

export default Emp;
