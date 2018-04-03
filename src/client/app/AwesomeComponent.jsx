import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUser, tryMM} from './actions/index.js';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.less';
 

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likesCount : 0,
      randomMessage: null,
      selectedOption: '',
    };
    this.onLike = this.onLike.bind(this);
    this.changeText = this.changeText.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
 
 
  handleChange(selectedOption) {
    this.setState({ selectedOption });
    console.log(selectedOption ?  selectedOption.label : "No value");
  }

  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value; 
    return (
        <div className="app"> 
             
            <header id="header">
                <div id="logo"></div>
                <div id="rest-header"></div> 
            </header>
            <aside id="sidebar"></aside>
            <content id="main">
                <div id="main1">
                    <h3>TRENDING</h3>
                    <div>
                        <Select
                            name="form-field-name"
                            value={value}
                            onChange={this.handleChange}
                            options={[
                                { value: 'one', label: 'One' },
                                { value: 'two', label: 'Two' },
                            ]}
                        />
                    </div>
                </div>
                <div id="main2">
                    <div className="sub1">
                        <Tabs>
                            <TabList>
                              <Tab>Title 1</Tab>
                              <Tab>Title 2</Tab>
                            </TabList>

                            <TabPanel>
                              <h2>Any content 1</h2>
                            </TabPanel>
                            <TabPanel>
                              <h2>Any content 2</h2>
                            </TabPanel>
                        </Tabs>
                    </div>
                    <div className="sub2">Main2</div>
                    <div className="sub3">Main3</div>
                </div>
                <div id="call-to-action"> 
                </div>
                <footer id="footer">
                   ttes
                </footer>
            </content> 
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