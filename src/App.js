import React from "react";
import "./assets/css/styles.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Portofolio from "./components/Portofolio";
import Sevice from "./components/Service";
import About from "./components/About";
import Team from "./components/Team";
import Logo from "./components/Logo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  const portfolioLinks = [
    {
      title: "Threads",
      caption: "Ilustration",
      images: "images/01-thumbnail.jpg",
    },
    {
      title: "Explore",
      caption: "Graphic Design",
      images: "images/02-thumbnail.jpg",
    },
    {
      title: "Finish",
      caption: "Identify",
      images: "images/03-thumbnail.jpg",
    },
    {
      title: "Lines",
      caption: "Branding",
      images: "images/04-thumbnail.jpg",
    },
    {
      title: "Southwest",
      caption: "Website Desing",
      images: "images/05-thumbnail.jpg",
    },
    {
      title: "Window",
      caption: "Photography",
      images: "images/06-thumbnail.jpg",
    },
  ];
  const serviceLinks = [
    {
      title: "E-Commerce",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      img: "fa fa-shopping-cart",
    },
    {
      title: "Responsive Design",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      img: "fa fa-laptop",
    },
    {
      title: "Web Security",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      img: "fa fa-lock",
    },
  ];
  const aboutLinks = [
    {
      year: "2018",
      heading: "An Agency is Born",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus quiquibusdam, recusandae sit vero unde, sed, incidunt et ea quodolore laudantium consectetur!",
      img: "images/about/1.jpg",
    },
    {
      year: "2019",
      heading: "Journey",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus quiquibusdam, recusandae sit vero unde, sed, incidunt et ea quodolore laudantium consectetur!",
      img: "images/about/2.jpg",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Sevice serviceLink={serviceLinks} />
      <Portofolio portofolioLink={portfolioLinks} />
      <About aboutLink={aboutLinks} />
      <Team />
      <Logo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
