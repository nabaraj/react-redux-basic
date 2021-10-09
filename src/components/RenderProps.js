import React from "react";
export default class ChildComp extends React.Component {
  constructor(props) {
    super(props);
   }
  render() {
      return (<div>
      <h3>render props</h3>
      <div>{this.props.name()}</div>
      </div>)
  }
}

