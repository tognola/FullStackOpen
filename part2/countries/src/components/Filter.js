import React from 'react'

function Filter({filter, setFilter}) {
    const handleFilter = (event) =>{
        setFilter(event.target.value.toLowerCase())
    }
    return (
        <div>
            <label>find countries </label>
            <input value = {filter} onChange = {handleFilter}></input>
        </div>
    )
}

export default Filter
