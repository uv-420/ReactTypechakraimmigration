import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Visaoffers from "pages/Visaoffers";
import Visadetails from "pages/Visadetails";
import Countries from "pages/Countries";
import Countrydetails from "pages/Countrydetails";
import Blog from "pages/Blog";
import Blogdetails from "pages/Blogdetails";
import Team from "pages/Team";
import Teamdetails from "pages/Teamdetails";
import FAQ from "pages/FAQ";
import Contact from "pages/Contact";
import Error from "pages/Error";
import Home1 from "pages/Home1";
import Storydetails from "pages/Storydetails";
import Gallery from "pages/Gallery";
import Visa from "pages/Visa";
import Pricingtables from "pages/Pricingtables";
import Coaching from "pages/Coaching";
import Successstory from "pages/Successstory";
import About from "pages/About";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "visaoffers",
      element: <Visaoffers />,
    },
    {
      path: "visadetails",
      element: <Visadetails />,
    },
    {
      path: "countries",
      element: <Countries />,
    },
    {
      path: "countrydetails",
      element: <Countrydetails />,
    },
    {
      path: "blog",
      element: <Blog />,
    },
    {
      path: "blogdetails",
      element: <Blogdetails />,
    },
    {
      path: "team",
      element: <Team />,
    },
    {
      path: "teamdetails",
      element: <Teamdetails />,
    },
    {
      path: "faq",
      element: <FAQ />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "error",
      element: <Error />,
    },
    {
      path: "home1",
      element: <Home1 />,
    },
    {
      path: "storydetails",
      element: <Storydetails />,
    },
    {
      path: "gallery",
      element: <Gallery />,
    },
    {
      path: "visa",
      element: <Visa />,
    },
    {
      path: "pricingtables",
      element: <Pricingtables />,
    },
    {
      path: "coaching",
      element: <Coaching />,
    },
    {
      path: "successstory",
      element: <Successstory />,
    },
    {
      path: "about",
      element: <About />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
