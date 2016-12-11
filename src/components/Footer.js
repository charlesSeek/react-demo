import React, { Component } from 'react';

class Footer extends Component{
    render(){
        const { textStyle } = styles;
        return(
            <div className="footer">
                <i><p className="footer-title">Made with &hearts; in Melbourne</p></i>
                <i><p className="footer-title">&copy; 2015 Broccoli & CO. All rights reserved.</p></i>
            </div>
        )
    }
}
const styles = {
    textStyle:{
        fontFamily:'monospace',
        marginBottom:'1%',
        textAlign:'center'
    }
}
export default Footer;