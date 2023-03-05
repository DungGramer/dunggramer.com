import React from 'react';
export const Logo = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`dg ${props.className ? props.className : ''}`}><path d="M489.1 244.62c0 135-109.46 244.49-244.49 244.49S.12 379.65.12 244.62 109.58.13 244.61.13 489.1 109.59 489.1 244.62Zm-93.88 150.61c83.19-83.18 83.19-218 0-301.23S177.18 10.82 94 94a213 213 0 0 0-62.4 150.63c0 117.63 95.37 213 213 213a211.55 211.55 0 0 0 150.62-62.4ZM257.43 150.87c32.68 0 61.2 20 74.73 49.73a92.21 92.21 0 0 1 7.84 28.67h29.71v-.22l-.05-.52a121.66 121.66 0 0 0-5.82-27.93 118.77 118.77 0 0 0-30.17-48c-20.86-20.11-47.91-31.19-76.19-31.19h-75.61v245.12h75.57c28.27 0 55.32-11.07 76.17-31.17a118.72 118.72 0 0 0 30.05-47.71 121.84 121.84 0 0 0 5.85-27.74V259h-93.58v28.62h56c-13.57 29.48-42 49.34-74.56 49.34h-46V150.91Z" fillRule="evenodd" /></svg>
);