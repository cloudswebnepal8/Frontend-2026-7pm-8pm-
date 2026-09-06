import React from 'react'

function ConditionalRendering() {
    const isLoggedIn = true;
    return (
        <div>
            <h1>Conditional Rendering means displaying different ui based on conditions.</h1>

            <h2>
                {
                    isLoggedIn && <h1>Welcome User.</h1>
                }
            </h2>
        </div>
    )
}

export default ConditionalRendering