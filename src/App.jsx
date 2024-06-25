import { useState } from "react";
import "./App.css";
import { MainLayout } from "./layouts/mainLayout";
import { NavBar } from "./components/main/navbar";
import { Hero } from "./components/main/hero";
import { Services } from "./components/main/services";
import { Cartegories } from "./components/main/cartegories";
import { News } from "./components/main/news";
import { Audios } from "./components/main/audios";

function App() {
  return (
    <>
      <MainLayout>
        <NavBar />
        <Hero />
        <Services />
        <Cartegories />
        <News />
        <Audios />
      </MainLayout>
    </>
  );
}

export default App;
