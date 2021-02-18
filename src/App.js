import React from 'react';

import Profile from './components/Profile/Profile.js';
import Statistics from './components/Statistics/Statistics.js';
import FriendList from './components/FriendList/FriendList.js';
import TransactionHistory from './components/Transaction/TransactionHistory.js';

import user from './DataJSON/user.json';
import statisticalData from './DataJSON/statistical-data.json';
import friends from './DataJSON/friends.json';
import transactions from './DataJSON/transactions.json';

const App = () => {
    return (
        <div>
            <Profile
              name={user.name}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
            <Statistics title="Upload stats" stats={statisticalData} />
            {/* <Statistics stats={statisticalData} />; */}
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </div>
    )
}

export default App;