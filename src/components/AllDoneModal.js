import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { hiddenAllDoneModal } from '../actions'

class AllDoneModal extends Component{
    constructor(props){
        super(props)
    }
    onClickButton(){
        this.props.hiddenAllDoneModal();
    }
    render(){
        const { customModalStyle } = styles;
        const { isShowAllDoneModal } = this.props.allDoneModal;
        return(
            <Modal
                isOpen={isShowAllDoneModal}
                style={customModalStyle}
                contentLabel = "modal"
            >
                <div className="alldone-modal">
                    <div className="alldone-modal-header">
                        <i><p className="alldone-modal-title">All Done!</p></i>
                        <hr className="alldone-modal-hr"/>
                    </div>
                    <p className="alldone-modal-text">You will be one of the first to experience Broccoli & Co. when we launch.</p>
                    <input 
                        className="alldone-modal-button"
                        type="button" 
                        value="OK" 
                        onClick = {this.onClickButton.bind(this)}
                    />
                </div>
            </Modal>
        )
    }
}
const styles = {
    customModalStyle:{
        overlay:{
            position:'absolute',
            top:0,
            left:0,
            right:0,
            bottom:0,
            backgroundColor: 'rgba(0,0,0,0.75)'
        },
        content:{
            position:'absolute',
            top:'10%',
            bottom:'10%',
            left:'20%',
            right:'20%',
            border:'1px solid black',
            borderRadius:'2px'
        }
    }
}
function mapStateToProps(state){
    return {...state};
}
export default connect(mapStateToProps,{hiddenAllDoneModal})(AllDoneModal);