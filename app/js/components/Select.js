import React from 'react';

export default class Select extends React.Component {
  constructor() {
    super();
    this.triggerSelectionChange = this.triggerSelectionChange.bind(this);
  }
  triggerSelectionChange(evt) {
    let selected = evt.target.value;
    console.log(selected);
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
