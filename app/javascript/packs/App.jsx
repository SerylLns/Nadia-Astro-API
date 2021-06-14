import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blogs from "./Components/Blogs";
import NavBar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Article from "./Components/Article";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IPcontext } from "./Components/AppContext";
import About from "./Components/About";
import VideoPage from "./Components/video/VideoPage";
import NotFound from "./Components/NotFound";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  const [Ip, setIp] = useState();

  useEffect(() => {
    const getIp = async () => {
      axios
        .get("https://api.ipify.org?format=json")
        .then((res) => {
          console.log(res.data.ip);
          setIp(res.data.ip);
        })
        .catch((err) => console.log(err));
    };
    getIp();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <IPcontext.Provider value={Ip}>
            <Route path="/" exact component={Home} />
            <Route path="/blog" exact component={Blogs} />
            <Route path="/article/:id" exact component={Article} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={About} />
            <Route path="/video" exact component={VideoPage} />
            {/* <Route path="/" component={NotFound} /> */}
          </IPcontext.Provider>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
