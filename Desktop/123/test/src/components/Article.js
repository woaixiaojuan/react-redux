import React from 'react';

export default class extends React.Component {
  render() {
    const {title, content} = this.props;
    return (
      <div className="col-md-4">
        <h2>{title}</h2>
        <p>{content}</p>
        <a className="btn btn-default" href="#"> More Info </a>
      </div>
    );
  }
}

