/***
 * <div id="parent">
 *      <div id="child">
 *          <h1 id="heading">I'm h1 Tag</h1>
 *      </div>
 * </div>
 */

const parentNode = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div", {id: "child"}, React.createElement("h1", {}, "I'm parent Tag"))
);

/***
 * <div id="parent">
 *      <div id="child">
 *          <h1 id="heading">I'm h1 Tag</h1>
 *          <h2 id="heading">I'm h2 Tag</h2>
 *      </div>
 * </div>
 */

const childSibling = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div", {id: "child"},
    [React.createElement("h1", { id: "heading" }, "I'm h1 Tag"), React.createElement("h2", { id: "heading" }, "I'm h2 Tag") ])
);

/***
 * <div id="parent">
 *      <div id="child">
 *          <h1 id="heading">I'm h1 Tag</h1>
 *          <h2 id="heading">I'm h2 Tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1 id="heading">I'm h1 Tag</h1>
 *          <h2 id="heading">I'm h2 Tag</h2>
 *      </div>
 * </div>
 */

const parentSibling = React.createElement(
    "div",
    {id: "parent"},[
        React.createElement("div", {id: "child"}, [React.createElement("h1", { id: "heading" }, "I'm h1 Tag"), React.createElement("h2", { id: "heading" }, "I'm h2 Tag") ]),
        React.createElement("div", {id: "child2"}, [React.createElement("h1", { id: "heading" }, "I'm h1 Tag"), React.createElement("h2", { id: "heading" }, "I'm h2 Tag") ])
    ]
);


const heading = React.createElement("h1", {id: "heading"}, "Basic React!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
const second = ReactDOM.createRoot(document.getElementById("second"));
second.render(parentNode);
root.render(parentSibling);