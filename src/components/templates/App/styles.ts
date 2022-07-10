import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.color.lightGray};

    div {
      text-align: center;
      h1 {
        font-size: ${theme.font.size.xxlarge};
      }

      p {
        font-size: ${theme.font.size.large};
      }
    }
  `}
`
