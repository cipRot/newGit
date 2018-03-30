import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUser} from './actions/index.js';
 

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likesCount : 0
    };
    this.onLike = this.onLike.bind(this);
    console.log(this.props, this.state);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
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
            user is : {this.state.user}
        </div>
        <button onClick={()=>selectUser('cip')}>Change user</button>
      </div>  
    );
  }
}

function mapStateToProps(state){ 
   return {
    user: state.userSelected
   }
}

function mapDispatchToProps(dispatch){
   return bindActionCreators({userSelected}, dispatch);
}

export default connect(mapStateToProps)(AwesomeComponent);