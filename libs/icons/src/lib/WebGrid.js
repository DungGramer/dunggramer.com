import React from 'react';
export const WebGrid = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`dg ${props.className ? props.className : ''}`}><path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM14,20H4V13H14Zm0-9H4V4H14Zm6,9H16V4h4Z" fillRule="evenodd" /></svg>
);
