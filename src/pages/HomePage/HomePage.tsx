import { ThumbsUp } from 'phosphor-react'
import { Button } from '@/components/atoms/Button'
import { Logo } from '@/components/atoms/Logo'
import toastService from '@/services/toast.service'
import * as S from './styles'

export const HomePage = () => {
  const handleClick = () => {
    toastService.success('Hello Boilerplate')
  }

  return (
    <S.Wrapper>
      <Logo />
      <h1>React Boilerplate</h1>

      <Button
        icon={<ThumbsUp size={24} />}
        onClick={handleClick}
      >
        Send Hello
      </Button>
    </S.Wrapper>
  )
}
