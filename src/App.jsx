import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Components from './pages/Components'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/components" component={Components} />
          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer />
    </div>
  )
}

export default App