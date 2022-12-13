


import PropTypes from 'prop-types';
import styles from './Profile.module.css';



const Profile = ({avatar, username, tag, location, stats}) => {

    return (
      <div className={styles.profile}>
    <div className={styles.description}>
      <img
        alt='User avatar'
        src={avatar}
        className={styles.avatar}
      />
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
     
    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
  ); 
};

export default Profile;

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired, 
    avatar: PropTypes.string.isRequired, 
    stats: PropTypes.object.isRequired, 
};

