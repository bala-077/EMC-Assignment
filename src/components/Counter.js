import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <>
            <div className="content">
                <h1>Counter</h1>
                <div>
                    <button onClick={increment} className='buttons'>+</button>
                    <h2>{count}</h2>
                    <button onClick={decrement} className='buttons btn'>-</button>
                </div>
            </div>
        </>
    )
}

export default Counter