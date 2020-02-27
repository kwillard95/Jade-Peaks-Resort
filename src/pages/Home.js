import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {RoomContext} from '../context';

export default function Home() {

    const context = useContext(RoomContext);
    const {rooms} = context;

    return (
        <>
        <Hero>
            <Banner title='Luxurious Rooms' subtitle={`Deluxe rooms starting at $${rooms[0] ? rooms[0].price : ''}`}>
                <Link to='/rooms' className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
     </>
    )
}

