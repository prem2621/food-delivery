import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import ExploreMoreMenu from '../../Components/ExploreMoreMenu/ExploreMoreMenu'
import "./Home.css"
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import About from '../../Components/About/About'
import Location from '../../Components/Location/Location'
import Contact from '../../Components/Contact/Contact'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div className="home">
      <Header />
      <ExploreMoreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <Location/>
      <About />
      <Contact/>
    </div>
  );
}

export default Home
