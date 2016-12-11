import React , { Component } from 'react';
import { connect } from 'react-redux';
import { 
    displayRequestModal,
    userPost,
    hiddenRequestModal,
    fetchErrorMessage,
    fetchButtonText
} from '../actions';
import Modal from 'react-modal';

class RequestModal extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
         this.state = {
            name:"",
            email:"",
            confirmEmail:"",
            nameInputStyle:styles.inputStyle,
            emailInputStyle:styles.inputStyle,
            confirmEmailInputStyle:styles.inputStyle
        }
    }
    fieldsValidation(){
        let { name,email,confirmEmail } = this.state;
        if (name.length < 3){
            const nameInputStyle = this.state.nameInputStyle;
            const newNameInputStyle = Object.assign({},nameInputStyle,{border:'1px solid red'})
            this.setState({nameInputStyle:newNameInputStyle});
            this.props.fetchErrorMessage('the name length is shorter than 3')
            return false;
        }
        const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!reg.test(email)){
			const emailInputStyle = this.state.emailInputStyle;
            const newEmailInputStyle = Object.assign({},emailInputStyle,{border:'1px solid red'})
            this.setState({emailInputStyle:newEmailInputStyle});
            this.props.fetchErrorMessage('it is not a valid email')
            return false;
		}
        if (email!==confirmEmail){
            const confirmEmailInputStyle = this.state.confirmEmailInputStyle;
            const newConfirmEmailInputStyle = Object.assign({},confirmEmailInputStyle,{border:'1px solid red'})
            this.setState({confirmEmailInputStyle:newConfirmEmailInputStyle});
            this.props.fetchErrorMessage('it is not match with email field')
            return false
        }
        return true;
    }
    onNameChange(event){
        const nameInputStyle = this.state.nameInputStyle;
        const newNameInputStyle = Object.assign({},nameInputStyle,{border:'1px solid black'})
        this.setState({nameInputStyle:newNameInputStyle});
        this.props.fetchErrorMessage('');
        const name = event.target.value;
        this.setState({name})
    }
    onEmailChange(event){
        const emailInputStyle = this.state.emailInputStyle;
        const newEmailInputStyle = Object.assign({},emailInputStyle,{border:'1px solid black'})
        this.setState({emailInputStyle:newEmailInputStyle});
        this.props.fetchErrorMessage('');
        const email = event.target.value;
        this.setState({email})
    }
    onConfirmEmailChange(event){
        const confirmEmailInputStyle = this.state.confirmEmailInputStyle;
        const newConfirmEmailInputStyle = Object.assign({},confirmEmailInputStyle,{border:'1px solid black'})
        this.setState({confirmEmailInputStyle:newConfirmEmailInputStyle});
        this.props.fetchErrorMessage('');
        const confirmEmail = event.target.value;
        this.setState({confirmEmail});
    }
    onUserSubmit(){
        if (this.fieldsValidation()){
            const { text,disabled } = this.props.buttonText;
            this.props.fetchButtonText('Sending, please wait...','disabled');
            const { name,email} = this.state;
            const user = {name,email};
            this.props.userPost(user);
        }
    }
    closeModal(){
        this.props.hiddenRequestModal();
    }
    render(){
        const { customModalStyle } = styles; 
        const { name,email,confirmEmail,nameInputStyle,emailInputStyle,confirmEmailInputStyle } = this.state;
        return(
            <Modal
                isOpen={this.props.requestModal.isShowRequestModal}
                onRequestClose={this.closeModal.bind(this)}
                style = { customModalStyle }
                contentLabel = "Modal"
            >
                <div className="request-modal">
                    <div className="request-modal-title">
                        <i><p className="request-title">Request an invite</p></i>
                        <hr className="request-hr"/>
                    </div>
                    <div className="request-modal-content">
                        <input 
                            className="request-modal-input"
                            type="text"
                            placeholder="Full Name" 
                            value = {name}
                            onChange = {this.onNameChange.bind(this)}
                        />
                        <input
                            className="request-modal-input"
                            type="text" 
                            placeholder="Email" 
                            value = {email}
                            onChange = {this.onEmailChange.bind(this)}
                        />
                        <input
                            className="request-modal-input"
                            type="text" 
                            placeholder="Confirm Email" 
                            value = {confirmEmail}
                            onChange = {this.onConfirmEmailChange.bind(this)}
                        />
                    </div>
                    <div className="request-modal-button">
                        <input 
                            className="submit-button"
                            type="submit" 
                            value={this.props.buttonText.text} 
                            onClick = {this.onUserSubmit.bind(this)}
                            disabled={this.props.buttonText.status}
                        />
                    </div>
                    <div className="request-modal-error">
                        <p className="error-message">{this.props.errorMessage.message}</p>
                    </div>
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
export default connect(mapStateToProps,{userPost,displayRequestModal,hiddenRequestModal,fetchErrorMessage,fetchButtonText})(RequestModal);