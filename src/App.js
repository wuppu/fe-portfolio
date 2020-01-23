import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";

function App() {
  const links = [
    {
      name: "HOME",
      path: "/",
      component: Home
    },
    {
      name: "ABOUT",
      path: "/about",
      component: About
    },
    {
      name: "CONTACT",
      path: "/contact",
      component: Contact
    }
  ];

  return (
    <main>
      <HashRouter>
        <header>Title</header>
        <Navigation links={links} />
        <section className="main-section">
          {links.map((link, index) => (
            <Route key={index} path={link.path} exact>
              <link.component />
            </Route>
          ))}
        </section>
      </HashRouter>
    </main>
  );
}

export default App;
