import React, { memo } from 'react'

const Small = memo(({value}) => {
    console.log('I was called again')
    return (
        <small>
            {value}
        </small>
    )
})

export default Small