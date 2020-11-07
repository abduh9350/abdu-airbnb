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
                img='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&w=1000&q=80'
                location='Private Room in center of London'
                title='Villa Oak'
                description='1 guest . 1 bed . 3/2 shared bathrooms . WIFI . Kitchen . Free parking . Washing Machine '
                star={4.73}
                price='$200/night'
                total='$117 total'
            />
        </div>
    )
}

export default SearchPage
