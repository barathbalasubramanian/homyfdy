import React from 'react';

function StatCard({ value, label }) {
  return (
    <div className="flex flex-col text-nowrap flex-1 shrink p-5 rounded-xl border border-solid basis-0 bg-zinc-900 border-neutral-800">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="text-base font-medium text-neutral-400">{label}</div>
    </div>
  );
}

export default StatCard;