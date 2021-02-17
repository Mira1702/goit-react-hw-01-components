import React from 'react';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import user from './DataJSON/user.json';
import statisticalData from './DataJSON/statistical-data.json';
import friends from './DataJSON/friends.json';

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
            <Statistics title="Upload stats" stats={statisticalData} />;
            {/* <Statistics stats={statisticalData} />; */}
            <FriendList friends={friends} />
        </div>
    )
}

export default App;