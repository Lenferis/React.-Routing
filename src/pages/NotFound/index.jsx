import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Такої сторінки не існує.</p>
      <p><Link to="/">Повернутися на головну</Link></p>
    </div>
  )
}

export default NotFound