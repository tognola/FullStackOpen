const Total = ({course}) => {
    let parts = course.parts;
    return (  
        <p>
            <b>
                total of exercises { parts.map(part => part.exercises ).reduce( (a,b) => a+b)}
            </b>
        </p>
    )
}

export default Total;