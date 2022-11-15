import { Moon, Sun } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import * as S from './styles'

export const Header = () => {
  const { colors } = useContext(ThemeContext)
  return (
    <S.Container>
      <Sun size={32} weight="light" color={colors.grey[100]} />
      <Moon size={32} weight="light" />
    </S.Container>
  )
}
