import React, { Component } from 'react';
import Title from './Title';
import {FaUtensils, FaHiking, FaShuttleVan, FaWineGlass} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaUtensils />,
                title: 'award-winning chefs',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis.'
            },
            {
                icon: <FaHiking />,
                title: 'endless hiking',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'free shuttle',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis.'
            },
            {
                icon: <FaWineGlass />,
                title: 'premium wine',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis.'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                {this.state.services.map((item, index) => {
                  return <article key={index} className="service">
                      <span>{item.icon}</span>
                      <h6>{item.title}</h6>
                      <p>{item.info}</p>
                  </article>
                })}
                </div>

            </section>
        )
    }
}
