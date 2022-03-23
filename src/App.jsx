import { GlobalStyle } from 'styles/globals'
import { Dashboard } from './components/Dashboard'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Dashboard />
      </QueryClientProvider>
    </div>
  )
}

export default App
