import React from 'react';

export default class Select extends React.Component {
  render() {
    return (
      <div className="form-group">
        <select className="form-select">
          {this.props.options.map(option => (
            <option key={option.id}>{option.label}</option>
          ))}
        </select>
      </div>
    );
  }
}
