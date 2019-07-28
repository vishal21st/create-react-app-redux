import React, {Component} from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import EventRow from '../../components/event-row.component';
import NavBar from '../../containers/navbar';
import {
  updateState,
  showTrailer
} from '../../modules/event'


class Home extends Component {
  constructor(props) {
    super(props);
    props.updateState();
  }

  chunk(target, size) {
    return target.reduce((memo, value, index) => {
      if (index % (target.length / size) == 0 && index !== 0) memo.push([])
      memo[memo.length - 1].push(value)
      return memo
    }, [[]])
  }


  filterdEvents() {
    const { events, selectedLanguages} = this.props;
    if (selectedLanguages.length == 0) return Object.keys(events);
    return Object.keys(events).filter((eventId) => (selectedLanguages.includes(events[eventId].EventLanguage)))
  }

  renderEventRows() {
    const { events, showTrailer, rowIndexForTrailer, trailerEvent} = this.props;
    const keys = this.filterdEvents();
    const chunkSize = keys.length / 6;
    const splittedArrOfEvents = this.chunk(keys, chunkSize)
    return splittedArrOfEvents.map((eventIds, index) => <EventRow key={index} index={index} rowIndexForTrailer={rowIndexForTrailer} trailerEvent={trailerEvent} handleShowTrailer={(index, event) => showTrailer(index, event)} eventIds={eventIds} events={events}/>)
  }

  render() {
    const {languages} = this.props;
    this.renderEventRows()
    return(
      <div className="app trailer-app">
        <NavBar></NavBar>  
        <div className="home container-fluid">
          <div>
            {this.renderEventRows()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ event }) => ({
  ...event
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateState,
      showTrailer,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
