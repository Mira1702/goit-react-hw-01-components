import React from 'react';
import s from './FriendList.module.scss';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
    let color = 'red';
    if (isOnline) {
    color = 'green';
  }
    return (
        <li key={id} className={s.item}>
            <span style={{ backgroundColor: color }} className={s.status}>{isOnline}</span>
           <img className={s.avatar} src={avatar} alt={name} width="40" />
            <p className={s.name}>{name}</p>
        </li>
    )
}

export default FriendListItem;