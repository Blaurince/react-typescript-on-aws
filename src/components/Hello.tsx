interface HelloProps{
    firstName: string
    lastName: string
    age?: number
}

export const Hello = ({firstName, lastName, age}: HelloProps) => {

return (
    <>
    <h1>
        Good Morning, {firstName} {lastName}
    </h1>
    
    </>
)
}