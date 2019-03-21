import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'


export default class extends Component {
  static async getInitialProps() {
    const res = await fetch('http://localhost:3000/api/listItems')
    const images = await res.json()
    return { images }
  }
  componentWillMount() {
    this.setState({
      images: this.props.images
    })
    console.log(this.props.images)
  }
  render() {
    return (
      <div>
         
      </div>
    )
  }
}
