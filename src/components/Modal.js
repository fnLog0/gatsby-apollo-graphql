import React, { Component } from 'react'

export default class Modal extends Component {
  state = {
    active:false
  }

  toggleModal =()=>{
    const { active }=this.state;
    this.setState({active:!active})
  }

  render() {
    const { children , buttonText}=this.props;
    const { active }=this.state;
    return (
      <div>
        <div className={`modal ${active && 'is-active'}`}>
          <div className="modal-background" />
          <div className="modal-content">
            {children}
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.toggleModal} />
        </div>
        <button className="button is-primary" onClick={this.toggleModal}>{buttonText}</button>
      </div>
    )
  }
}
