function Home() {
  return (
    <div>
      <h1>Головна</h1>
      <p>
        Демонстраційний проєкт на React + React Router v5. Тут є сторінки, вкладені
        роути, активне меню, 404 і мінімалістичний чорно-білий дизайн.
      </p>

      <div className="section">
        <h2>Що є в проєкті</h2>
        <p>/components — сторінка з вкладеними роутами (Counter, User).</p>
        <p>/about — інформація про автора.</p>
        <p>Будь-який інший шлях — кастомна 404.</p>
      </div>
    </div>
  )
}

export default Home