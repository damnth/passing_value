import React,{Component} from 'react';

class Sub1 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            Sub1 : <button onClick={()=>{this.props.setVal()}}>Click here to change Sub2 page.</button>
        </div>;
    }
}

export default Sub1;