import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor() {
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    }
  }

  // updateColor

  // updateSize

  // updateFamily

  // updateEditStatus
  updateStuff=(prop, val) =>{
    this.setState({
      [prop]: val
    })
  }

  render() {
    const {allowEdit,fontColor,fontFamily,fontSize} = this.state;
    return (
      <div>
        <div className="headerBar">
          { < EditToggle update={this.updateStuff}/>}
          { < ColorChanger allowEdit={allowEdit} update={this.updateStuff}/>}
          { < SizeChanger allowEdit={allowEdit} update={this.updateStuff}/>}
          { < FamilyChanger allowEdit={allowEdit} update={this.updateStuff}/>}
        </div>
        <div className="textArea">
          { < TextContainer color={fontColor} fontFamily={fontFamily} fontSize={fontSize}/>}
        </div>
      </div>
    )
  }
}

export default App;
