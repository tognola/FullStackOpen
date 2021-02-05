const Part = ({ part }) => {
    let {name, excercise} = part;
    return (
        <p> {name} {excercise} </p>
    )
}

export default Part;