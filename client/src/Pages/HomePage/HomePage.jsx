import React from 'react'
import './HomePage.css'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Posts from '../../Components/Posts/Posts'
function HomePage() {
    return (
        <div>
            <Header />
            <div className="home">
            <Posts />
            <Sidebar />
            </div>
          
            Homepage
        </div>
    )
}

export default HomePage
