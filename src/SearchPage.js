import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
    return(
        <div className="SearchPage">
            <div className="SearchPage_info">
               <p>62 stays . 26 august to 30 august . 2 guest</p>
               <h1>Stays nearby</h1>
               <Button variant='outlined'>Cancellation Flexibility</Button>
               <Button variant='outlined'>Type of Place</Button>
               <Button variant='outlined'>Price</Button>
               <Button variant='outlined'>Rooms & Beds</Button>
               <Button variant='outlined'>More Filters</Button>
            </div>
            <SearchResult 
                 img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                 location="Private room in center of London"
                 title="Stay at this spacious Edwardian House"
                 description="1 guest 1 bedroom 1 bed  1.5 shared bathroom  Wifi  Kitchen  Free parking  Washing machine"
                 star={4.73}
                 price="$30/night"
                 total="$117total"
             
             />

            <SearchResult 
                 img="https://q-xx.bstatic.com/xdata/images/hotel/840x460/176617054.jpg?k=886d4da1770f83536de5b61ba463ba7a587136ae44cc4c5aa43f4b6b77b14904&o="
                 location="Private room in center of London"
                 title="Independent luxury Studio Apartment"
                 description="2 guest 2 bedroom 1 bed  2 bathroom  Wifi  Kitchen  Free parking  Washing machine"
                 star={4.3}
                 price="$40/night"
                 total="$157total"
             
             />

            <SearchResult 
                 img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                 location="Private room in center of London"
                 title="5 Star Luxury Apartment"
                 description="3 guest 2 bedroom 2 bed  3 bathroom  Wifi  Kitchen  Free parking  Washing machine"
                 star={3.85}
                 price="$90/night"
                 total="$650total"
             
             />

            <SearchResult 
                 img="https://i.pinimg.com/originals/0f/ff/26/0fff2685a498175f7482508cf0628d7e.jpg"
                 location="Private room in center of London"
                 title="Vantage-point-studio-2-Essential Living in 2020"
                 description="3 guest 2 bedroom 2 bed  3 bathroom  Wifi  Kitchen  Free parking  Washing machine"
                 star={4.0}
                 price="$88/night"
                 total="$780total"
             
             />

            <SearchResult 
                 img="https://lid.zoocdn.com/645/430/ec978e9250ec3e3ceba550d4973c862188a74565.jpg"
                 location="Private room in center of London"
                 title=" Studio Flats in London"
                 description="4 guest 4 bedroom 1 bed  4 bathroom  Wifi  Kitchen  Free parking  Washing machine"
                 star={4.85}
                 price="$95/night"
                 total="$850total"
             
             />

            <SearchResult 
                 img="https://www.iqstudentaccommodation.com/sites/default/files/styles/default/public/2019-11/DSC_0698_0.jpg?itok=VNOgIkoa"
                 location="Private Accommodation in  London"
                 title=" IQ City London"
                 description="Private Room  Small Double Bed Shared Kitchen Shower"
                 star={4.1}
                 price="$75/night"
                 total="$880total"
             
             />
          </div>
    );
}

export default SearchPage;