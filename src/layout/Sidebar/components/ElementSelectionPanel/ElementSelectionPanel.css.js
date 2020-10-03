import styled from 'styled-components';

import { Button } from 'components';


export const SelectionPanelWrapper = styled.section`
  padding: 20px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
`;

export const RecipeElementButton = styled(Button)`
  background: white;

  &:hover {
    background: lightgrey;
  }

  &:not(:last-child) {
    border-bottom: 1px solid black !important;
  }
`;