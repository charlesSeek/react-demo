import React,{ Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { title } = this.props;
        return(
            <div className="header">
                <img 
                    src="../images/logo.png"
                    className="header-logo"
                />
                <p className="header-title">{title}</p>
            </div>
        )
    }
}
export default Header;