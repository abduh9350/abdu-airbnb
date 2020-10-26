import React from 'react'
import Banner from './Banner'
import './Home.css'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className="home_section">
                <Card 
                    src='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&w=1000&q=80'
                    title='Villa Oak'
                    description='White and brown concrete under blue sky'
                    price='$200/night'
                />
                <Card 
                    src='https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                    title='Online Experience'
                    description='White and red house'
                    price='$250/night'
                />
                <Card 
                    src='https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                    title='Unique stays'
                    description='Gray wooden house'
                    price='$500/night'
                />
            </div>
            <div className="home_section">
                <Card 
                    src='https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                    title='Entire homes'
                    description='Red and white house surrounded by green grass field'
                    price='$300/night'
                />
                <Card 
                    src='https://images.unsplash.com/photo-1516281717304-181e285c6e58?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                    title='luxury House'
                    description='White and black house near pond'
                    price='$350/night'
                />
                <Card 
                    src='https://images.unsplash.com/photo-1527030280862-64139fba04ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                    title='New Apartments'
                    description='Aerial view of white building'
                    price='$400/night'
                />
            </div>
        </div>
    )
}

export default Home
