import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUser, tryMM} from './actions/index.js';
 

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likesCount : 0,
      randomMessage: null
    };
    this.onLike = this.onLike.bind(this);
    this.changeText = this.changeText.bind(this);
    console.log(this.props, this.state);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }
  changeText(ev){
    console.log(ev.target.value);
    this.setState({
      randomMessage: ev.target.value
    })
  }
  render() {
    return (
      <div className="app"> 
          <div id="header">
           <div id="logo"></div>
           <div id="rest-header"></div> 
          </div>
          <div id="sidebar"></div>
          <div id="main">
            <div id="main1">
              <h3>TRENDING</h3>
              <div></div>
            </div>
            <div id="main2">
                <div className="sub1">Main2</div>
                <div className="sub2">Main2</div>
                <div className="sub3">Main3</div>
            </div>
            <div id="call-to-action">

            </div>
             <div id="footer">
               Copyright 2001-2018 Accenture. All rights reserved. Accenture Confidential. For internal use only.  Terms of Use |  Privacy Statement
             </div>
          </div> 
      </div>   
    );
  }
}

function mapStateToProps(state){ 
   return state
}

function mapDispatchToProps(dispatch){
   return bindActionCreators({selectUser, tryMM}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AwesomeComponent);