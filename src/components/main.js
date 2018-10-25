import React,{Component} from 'react';
import Sub1 from './sub1';
import Sub2 from './sub2';
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : 0
        }
    }

    changeVal = () =>{
      this.setState({
          value : this.state.value+1
      })
    };

    render(){
        return <div>
            <div>Sub2 value : <Sub2 val={this.state.value} /></div>
            <div><Sub1  setVal={this.changeVal}/></div>
        </div>;
    }
}

export default Main;