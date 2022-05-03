import Navigation from "./navigation"

const Container = (props)=>(
    <div>
        <head>
            <title>Next.js Project</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" />
        </head>
        <Navigation/>
        <div className="container p-4">
            {props.children}
        </div>
    </div>
)

export default Container; 