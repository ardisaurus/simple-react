import React from "react";
import Todo from "./components/pages/Todo";
import About from "./components/pages/About";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Todo} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
