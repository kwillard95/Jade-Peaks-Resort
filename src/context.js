import React, { Component } from 'react'

const RoomContext = React.createContext();
// Provider is responsible for allowing all the components in the component tree to access it 
// Consumer used to access that information

// <RoomContext.Provider value={}></RoomContext.Provider>

class RoomProvider extends Component {
    state = {
        greeting: 'hello',
        name: 'john'
    };
    render() {
        return (
        <RoomContext.Provider value={{...this.state}}>
            {this.props.children}
        </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export{ RoomProvider, RoomConsumer, RoomContext }