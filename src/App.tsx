import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import { PublicRoutes } from '@/routes'
import GlobalStyles from '@/styles/global'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
