import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import InputForm from '../../components/InputForm'
import NumberList from '../../components/NumberList'
import { handleInputChange, 
  updateDuplicateAndUniqInputsFromText, 
  fetchNumbers,
  addNumbersToArray } from '../../actions/inputFormActions'

class Problem2 extends Component {

  componentDidMount() {
  }

  handleSubmit() {
    let {newUniqNumbers, numberList} = this.props
    this.props.addNumbersToArray({
      newNumbers: newUniqNumbers, 
      oldNumbers: numberList
    })
  }

  render() {
    const { handleKeyUp, inputText, numberList, duplicateNumbers, numbersByValue, isSaving, error } = this.props
    return (
      <div className="container-fluid">
        <div className="push-20 col-md-12">
          <InputForm inputText={inputText} 
            numbers = {duplicateNumbers} 
            handleKeyUp={handleKeyUp}
            handleSubmit={this.handleSubmit.bind(this)}
            isSaving={isSaving}
            error={error}
            />
          <NumberList numbers={numberList} 
            numbersByValue={numbersByValue}/>
        </div>
      </div>
    )
  }
}
  


const mapStateToProps = (state) => {
  return {
    ...state.InputForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleKeyUp: (payload) => {
      return dispatch(handleInputChange(payload))
    },
    updateDuplicateAndUniqInputsFromText: (text) => {
      return dispatch(updateDuplicateAndUniqInputsFromText(text))
    },
    fetchNumbers: () => {
      return dispatch(fetchNumbers())
    },
    addNumbersToArray: (newNumbers, oldNumbers) => {
      return dispatch(addNumbersToArray(newNumbers, oldNumbers))
    }
  }
}
  

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Problem2)
