import React from 'react';
import './MainPage.css'; 
import MapView from '../../components/MapView/MapView'; 
import EventFeed from '../../components/EventFeed/EventFeed';
import { Event } from '../../types/Event';

const events : Partial<Event>[] = [
    {
        title: 'Event 1',
        description: 'Event 1 description',
        date: '2021-10-01',
        location: {
            latitude: 51.505,
            longitude: -0.09,
        },
        image: 'https://via.placeholder.com/150',
        attending: 10,
        price: 0
    },
    {
        title: 'Event 2',
        description: 'Event 2 description',
        date: '2021-10-02',
        location: {
            latitude: 51.505,
            longitude: -0.09,
        },
        image: 'https://via.placeholder.com/150',
        attending: 20,
        price: 10
    },
    {
        title: 'Event 3',
        description: 'Event 3 description',
        date: '2021-10-03',
        location: {
            latitude: 51.505,
            longitude: -0.09,
        },
        image: 'https://via.placeholder.com/150',
        attending: 30,
        price: 20   
    },
    {
        title: 'Event 4',
        description: 'Event 4 description',
        date: '2021-10-04',
        location: {
            latitude: 51.505,
            longitude: -0.09,
        },
        image: 'https://via.placeholder.com/150',
        attending: 40,
        price: 30
    },
    {
        title: 'Event 5',
        description: 'Event 5 description',
        date: '2021-10-05',
        location: {
            latitude: 51.505,
            longitude: -0.09,
        },
        image: 'https://via.placeholder.com/150',
        attending: 50,
        price: 40   
    },
    {
        title: 'Event 6',
        description: 'Event 6 description',
        date: '2021-10-06',
        location: {
            latitude: 51.505,
            longitude: -0.09,
        },
        image: 'https://via.placeholder.com/150',
        attending: 60,
        price: 50
    }

];

const MainPage: React.FC = () => {
    return (
        <div className="main-container">
            <nav className="navbar">
                <div className="nav-item">Evently</div>
                <div className="nav-item">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="nav-item">Item 3</div>
                <div className="nav-item">
                    <button
                        onClick = {() => {
                            console.log('Button clicked');
                        }}
                        >
                        <span>Login</span>
                    </button>
                    <button
                        onClick = {() => {
                            console.log('Button clicked');
                        }}
                        >
                        <span>Register</span>
                    </button>
                </div>
            </nav>
            <div className="content">
                <div className="column column1">Filters</div>
                <div className="column column2">
                    <EventFeed events={events} />
                </div>
                <div className="column mapview">
                    <MapView />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
