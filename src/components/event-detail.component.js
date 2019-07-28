import React from 'react';

const EventDetailComponent = ({event}) => {
  const {
    EventName,
    EventLanguage,
    EventGenre,
    totalVotes,
    wtsPerc,
   } = event;

  return (
    <div className="event-details">
      <h4 className="event-details__header">
        {EventName}
      </h4>
      <p className="event-details__language">{EventLanguage}</p>
      <div className="event-genere">
      {EventGenre.split('|').map((genre, index) => <span key={index}className="genre-pill">{genre}</span>)}
      </div>
      
      <div className="event-details__secondary-details">
        <div className="event-details__secondary-detail">
          <div className="secondary-detail__left">
            <i className="fa fa-thumbs-up"></i>
          </div>
          <div className="secondary-detail__right">
            <div className="perc">
              {wtsPerc}%
            </div>
            <div className="votes">
              {totalVotes} votes
            </div>
          </div>
        </div>
        <div className="event-details__secondary-detail">
          <div className="secondary-detail__left">
            <i className="fa fa-calendar"></i>
          </div>
          <div className="secondary-detail__right">
            <div className="perc">
              {wtsPerc}%
            </div>
            <div className="votes">
              {totalVotes} votes
            </div>
          </div>
        </div>
      </div>
      <p className="event-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
      <div className="event-detail-footer">
        <div className="event-detail__footer-action --green">
          <div className="action-icon">
            <i className="fa fa-thumbs-up"></i>
          </div>
          <div className="action-text">Will Watch</div>
          <div className="action-count">0</div>
        </div>
        <div className="event-detail__footer-action --orange">
          <div className="action-icon">
            <i className="fa fa-thumbs-up"></i>
          </div>
          <div className="action-text">Maybe</div>
          <div className="action-count">0</div>
        </div>
        <div className="event-detail__footer-action --red">
          <div className="action-icon">
            <i className="fa fa-thumbs-down"></i>
          </div>
          <div className="action-text">Wont Watch</div>
          <div className="action-count">0</div>
        </div>
      </div>
    </div>
  )
}

export default EventDetailComponent;