import React, { useEffect, useRef, useState } from 'react';
import { Event } from '../../types/Event';
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import './EventFeed.css';

interface EventFeedProps {
    events: Partial<Event>[];
}

const EventFeed: React.FC<EventFeedProps> = ({ events }) => {

    // Cache for measuring the height of each row dynamically
    const cache = useRef(
        new CellMeasurerCache({
            fixedWidth: true,  // We only care about dynamic height
            defaultHeight: 300, // Default row height if it can't be measured initially
        })
    );

    const rowRenderer = ({ key, index, style, parent }: any) => {
        const event = events[index];
        return (
            <CellMeasurer
                key={key}
                cache={cache.current}
                parent={parent}
                columnIndex={0}
                rowIndex={index}
            >
                <div key={key} style={style} className="event-item">
                    <img src={event.image} alt={event.title} />
                    <h2>{event.title}</h2>
                    <p>
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                    </p>
                </div>
            </CellMeasurer>
        );
    };

    return (
        <div  className="feed-container">
            <h1>Event Feed</h1>
            <AutoSizer>
                {({ width, height }) => (
                    <List
                        width={width}
                        height={height}
                        deferredMeasurementCache={cache.current} // Use the measurement cache
                        rowHeight={cache.current.rowHeight} // Get the dynamic height from cache
                        rowCount={events.length}
                        rowRenderer={rowRenderer}
                    />
                )}
            </AutoSizer>
        </div>
    );
}

export default EventFeed;
