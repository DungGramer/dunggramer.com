import React from 'react';
export const Logo = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`dg ${props.className ? props.className : ''}`}><path d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm.05 17a7.88 7.88 0 1 1 7.81-7.88A7.84 7.84 0 0 1 9.05 17Z" fillRule="evenodd" />,
<path d="M13.4 7.35a4.41 4.41 0 0 0-1.1-1.77 4 4 0 0 0-2.79-1.16H6.74v9.07h2.77a4 4 0 0 0 2.79-1.15 4.46 4.46 0 0 0 1.31-2.79h-3.43v1.05h2.06a3 3 0 0 1-2.73 1.83H7.82V5.52h1.69a3 3 0 0 1 2.73 1.83 3.47 3.47 0 0 1 .29 1.06h1.09a4.57 4.57 0 0 0-.22-1.06Z" fillRule="evenodd" /></svg>
);
