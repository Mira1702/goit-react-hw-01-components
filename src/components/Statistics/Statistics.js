import React from 'react';
import s from './Statistics.module.scss';

const StatisticListItem = ({ id, label, percentage }) => {
  return (
    <li key={id} className={s.item} style={{ backgroundColor: randomColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  )
}

const StatisticList = ({ stats }) => {
  if (stats.length == 0) return null
  return <ul className={s.statList}>{stats.map(StatisticListItem)}</ul>
}


const Statistics = ({ stats }) => {
    return (
        <section className={s.statistics}>
         <h2 className={s.title}>Upload stats</h2>

        <StatisticList stats={stats} />
        </section>
    )
}

function randomColor()
{
     return '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
}

export default Statistics;