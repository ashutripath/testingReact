import React, { Component } from 'react'
import { connect } from "react-redux"
import Header from "./components/header"
import Headline from "./components/headline"
import SharedButton from "./components/button"
import ListItem from "./components/listItem"
import { fetchPosts } from "./actions"
import "./app.scss"

const tempArr = [{
  fName: "Jhon",
  lName: "Doe",
  email: "john@gmail.com",
  age: 20,
  onlineStatus: true
}]

class  App extends Component {

  constructor(props) {
    super(props)
    this.fetch = this.fetch.bind(this)
  }

  fetch() {
    this.props.fetchPosts()
  }

  render() {
    const { posts } = this.props

    const configButton = {
      buttonText: 'Fetch Posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App">
            <Header />
            <section className="main">
              <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr}/>
              <SharedButton {...configButton} />
              {!!posts.length && posts.map((post, index) => {
                const { title, body } = post
                const configPost = {
                  title,
                  desc: body
                }
                return (
                    <ListItem key={index} {...configPost} />
                )
              })}
            </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
