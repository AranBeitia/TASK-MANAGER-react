import styled from 'styled-components'

export const TaskForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TaskInput = styled.input`
    box-sizing: border-box;
    display: block;
    min-width: 200px;
    width: 100%;
    outline: 0;
    padding: 0.5rem;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.border};
    @include border-style($radius: 10px);
    background: ${({theme}) => theme.bgInput};
`

export const TaskButton = styled.button`
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  background-color: var(--color-secondary);
  transition: border-color 0.25s;

  &:hover {
    background-color: var(--color-tertiary);
    color: var(--color-light);
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`


