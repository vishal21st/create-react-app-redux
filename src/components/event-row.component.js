import React, {Component} from 'react';
import EventComponent from './event.component';
import EventDetailTileComponent from './event-details-tile.component';

class EventRowComponent extends Component  {
  constructor(props) {
    super(props);
    this.handleEventTileClick = this.handleEventTileClick.bind(this);
  }
  
  handleEventTileClick($event, eventId) {
    const {events} = this.props;
    this.props.handleShowTrailer(this.props.index, events[eventId])
  }
  
  render() {
    const { eventIds, events, rowIndexForTrailer, trailerEvent, index } = this.props;
    return (
      <div className="row">
        { index == rowIndexForTrailer && trailerEvent.TrailerURL ? <EventDetailTileComponent event={trailerEvent}/> : ""}
        { eventIds.map((eventId, index) => (<EventComponent key={index} index={index} handleClick={($event) => this.handleEventTileClick($event, eventId)} event={events[eventId]}/>))}
      </div>
    )
  }
};

export default EventRowComponent;