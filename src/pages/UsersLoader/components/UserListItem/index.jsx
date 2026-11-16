import classNames from 'classnames';
import styles from './UserListItem.module.sass';

const UserListItem = ({ user, onSelect, onDelete }) => {
  const {
    id,
    firstName,
    lastName,
    age,
    country,
    nat,
    imgSrc,
    gender,
    phone,
    email,
    isSelected,
  } = user;

  const isMale = gender === 'Male';
  const isFemale = gender === 'Female';

  const cardClass = classNames(styles.userCard, {
    [styles.genderMale]: isMale,
    [styles.genderFemale]: isFemale,
    [styles.selectedMale]: isMale && isSelected,
    [styles.selectedFemale]: isFemale && isSelected,
  });

  const handleCardClick = () => {
    onSelect(id);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <div className={cardClass} onClick={handleCardClick}>
      <button
        className={styles.btnDelete}
        onClick={handleDeleteClick}
        title="Delete user"
      >
        ✕
      </button>

      <div className={styles.avatarWrapper}>
        <img
          src={imgSrc}
          alt={`${firstName} ${lastName}`}
          className={styles.userAvatar}
        />
        {nat && (
          <img
            className={styles.flag}
            src={`https://flagcdn.com/w40/${nat.toLowerCase()}.png`}
            alt={nat}
          />
        )}
      </div>

      <div className={styles.userInfo}>
        <div className={styles.userNameWrapper}>
          <span className={styles.userName}>
            {firstName} {lastName}
          </span>
        </div>
        <p className={styles.userNickname}>From {country}</p>
      </div>

      <div className={styles.userStats}>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{age ?? '—'}</span>
          <span className={styles.statLabel}>Years</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{country}</span>
          <span className={styles.statLabel}>Country</span>
        </div>
      </div>

      {(phone || email) && (
        <div className={styles.extraInfo}>
          {phone && <p className={styles.extraItem}>{phone}</p>}
          {email && <p className={styles.extraItem}>{email}</p>}
        </div>
      )}
    </div>
  );
};

export default UserListItem;