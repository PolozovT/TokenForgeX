import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './modules/theme/theme'
import { Layout } from './modules/layout/Layout'
import { mainnet, optimism, arbitrum, base } from 'viem/chains'
import { TokenForm } from './modules/components/TokenForm'

function App() {
  const queryClient = new QueryClient();

  const config = getDefaultConfig({
    appName: 'TokenForgeX',
    projectId: 'timofei',
    chains: [mainnet, optimism, arbitrum, base],
    ssr: false, // If your dApp uses server side rendering (SSR)
  });

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
              <TokenForm />
            </Layout>
          </ThemeProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
