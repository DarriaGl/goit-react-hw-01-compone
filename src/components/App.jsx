import user from '../asset/user.json';
import { Profile } from './Profile/Profile.jsx';
import { Container } from './App.module';
export const App = () => {
  return (
    <Container>
      <Profile>
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      </Profile>
    </Container>
  );
};
