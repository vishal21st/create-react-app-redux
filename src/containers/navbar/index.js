import React, { Component } from 'react'
import DropdownComponent from '../../components/dropdown.component';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  selectLanguage
} from '../../modules/event'

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { languages, selectLanguage, selectedLanguages } = this.props;
    return (
      <nav className="nav">
        <div className="container-fluid clearfix">
          <div className="navbar-header">
            <a> Book My Show </a>
          </div>
          <ul className="pull-right nav-bar">
            <li className="nav-bar__item">
              <DropdownComponent items={languages} selectedItem={selectedLanguages} handleChange={(selectedLanguages) => selectLanguage(selectedLanguages)}></DropdownComponent>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ event }) => ({
  languages: event.languages,
  selectedLanguages: event.selectedLanguages
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectLanguage
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
