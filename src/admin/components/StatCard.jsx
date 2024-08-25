import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function StatCard({ title, value, target, percentage, color }) {

    return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex grow gap-5 justify-between items-start px-4 py-4 w-full text-black bg-white rounded-lg shadow-[0px_1px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-6">
        <div className="flex flex-col mt-3 font-medium">
          <div className="self-start text-2xl leading-none">{value}</div>
          <div className="mt-3.5 text-base">{title}</div>
          <div className="text-[12px] leading-6 max-md:mr-2.5">Target {target}</div>
        </div>
        <div className="flex relative flex-col leading-6 whitespace-nowrap aspect-square mt-2" style={{width:"5em"}} >
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                textSize: '18px',
                pathColor: `${color}`, 
                textColor: '#000',
                trailColor: '#d6d6d6',
                textClassName: 'per',
                })}
            />
        </div>
      </div>
    </div>
  );
}

export default StatCard;