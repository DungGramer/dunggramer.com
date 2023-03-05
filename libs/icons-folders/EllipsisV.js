import React from 'react';
export const EllipsisV = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`dg ${props.className ? props.className : ''}`}><path d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z" fillRule="evenodd" /></svg>
);
