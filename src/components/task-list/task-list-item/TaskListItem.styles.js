import styled from 'styled-components'

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.bgInput};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 0.5rem;
`

export const IsDone = styled.p`
    color: var(--color-secondary);
    text-decoration: line-through;
`

