import React, { Component } from 'react'

class Details extends Component {

  async componentDidMount(){
      const {id} = this.props.match.params;
      console.log(this.props.match.params);
  }      

  render() {
    return (
      <div>
        Détails...
      </div>
    )
  }
}

export default Details;
