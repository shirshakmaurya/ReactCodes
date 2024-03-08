import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", {id:"parent"}, 
    [React.createElement("h1", {id: "heading"},"Hello React from div"),
     React.createElement("h2",{id:"secondheading"},"Heading h2")
    ])
    ;
    
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)