import React from 'react'

const Filter = ({filter}) => {
    return (
        <>
            <span>filter shown with</span>
            <input onChange={filter}></input>
        </>
    )
}

export default Filter;
