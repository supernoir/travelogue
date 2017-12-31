import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LocaleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.triggerSelectionChange = this.triggerSelectionChange.bind(this);
  }

  triggerSelectionChange(event) {
    let eventValue = event.target.value;
    let { dispatch } = this.props;
    let action = actions.saveLocaleChange(eventValue);
    dispatch(action);
  }

  render() {
    return (
      <div className="form-group">
        <select className="form-select" onChange={this.triggerSelectionChange}>
          {this.props.options.map(option => (
            <option key={option.id} value={option.val}>{option.label}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default connect()(LocaleSelect);
