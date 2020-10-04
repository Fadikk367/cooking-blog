import styled from 'styled-components';

export const AdminPageWrapper = styled.div`
  padding: 30px;
  background: #f5f5e6;
`;

export const AdminActionList = styled.ul`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 30px;
`;

export const AdminActionItem = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 2em;
  background: lightskyblue;

  a {
    text-decoration: none;
    color: black;
  }
`;

