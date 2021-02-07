const Part = ({ part }) => {
    let {name, exercises} = part;
    console.log(part)
    return (
        <p> {name} {exercises} </p>
    )
}

export default Part;