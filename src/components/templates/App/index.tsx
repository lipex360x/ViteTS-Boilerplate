import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../../styles/global'
import theme from '../../../styles/theme'

import * as S from './styles'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <S.Wrapper>
        <div>
          <h1>Vite Boilerplate</h1>
          <p>Update this page in: src/templates/App/index.tsx</p>
        </div>
      </S.Wrapper>
      <GlobalStyles />
    </ThemeProvider>
  )
}
