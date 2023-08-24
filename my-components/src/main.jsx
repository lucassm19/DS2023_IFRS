import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Clock from './componentes/Clock.jsx'
import SemHookState from './componentes/SemHookState.jsx'
import ComHookState from './componentes/ComHookState.jsx'
import SemHookStateEffect from './componentes/SemHookStateEffect.jsx'
import ComHookStateEffect from './componentes/ComHookStateEffect.jsx'
import CounterState from './componentes/CounterState.jsx'
//import CounterReducer from './componentes/CounterReducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

