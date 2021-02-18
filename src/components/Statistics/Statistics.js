import React from 'react';

const StatisticListItem = ({ id, label, percentage }) => {
  return (
    <li key={id} className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  )
}

const StatisticList = ({ items }) => {
  if (items.length == 0) return null
  return <ul className="stat-list">{items.map(StatisticListItem)}</ul>
}


const Statistics = ({ items }) => {
    return (
        <section className="statistics">
         <h2 className="title">Upload stats</h2>

        <StatisticList items={items} />
        </section>
    )
}

export default Statistics;