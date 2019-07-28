import React, {Component} from 'react';

const DropdownItem = (props) => {
  const { handleChange, index, item } = props;
  return (
    <li key={index}>
      <input onClick={(event) => handleChange(event, item)} type="checkbox"></input>
      {item}
    </li>
  )
}

class DropdownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false}

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({isOpen: false})
    }
  }
  
  handleDropdownSelect(event, item) {
    const isChecked = event.target.checked;
    let { selectedItem, handleChange } = this.props;
    if (isChecked) {
      selectedItem = [...selectedItem, item];
    } else {
      selectedItem = selectedItem.filter((lan) => lan != item)
    }
    handleChange(selectedItem)
  }

  renderPlaceholder(selectedItem) {
    let placeholderText = "Choose Language";
    if (selectedItem.length > 0) {
      if (selectedItem.length > 2) {
        placeholderText = `${selectedItem[0]},${selectedItem[1]}..`
      } else {
        placeholderText = selectedItem.join(',');
      }
    }
    return placeholderText
  }

  render() {
    const { items, selectedItem } = this.props;
    const {isOpen} = this.state;
    return (
      <div className={`dropdown ${isOpen ? 'open' : ''}`} ref={this.setWrapperRef}>
        <button onClick={() => { this.setState({isOpen: !this.state.isOpen})}} className="btn --inverted btn-primary">
          {this.renderPlaceholder(selectedItem)}
        </button>
        <ul className="dropdown-menu">
          {items.map((item, index) => (<DropdownItem key={index} index={index} handleChange={(event, index) => this.handleDropdownSelect(event, index)} item={item}></DropdownItem>))}
        </ul>
      </div>
    )
  }
}

export default DropdownComponent;