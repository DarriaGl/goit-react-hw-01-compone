import { FriendListItem } from '../FriendListItem/FriendListItem.jsx';
import PropTypes from 'prop-types';
import { FriendListContainer } from './FriendList.module.jsx';
export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            status={isOnline}
            avatar={avatar}
            name={name}
          />
        );
      })}
    </FriendListContainer>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array,
};
