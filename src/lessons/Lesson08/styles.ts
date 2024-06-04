import { css } from '@emotion/react';
import styled from "@emotion/styled";

interface ButtonStyledComponentProps {
  mainButton?: boolean
}

const commonBoxStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Lesson08Component = styled.div`
  ${commonBoxStyles}
  gap: 20px;
  flex: 1;
  padding: 40px;
`

export const BoxInfo = styled.div`
 ${commonBoxStyles}
 width: 250px;
 height: 250px;
 background-color: #8319E6;
`
export const ButtonStyledComponent = styled.button<ButtonStyledComponentProps>`
  width: 200px;
  height: 70px;
  border: none;
  /* background: #E619A5; */
  background: ${(props) => props.mainButton ? '#E619A5' : '#C619E6'};
  border-radius: 6px;
  font-size: ${({ mainButton }) => mainButton ? '24px' : '20px'};
  padding: 10px;
  cursor: pointer;

  &:hover{
    background: #AE5EC0
  }
`

export const ButtonsBox = styled.div`
  ${commonBoxStyles}
  flex-direction: row;
  gap: 20px;
  width: 700px;
  height: 100px;
  background: #E1A3E9;
  padding: 20px;
`