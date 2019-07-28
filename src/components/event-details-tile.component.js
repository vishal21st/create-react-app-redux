import React from 'react';
import EventDetailComponent from './event-detail.component';
import TrackVisibility from 'react-on-screen';
const EventDetailTileComponent = ({event}) => {
  const { 
    TrailerURL
   } = event;
  const embedUrl = TrailerURL.replace("watch", "embed").replace("?", "/").replace("v=",'');
  return(
    <div className="col-lg-12 col-md-12">
      <div className="event-detail-tile">
        <div className="row">
          <div className="col-md-8 col-sm-8 col-xs-12">
            <div className="media">
              <iframe className="" src={embedUrl}></iframe>
            </div>
            
          </div>
          <div className="col-md-4 col-sm-4  col-xs-12">
            <EventDetailComponent event={event}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetailTileComponent;