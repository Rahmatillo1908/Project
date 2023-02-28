
import React from 'react'
import FeaturedProporties from '../components/featuredProperties/FeaturedProporties'
import Featured from '../components/features/Featured'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import MailLIst from '../components/mailList/MailLIst'
import Navbar from '../components/navbar/Navbar'
import PreportyList from '../components/propertyList/PreportyList'
import "./home.css"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Marhamat Tanlang</h1>
                <PreportyList />
                <h1 className="homeTitle">Ajoyib Honadonlar</h1>
                <FeaturedProporties />
                <MailLIst />
                <Footer />
            </div>
        </div>
    )
}

export default Home