import Home from './components/Home'
import { ConnectButton } from '@rainbow-me/rainbowkit'

import './App.css'

function App() {

  return (
       <div className='bgcolor'>
        <div>
            <ConnectButton  />
        </div>
          <Home />
       </div>
  )
}

export default App
