import React from 'react';
import dynamic from "next/dynamic";

const WithOutSSRPage = () => {
  return (
    <div>SSR OFF</div>
  )
};

export default dynamic(() => Promise.resolve(WithOutSSRPage), {
  ssr: false,
});
