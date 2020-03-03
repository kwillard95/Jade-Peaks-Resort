import React, { useState, useEffect } from 'react';
import { withRoomConsumer } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import RoomList from './RoomList';



function FeaturedRooms({ context }) {
    let { loading, featuredRooms: rooms } = context;
    const [roomIdx, setRoomIdx] = useState(0)


    function nextProperty() {
        if (roomIdx >= rooms.length - 1) {
            setRoomIdx(0)
        } else {
            const newIdx = roomIdx + 1;
            setRoomIdx(newIdx);
        }
    }

    function previousProperty() {
        if (roomIdx <= 0) {
            setRoomIdx(rooms.length - 1)
        } else {
            const newIdx = roomIdx - 1;
            setRoomIdx(newIdx);
        }
    }

    if (loading) {
        return <Loading />
    } else {
        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="carousel-container">
                    <FaAngleLeft className="featured-rooms-icon" onClick={previousProperty} />
                    <div className={`cards-slider active-slide-${roomIdx}`}>
                        <div className="cards-wrapper" style={{
                            transform: `translateX(-${roomIdx*(100/rooms.length)}%)`
                        }}>
                            {
                                rooms.map((room, idx) => <Room key={room.id} room={room} id={idx}/>)
                            }
                        </div>
                    </div>
                    <FaAngleRight className="featured-rooms-icon" onClick={nextProperty} />
                </div>

            </section>
        )
    }

}

export default withRoomConsumer(FeaturedRooms);
