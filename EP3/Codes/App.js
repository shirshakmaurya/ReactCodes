import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("div", {id:"parent"}, 
//     [React.createElement("h1", {id: "heading"},"Hello React from div"),
//      React.createElement("h2",{id:"secondheading"},"Heading h2")
//     ])
//     ;

// using JSX
// const jsxHeading = <h1 id="heading"> Hello React using JSX</h1>

const HeadingComponent = () => {
    return (<h1>React functional component</h1>)
}

// This is component composition : using component inside another component
const Heading2 = () => {
    return (<div>
        <HeadingComponent />
        {/* can also use the HeadingCompnent as {HeadingComponent()} */}
        <h2>Heading 2 using functional component </h2>
    </div>)
}
    
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Heading2 />)