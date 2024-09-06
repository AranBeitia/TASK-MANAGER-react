import styled from 'styled-components'

const TaskCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  padding: 3rem;
  min-width: 600px;
  width: 100%;
  background-color: ${({ theme }) => theme.cardBackground};

  &__list {
    padding: 3.5rem 0;
  }
`
export default TaskCard