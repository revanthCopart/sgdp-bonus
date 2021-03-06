import React from 'react'
import ReactDOM from 'react-dom'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'

import AppView from './App'
import Store from './App/Store'

import './styles.css'

function App() {
  return (
    <div className="App">
      <Fabric>
        <MuiThemeProvider>
          <Provider store={Store}>
            <AppView />
          </Provider>
        </MuiThemeProvider>
      </Fabric>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
