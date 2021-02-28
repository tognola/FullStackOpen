import Part from "./Part";

const Content = ({ course }) => {
    const parts = course.parts;
    return (
        <div>
            { parts.map( part => <Part key = {part.id} part = {part} />  ) }
        </div>
    )
}

export default Content;