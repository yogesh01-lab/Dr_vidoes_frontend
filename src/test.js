import React from 'react'

export default function Test() {
    console.log("All env vars:", process.env);
    console.log("Test env:", process.env.REACT_APP_API_BASE_URL);


  return (
    <div>test</div>
  )
}
