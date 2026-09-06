import React, { useState } from 'react'

function UseState() {
  const [count, setcount] = useState(0)  //count=0 and setcount = function
  return (
    <div>
      <h1>Usestate</h1>
      <p>Usestate is a special function in react useful for state management.It stores and updates data.</p>

      <h3>Count:{count}</h3>
      <button onClick={() => setcount(count + 1)}>Increase</button>
      <button onClick={() => setcount(count- 1)}>Decrease</button>
      <button onClick={() => setcount(0)}>Reset</button>

      {/* decrease and reset button  */}
    </div>
  )
}

export default UseState