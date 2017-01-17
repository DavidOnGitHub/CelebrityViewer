import React from 'react';
import {connect} from 'react-redux';

class Header extends React.Component {
    render() {
        const {mainTitle, secondTitle, description, reference} = this.props;
        return (
            <div>
                <div className="page-title-1">
                    {mainTitle}
                </div>
                <div className="page-title-2">
                    {secondTitle}
                </div>
                <div className="description">
                    {description}
                </div>
                <div className="reference-link">
                    reference: <a href={reference}>{reference}</a>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        mainTitle: state.message.mainTitle,
        secondTitle: state.message.secondTitle,
        description: state.message.description,
        reference: state.message.reference
    })
)(Header);