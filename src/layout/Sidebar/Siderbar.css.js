import styled from 'styled-components';


export const SidebarWrapper = styled.div`
  width: 300px;
  background: lightslategrey;
`;

export const SidebarContent = styled.div`
  position: sticky; 
  top: 60px;
  right: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > button {
    width: 100%;
  }
`;

export const SidebarPlaceholder = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: lightslategrey;
`;

