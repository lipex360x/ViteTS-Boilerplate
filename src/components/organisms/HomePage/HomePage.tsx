import { Button } from '@/components/atoms/Button'
import { Minus, Plus, ReturnCircled } from '@/components/atoms/Icons'
import { Logo } from '@/components/atoms/Logo/Logo'
import toastService from '@/services/toast.service'
import { useZustand } from '@/store/useZustand'
import * as S from './styles'

export const HomePage = () => {
  const { count, increment, decrement, reset } = useZustand()

  const handleReset = () => {
    toastService.success('Store Count reseted')
    reset()
  }

  return (
    <S.Wrapper>
      <Logo />
      <h1>React Boilerplate with Vite</h1>

      <S.State>
        <Button icon={<Minus width={20} height={20} />} onClick={decrement} />

        <span>{count}</span>

        <Button icon={<Plus width={20} height={20} />} onClick={increment} />
      </S.State>

      <Button
        icon={<ReturnCircled width={20} height={20} />}
        onClick={handleReset}
      >
        Reset
      </Button>
    </S.Wrapper>
  )
}
