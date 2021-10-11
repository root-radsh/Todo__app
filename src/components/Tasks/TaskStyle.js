import styled from "styled-components";

export const TasksContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;
