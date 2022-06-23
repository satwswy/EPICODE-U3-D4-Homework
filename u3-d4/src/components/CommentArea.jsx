import React, { Component } from 'react'
import AddComment from './AddComment'
import CommentList from './CommentList'

export default class CommentArea extends Component {
    state = {
        comments:[]
    }

    componentDidMount = () => {
        //fetch the comments

        //after fetching put them into the state
    }

  render() {
    return (
      <div>
        {/* Pass down the comments array from state to comment list and pass down the asin from props to addComment */}
        <CommentList />
      <AddComment />
      </div>
    )
  }
}
