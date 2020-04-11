import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";

import Algorithm from "./routes/projectContent/Algorithm";
import Scratch from "./routes/projectContent/Scratch";
import MLAgent from "./routes/projectContent/MLAgent";
import SwitchMonitor from "./routes/projectContent/SwitchMonitor";
import SwitchMonitorWeb from "./routes/projectContent/SwitchMonitorWeb";

// import Contact from "./routes/Contact";
import Project from "./routes/Project";

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
      name: "PROJECT",
      path: "/project",
      component: Project
    }
  ];

  const contentLinks = [
    {
      path: "/project/algorithm",
      component: Algorithm
    },
    {
      path: "/project/scratch",
      component: Scratch
    },
    {
      path: "/project/ml-agent",
      component: MLAgent
    },
    {
      path: "/project/switch-monitor",
      component: SwitchMonitor
    },
    {
      path: "/project/switch-monitor-web",
      component: SwitchMonitorWeb
    }
  ]
  return (
    <main>
      <HashRouter>
        <header>Portfolio</header>
        <div className="main-frame">
          <Navigation links={links} />
          <section className="main-section">
            {links.map((link, index) => (
              <Route key={index} path={link.path} exact>
                <link.component />
              </Route>
            ))}

            {contentLinks.map((link, index) => (
              <Route key={index} path={link.path} exact>
                <link.component />
              </Route>
            ))}
          </section>
        </div>
      </HashRouter>
    </main>
  );
}

export default App;
