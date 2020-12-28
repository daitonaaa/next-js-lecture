import React from 'react';

export const Layout = ({ children }) => {
  return (
    <div>
      this layout
      <div style={{paddingTop: 50}}>
        {children}
      </div>
    </div>
  )
}