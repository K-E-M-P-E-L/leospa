import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Service from '../../components/Service/Service'
import Review from '../../components/Review/Review'
import Team from '../../components/Team/Team'
import Contact from '../../components/Contact/Contact'
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Home() {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <About></About>
            <Service></Service>
            <Review></Review>
            <Team></Team>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}

export default Home
