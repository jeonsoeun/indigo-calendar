import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import MemoListModal from './components/MemoListModal'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <MemoListModal></MemoListModal>
    </div>
  )
}

export default App
