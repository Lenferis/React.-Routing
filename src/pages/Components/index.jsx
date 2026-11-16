import { Switch, Route, Link, useRouteMatch, useLocation } from 'react-router-dom'
import styles from './Components.module.sass'
import UsersLoader from '../UsersLoader'
import WeatherWidget from '../Weather/component/WeatherWidget'

const tiles = [
  { slug: 'usersloader', title: 'User', desc: 'Вибріка користувачів' },
  { slug: 'weather', title: 'Weather', desc: 'Погода(Запоріжжя)' }
]

function Components() {
  const { path } = useRouteMatch()
  const location = useLocation()

  const isRoot = location.pathname === path || location.pathname === `${path}/`

  if (!isRoot) {
    return (
      <div>
        <Link to="/components" className={styles.back}>
          ← Назад до компонентів
        </Link>

        <Switch>
          <Route exact path={`${path}/usersloader`} component={UsersLoader} />
          <Route exact path={`${path}/weather`} component={WeatherWidget} />
        </Switch>
      </div>
    )
  }

  return (
    <div>
      <h1>Компоненти</h1>
      <p>Оберіть компонент — він відкриється за вкладеним роутом.</p>

      <div className={styles.grid}>
        {tiles.map((tile) => (
          <Link key={tile.slug} to={`${path}/${tile.slug}`} className={styles.tile}>
            <span className={styles.tileTitle}>{tile.title}</span>
            <span className={styles.tileDesc}>{tile.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Components