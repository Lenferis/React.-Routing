import styles from './UserFilter.module.sass';

const GENDER_OPTIONS = [
  { value: '', label: 'Всі' },
  { value: 'male', label: 'Чоловіки' },
  { value: 'female', label: 'Жінки' },
];

const NAT_OPTIONS = [
  { value: '', label: 'Всі країни' },
  { value: 'au', label: 'Австралія' },
  { value: 'br', label: 'Бразилія' },
  { value: 'ca', label: 'Канада' },
  { value: 'de', label: 'Німеччина' },
  { value: 'dk', label: 'Данія' },
  { value: 'es', label: 'Іспанія' },
  { value: 'fi', label: 'Фінляндія' },
  { value: 'fr', label: 'Франція' },
  { value: 'gb', label: 'Велика Британія' },
  { value: 'ie', label: 'Ірландія' },
  { value: 'in', label: 'Індія' },
  { value: 'ir', label: 'Іран' },
  { value: 'mx', label: 'Мексика' },
  { value: 'nl', label: 'Нідерланди' },
  { value: 'no', label: 'Норвегія' },
  { value: 'nz', label: 'Нова Зеландія' },
  { value: 'rs', label: 'Сербія' },
  { value: 'tr', label: 'Туреччина' },
  { value: 'ua', label: 'Україна' },
  { value: 'us', label: 'США' },
];

const RESULTS_OPTIONS = [5, 10, 20, 50];

const UserFilter = ({
  users,
  filters,
  searchQuery,
  onSearchChange,
  onFilterChange,
  onIncludeChange,
}) => {
  const totalCount = users.length;
  const selectedCount = users.filter((user) => user.isSelected).length;

  return (
    <div className={styles.filterWrapper}>
      <h2 className={styles.counterText}>
        Вибрано користувачів: {selectedCount} із {totalCount}
      </h2>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Пошук за ім'ям..."
          value={searchQuery}
          onChange={onSearchChange}
          className={styles.searchInput}
        />

        <label className={styles.field}>
          <span className={styles.fieldLabel}>Стать</span>
          <select
            className={styles.select}
            value={filters.gender}
            onChange={(e) => onFilterChange({ gender: e.target.value })}
          >
            {GENDER_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>Країна</span>
          <select
            className={styles.select}
            value={filters.nat}
            onChange={(e) => onFilterChange({ nat: e.target.value })}
          >
            {NAT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>Показати</span>
          <select
            className={styles.select}
            value={filters.results}
            onChange={(e) =>
              onFilterChange({ results: Number(e.target.value) })
            }
          >
            {RESULTS_OPTIONS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.includes}>
        <span className={styles.fieldLabel}>Показати додатково:</span>

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={filters.include.phone}
            onChange={(e) => onIncludeChange('phone', e.target.checked)}
          />
          Телефон
        </label>

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={filters.include.email}
            onChange={(e) => onIncludeChange('email', e.target.checked)}
          />
          Email
        </label>
      </div>
    </div>
  );
};

export default UserFilter;
