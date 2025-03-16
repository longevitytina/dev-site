'use client';
import React from 'react';
import './trackerBar.css';

interface TrackerBarProps {
  fundGoal: number;
  fundCurrent: number;
}

const TrackerBar = ({ fundGoal, fundCurrent }: TrackerBarProps) => {
  const percentage = (fundCurrent / fundGoal) * 100;

  return (
    <div className='w-52 my-10'>
      <div className="tracker_bar">
        <div className='status_bar' style={{ width: `${percentage}%` }}></div>
        <div className="tick start">0</div>
        <div className="tick middle">${fundGoal / 2}</div>
        <div className="tick end">${fundGoal}</div>
        <div className="current_amount" style={{ left: `${percentage}%` }}>
          ${fundCurrent}
        </div>
      </div>
    </div>
  );
};

export default TrackerBar;
