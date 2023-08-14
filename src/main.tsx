import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


import '../src/polyfills.js'
import '@rainbow-me/rainbowkit/styles.css'
import 'react-toastify/dist/ReactToastify.css';
import { getDefaultWallets, RainbowKitProvider} from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, polygon, arbitrum, celo, celoAlfajores, celoCannoli} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public'
import { ToastContainer } from 'react-toastify'


const {chains, publicClient} = configureChains(
  [mainnet, polygon,  arbitrum, celo, celoAlfajores, celoCannoli],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: "BuyMeCOffee",
  projectId: "o.o.1",
  chains
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
)
