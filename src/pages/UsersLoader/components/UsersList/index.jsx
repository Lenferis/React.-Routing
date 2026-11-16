import { useEffect, useState } from 'react';
import UserListItem from '../UserListItem/';
import UserFilter from '../UserFilter/';
import getUsers from '../../api';
import styles from './UsersList.module.sass';

const DEFAULT_FILTERS = {
  results: 10,
  gender: '', 
  nat: '',    
  include: {
    phone: false,
    email: false,
  },
};

const getExtraInc = (include) => {
  const list = [];
  if (include.phone) list.push('phone');
  if (include.email) list.push('email');
  return list;
};

const filterByName = (users, query) => {
  const q = query.trim().toLowerCase();
  if (!q) return users;
  return users.filter((u) =>
    `${u.firstName} ${u.lastName}`.toLowerCase().includes(q),
  );
};

const UsersList = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    setError(null);

    getUsers({
      results: filters.results,
      gender: filters.gender || undefined,
      nat: filters.nat || undefined,
      inc: getExtraInc(filters.include),
    })
      .then((data) => {
        if (cancelled) return;

        const normalized = data.results.map((u) => ({
          id: u.login.uuid,
          firstName: u.name.first,
          lastName: u.name.last,
          age: u.dob?.age,
          country: u.location?.country ?? u.nat.toUpperCase(),
          nat: u.nat,
          imgSrc: u.picture.large,
          gender: u.gender === 'male' ? 'Male' : 'Female',
          phone: u.phone,
          email: u.email,
          isSelected: false,
        }));

        setUserList(normalized);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [filters.results, filters.gender, filters.nat, filters.include]);

  const handleSelect = (id) => {
    setUserList((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, isSelected: !u.isSelected } : u,
      ),
    );
  };

  const handleDelete = (id) => {
    setUserList((prev) => prev.filter((u) => u.id !== id));
  };

  const handleFilterChange = (partial) =>
    setFilters((prev) => ({ ...prev, ...partial }));

  const handleIncludeChange = (field, value) =>
    setFilters((prev) => ({
      ...prev,
      include: { ...prev.include, [field]: value },
    }));

  const filteredUsers = filterByName(userList, searchQuery);

  return (
    <div className={styles.wrapper}>
      <UserFilter
        users={userList}
        filters={filters}
        searchQuery={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        onFilterChange={handleFilterChange}
        onIncludeChange={handleIncludeChange}
      />

      {loading && <p className={styles.status}>Завантаження…</p>}
      {error && (
        <p className={`${styles.status} ${styles.statusError}`}>{error}</p>
      )}

      {!loading && !error && (
        <div className={styles.cardsContainer}>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <UserListItem
                key={user.id}
                user={user}
                onSelect={handleSelect}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p>Користувачів не знайдено...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UsersList;