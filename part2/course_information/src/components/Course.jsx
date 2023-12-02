const Course = ({ course }) => {
    return (
        <>
            <h1>{course.name}</h1>
            {course.parts.map(parts =>
                <p key={parts.id}>
                    {parts.name} {parts.exercises}
                </p>)}
        </>
    )
}

export default Course