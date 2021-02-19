import React from 'react';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.scss';

const FriendList = ({ friends }) => {
    return (
        <ul className={s.friendList}>{friends.map(FriendListItem)}</ul>
    )
}

export default FriendList;