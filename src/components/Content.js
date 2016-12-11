import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayRequestModal } from '../actions/index'

class Content extends Component{
    constructor(props){
        super(props);
    }
    onRequestButtonClick(){
        this.props.displayRequestModal();
    }
    render(){
        const { title, description } = this.props;
        const { titleStyle,textStyle,inputStyle } = styles;
        return(
            <div className="content">
                <p className="content-title">{title}</p>
                <p className="content-text">{description}</p>
                <input 
                    type="button" 
                    value="Request an invite" 
                    className="request-button"
                    onClick = {this.onRequestButtonClick.bind(this)}
                />
            </div>
        )
    }
}
const styles = {
    titleStyle:{
        color:'black',
        fontSize:'2em',
        width:'45%',
        textAlign:'center'
    },
    textStyle:{
        fontFamily:'monospace',
        marginBottom:'3%'
    },
    inputStyle:{
        fontFamily:'monospace'
    }
}
function mapStateToProps(state){
    return {isShowRequestModal:state.requestModal.isShowRequestModal}
}
export default connect(mapStateToProps,{displayRequestModal})(Content);