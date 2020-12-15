import React, {memo} from 'react'

const ShowIncrement = memo(({ increment }) => {
    console.log('ShowIncrement have been generated')
    return (
            <button
                className="btn btn-primary"
                onClick={() => increment(5)}
            >
                Increment
            </button>
    )
})

export default ShowIncrement
