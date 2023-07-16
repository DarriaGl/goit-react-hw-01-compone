import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.module.jsx';
export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendItem>
      <FriendStatus isOnline={isOnline}>{isOnline}</FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="30" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};
FriendListItem.propTypes = {
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
