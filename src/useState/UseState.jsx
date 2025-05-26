import React, { useState } from 'react'

export const UseState = () => {
    const [count, setCount] = useState(0)
  return (
    <>
    <h1>useState - Count</h1>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>
        click
    </button>
    </>
  )
}

