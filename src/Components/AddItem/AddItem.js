import React, {Component} from 'react';
import './AddItem.css'
class AddItem extends Component{
    state={
        name:'',
        age:''
    }
    handelChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handelSubmit=(e)=>{
        e.preventDefault();
        if (e.target.name.value ==='') {
            return false
        }else
        this.props.addItem(this.state)
        this.setState({
            name:'',
            age:''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handelSubmit}>
                    <input type="text" placeholder="Enter you Name..." id="name" onChange={this.handelChange} value={this.state.name}/>
                    <input type="number" placeholder="Enter you Age..." id="age" onChange={this.handelChange} value={this.state.age}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}
export default AddItem;