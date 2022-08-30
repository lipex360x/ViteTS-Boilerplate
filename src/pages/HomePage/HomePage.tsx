import { ArrowCounterClockwise } from 'phosphor-react'
import { Button } from '@/components/atoms/Button'
import { Logo } from '@/components/atoms/Logo'
import toastService from '@/services/toast.service'
import * as S from './styles'
import { useZustandStore } from '@/store/zustandStore'

export const HomePage = () => {
  const { count, increment, decrement, reset } = useZustandStore()

  const handleReset = () => {
    toastService.success('Count reseted')
    reset()
  }

  return (
    <S.Wrapper>
      <Logo />
      <h1>React Boilerplate</h1>

      <S.State>
        <Button onClick={() => decrement()}>-</Button>
        <span>{count}</span>
        <Button onClick={() => increment()}>+</Button>
      </S.State>

      <Button
        icon={<ArrowCounterClockwise size={24} />}
        onClick={handleReset}
      >
        Reset
      </Button>

    </S.Wrapper>
  )
}
