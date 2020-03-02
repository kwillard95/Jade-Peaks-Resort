import React, { useState, useEffect } from 'react';
import { withRoomConsumer } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import RoomList from './RoomList';



function FeaturedRooms({ context }) {
    let { loading, featuredRooms: rooms } = context;
    // console.log('rooms', rooms)
    // rooms = rooms.map(room => {
    //     return <Room key={room.id} room={room} />
    // })
    // const [photo, setPhoto] = useState(0);
    // const [photos, setPhotos] = useState(rooms);
    // const [allRooms, setRooms] = useState(rooms);
    const [roomIdx, setRoomIdx] = useState(0)
    // const [room, setRoom] = useState({});
    // const [loading, setLoading] = useState(true);
    // console.log('rooms', rooms)

//    useEffect(() => {
//        setRoom(rooms[roomIdx]);
//    }, [rooms, roomIdx])

   console.log('roomidx', roomIdx)



    function nextProperty() {
        if (roomIdx >= rooms.length - 1) {
            setRoomIdx(0)
        } else {
            const newIdx = roomIdx + 1;
            // console.log('newidx', newIdx)
            setRoomIdx(newIdx);
            // setRoom(rooms[newIdx]);
        }
        console.log(roomIdx)
    }

    function previousProperty() {
        if (roomIdx <= 0) {
            setRoomIdx(rooms.length-1)
        } else {
            const newIdx = roomIdx - 1;
            setRoomIdx(newIdx);
            // setRoom(rooms[newIdx]);
        }
        console.log(roomIdx)
    }
    // console.log('rooom',rooms[0])

    // function handleClickRight() {
    //         if (photo + 1 < rooms.length) {
    //             setPhoto(photo + 1)
    //         } else {
    //             setPhoto(0)
    //         }
    //         setTimeout(handleClickRight, 5000)
    // }

    // function handleClickLeft() {
    //         if (photo - 1 >= 0) {
    //             setPhoto(photo - 1)
    //         } else {
    //             setPhoto(rooms.length - 1)
    //         }
    // }

    if (loading) {
        // console.log('loading true', room)
        return <Loading />
    } else {
        // console.log('loading false', rooms[roomIdx])
        return (
            <section className="featured-rooms">
                {/* {handleClickRight()} */}
                <Title title="featured rooms" />
                <div className="carousel-container">
                    <FaAngleLeft className="featured-rooms-icon" onClick={previousProperty} />
                    <div className="featured-rooms-container">
                        <div className="featured-rooms-center fade">
                            <Room key={rooms[roomIdx].id} room={rooms[roomIdx]} />
                        </div>
                    </div>
                    <FaAngleRight className="featured-rooms-icon" onClick={nextProperty} />
                </div>
    
            </section>
        )
    }

}

export default withRoomConsumer(FeaturedRooms);


// export default class FeaturedRooms extends Component {
//     constructor() {
//         super();
//         this.state = {
//             i: 0
//         }
//         const props = useSpring({opacity: 1})
//     }
//     static contextType = RoomContext;

//     render() {
//         //accessing featuredRooms fromt this.context but renaming it as rooms
//         let newThis = this;
//         let { loading, featuredRooms: rooms } = this.context;
//         rooms = rooms.map(room => {
//             return <Room key={room.id} room={room} />
//         })

//         function handleClickRight() {
//            if (newThis.state.i + 1 < rooms.length) {
//                newThis.setState({i : newThis.state.i + 1})
//            } else {
//             newThis.setState({i : 0})
//            }
//         }

//         function handleClickLeft() {
//             if (newThis.state.i - 1 >= 0) {
//                 newThis.setState({i : newThis.state.i - 1})
//             } else {
//              newThis.setState({i : rooms.length-1})
//             }
//          }

//         return (
//             <section className="featured-rooms">
//                 <Title title="featured rooms" />
//                 {/* <div className="featured-rooms-center">
//                  {loading ? <Loading /> : rooms}
//              </div> */}
//                 <div className="carousel-container">
//                     <FaAngleLeft className="featured-rooms-icon" onClick={handleClickLeft} />
//                     <div className="featured-rooms-container">
//                          {/* <div className="featured-rooms-center">
//                             {loading ? <Loading/> : rooms[this.state.i]}
//                         </div>  */}
//                         <animated.div style={this.props}>i will fade</animated.div>
//                     </div>

//                     <FaAngleRight className="featured-rooms-icon" onClick={handleClickRight}/>
//                 </div>

//             </section>
//         )
//     }
// }
