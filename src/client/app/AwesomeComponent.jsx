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
      <div>
        <div>
          Likes : <span>{this.state.likesCount}</span>
          <div>
          <button onClick={this.onLike}>Like Me</button>
          </div>
        </div>
        <div>
            user is : {this.props.userSelected}
        </div>
        <button onClick={()=> this.props.selectUser('cip')}>Change user</button>
        <div>
            some text is : {this.props.someText}
        </div>
        <input type="text" onChange={this.changeText } />
        <button onClick={()=> this.props.tryMM(this.state.randomMessage)}>Change user</button>
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