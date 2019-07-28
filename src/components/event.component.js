import React from 'react';
const EventComponent = (props) => {
  const {event, handleClick} = props;
  const {EventImageCode, EventName} = event;
  
  return (
    <div className="col-xs-6 col-sm-4 col-md-2 col-lg-2">
      <div className="event-tile" onClick={($event) => handleClick($event, event)}>
        <div className="event-tile__image-overlay" style={{backgroundImage: `url(https://in.bmscdn.com/events/moviecard/${EventImageCode}.jpg)`}}>
          <div className="icon-play"></div>
        </div>
        <p className="event-name">
          {EventName}
        </p>
      </div>
    </div>
  )
}

export default EventComponent