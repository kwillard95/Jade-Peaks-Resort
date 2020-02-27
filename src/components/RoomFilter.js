import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context.js';
import Title from '../components/Title';
//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    //get unique types
    let types = getUnique(rooms, 'type')
    let capacities = getUnique(rooms, 'capacity')
    console.log(capacities)

    //add all
    types = ['all', ...types]
    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    capacities = capacities.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} 
                    className="form-control" onChange={handleChange}>
                    {types}
                    </select>
                </div>
                {/* end of select type */}
                {/* select guests */}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select name="capacity" id="capacity" value={capacity} 
                    className="form-control" onChange={handleChange}>
                    {capacities}
                    </select>
                </div>
                {/* end of select guests */}

                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} 
                    id="price" value={price} onChange={handleChange} className="form-control">

                    </input>
                </div>
                {/* end of room price */}

                {/* size of room */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size"
                        value={minSize} onChange={handleChange} className="size-input"/>
                        <input type="number" name="maxSize" id="size"
                        value={maxSize} onChange={handleChange} className="size-input"/>
                    </div>
                </div>
                {/* end of size */}

                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast"
                        id="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets"
                        id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}
