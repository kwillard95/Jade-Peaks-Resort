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
            loading: false
        })
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

    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        //.find() finds the first match and also returns an object
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

//this is a higher order componenet, where a component will return another component

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
      return <RoomConsumer>
          {value => <Component {...props} context={value}/>}
      </RoomConsumer>
  }
}

export { RoomProvider, RoomConsumer, RoomContext }