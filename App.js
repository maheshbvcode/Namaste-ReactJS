import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h1a" }, "Hello I am H1"),
    React.createElement("h2", { key: "h2a" }, "Hello I am H2"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1b" }, "Hello I am H1"),
    React.createElement("h2", { key: "h2b" }, "Hello I am H2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
