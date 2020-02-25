import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();
// Provider is responsible for allowing all the components in the component tree to access it 
// Consumer used to access that information

// <RoomContext.Provider value={}></RoomContext.Provider>

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    };


    componentDidMount() {
        //this.getData
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false})
    }

    formatData(items) {
        let tempItems = items.map((item) => {
            let id = item.sys.id;
            let images = item.fields.images.map(img => img.fields.file.url);
            let room = { ...item.fields, images, id};
            return room;
        });
        return tempItems;
    }

    render() {
        return (
            <RoomContext.Provider value={this.state}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }