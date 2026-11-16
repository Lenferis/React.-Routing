function About() {
  return (
    <div>
      <h1>Про себе</h1>

      <div className="section">
        <h2>Коротко</h2>
        <p><strong>Ім'я:</strong> Кирило</p>
        <p><strong>Роль:</strong> JavaScript Full-Stack Developer</p>
        <p><strong>Місто:</strong> Запоріжжя, Україна</p>
        <p><strong>Email:</strong> kirillvelicka0@gmail.com</p>
      </div>

      <div className="section">
        <h2>Досвід</h2>
        <p>React, JavaScript (ES6+), HTML, CSS/SASS, Git.</p>
        <p>Pet-проєкти: weather-app, User Loader, цей демо-проєкт на React Router.</p>
      </div>

      <div className="section">
        <h2>Освіта</h2>
        <p>ВСП "Запорізький електротехнічний фаховий коледж", 4 курс, 2026</p>
      </div>
    </div>
  )
}

export default About