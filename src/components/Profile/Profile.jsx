import PropTypes from 'prop-types';
import {
  Profilecontainer,
  Profstats,
  Profdescription,
  Profimage,
  Profname,
  Proftag,
  Proflocation,
  Statslabel,
  Statsquantity,
} from './Profile.module.jsx';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Profilecontainer>
      <Profdescription>
        <Profimage src={avatar} alt="User avatar"></Profimage>
        <Profname>{username}</Profname>
        <Proftag>{tag}</Proftag>
        <Proflocation>{location}</Proflocation>
      </Profdescription>
      <Profstats>
        <li>
          <Statslabel>Followers</Statslabel>
          <Statsquantity>{followers}</Statsquantity>
        </li>
        <li>
          <Statslabel>Views</Statslabel>
          <Statsquantity>{views}</Statsquantity>
        </li>
        <li>
          <Statslabel>Likes</Statslabel>
          <Statsquantity>{likes}</Statsquantity>
        </li>
      </Profstats>
    </Profilecontainer>
  );
};
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
