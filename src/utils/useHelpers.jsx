import React from 'react'
import { useLocation } from 'react-router';

export default function useHelpers() {
    
    const location = useLocation()
    console.log(location.search.replace("?","").split("&").map (q=>({[q.split("=")[0]]:q.split("=")[1]}))
);
    console.log(location);
  return (
    <div>useHelpers</div>
  )
}
