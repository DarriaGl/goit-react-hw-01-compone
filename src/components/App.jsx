import user from '../asset/user.json';
import data from '../asset/data.json';
import friends from '../asset/friends.json';

import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendList} from "./FriendList/FriendList.jsx"
import { Container } from './App.module';
export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends}></FriendList>
    </Container>
  );
};
