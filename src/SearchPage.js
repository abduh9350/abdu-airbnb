import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'
function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage_info">
                <p>62 stays . 26 august to 30 august . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>
                    Cancellation Flexibility
                </Button>
                <Button variant='outlined'>
                    Type of place
                </Button>
                <Button variant='outlined'>
                    Price
                </Button>
                <Button variant='outlined'>
                    Rooms and beds
                </Button>
                <Button variant='outlined'>
                    More filters
                </Button>

            </div>
            <SearchResult 
                img='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&w=1000&q=80'
                location='Private Room in center of London'
                title='Villa Oak'
                description='1 guest . 1 bed . 3/2 shared bathrooms . WIFI . Kitchen . Free parking . Washing Machine '
                star={4.73}
                price='$200/night'
                total='$117 total'
            />
            <SearchResult 
                img='https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                location='Private Room in center of London'
                title='Villa Oak'
                description='1 guest . 1 bed . 3/2 shared bathrooms . WIFI . Kitchen . Free parking . Washing Machine '
                star={4.73}
                price='$200/night'
                total='$117 total'
            />
            <SearchResult 
                img='https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                location='NewYork'
                title='Villa Oak'
                description='White and brown concrete under blue sky'
                star={3.96}
                price='$200/night'
                total='300 total'
            />
        </div>
    )
}

export default SearchPage
