import React, {useEffect} from "react";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import TopButton from "./components/topButton/TopButton";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
// import Timeline from "./components/timeline/timeline";

function App() {

  useEffect(() => {
    fetch("https://mb-crc-visitors-app.azurewebsites.net/api/AddVisitor?", {
      method: "GET",
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      console.log("Visitor added");
    })
    .catch(error => {
        console.error(error);
    });
  }, []);

  return (
    <div className="App">
     <Banner />
      <Home />
      <About />
      <Experience />
      <Experience extra />
      {/* <Timeline /> */}
      <Contact />
      <Footer />
      <TopButton />
    </div>
  );
}

export default App;
