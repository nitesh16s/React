const heading = React.createElement("h1", { id: "heading", style: { color: "red" } }, "hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading)

root.render(heading);


const parent = React.createElement(
    // type
    "div",
    // props
    { id: "parent" },
    // children
    [
        React.createElement(
            "div",
            { id: "children1" },
            [
                // when you want siblings
                React.createElement(
                    "h1",
                    { id: "h1" },
                    "I'm header"
                ), React.createElement(
                    "h1",
                    { id: "h1" },
                    "I'm header"
                )
            ]
        ),
        React.createElement(
            "div",
            { id: "children2" },
            [
                // when you want siblings
                React.createElement(
                    "h1",
                    { id: "h1" },
                    "I'm header"
                ), React.createElement(
                    "h1",
                    { id: "h1" },
                    "I'm header"
                )
            ]
        )
    ]
)
root.render(parent)

console.log(parent)