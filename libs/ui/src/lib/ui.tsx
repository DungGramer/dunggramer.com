import { Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UiProps {}

const StyledUi = styled.div`
  color: pink;
`;

export function Ui(props: UiProps) {
  return (
    <StyledUi>
      <h1>Welcome to Ui!</h1>

      <ul>
        <li>
          <Link to="/">ui/src/lib/ui root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the ui/src/lib/ui root route.</div>} />
    </StyledUi>
  );
}

export default Ui;
