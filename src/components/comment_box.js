import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class CommentBox extends Component {
  constructor(props){
    super(props);
    this.state = {comment:''};
  }
  onCommentChange(event){
    this.setState({comment:event.target.value});
  }

  onCommentSubmit(event){
    event.preventDefault();
      this.props.saveComment(this.state.comment);
      this.setState({comment:''});
  }

  render() {
    return (
      <form onSubmit={this.onCommentSubmit.bind(this)} className="comment-box">
        <h4> Please add comment </h4>
        <textarea value={this.state.comment} onChange={this.onCommentChange.bind(this)} />
        <div> <button action="submit" className="btn btn-success">Submit</button> </div>
      </form>
    );
  }
}

export default connect(null,actions) (CommentBox);
