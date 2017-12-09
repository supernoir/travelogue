import React from 'react';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="empty">
        <div className="empty-icon">
          <i className="icon icon-people" />
        </div>
        <p className="empty-title h5">You have no new messages</p>
        <p className="empty-subtitle">
          Click the button to start a conversation.
        </p>
        <div className="empty-action">
          <button className="btn btn-primary">Send a message</button>
        </div>
      </div>
    );
  }
}
