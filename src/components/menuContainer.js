import { connect } from "react-redux";
import React from "react";
import Main from "./Main";
import { loadMenuThunkCreator } from "../reducers/menu-reducer";

class MiddleMenuComponent extends React.Component {
    componentDidMount() {
        this.props.loadMenuThunkCreator();
    }
    render() {
        return (<Main {...this.props} />)
    }
}

function mapStateToProps(state) {
    return {
        menuPage: state.menuPage,
        stringToFind: state.filterPage.postToFind,
        filter: state.filterPage.filter
    };
}

const MenuContainer = connect(mapStateToProps, { loadMenuThunkCreator })(MiddleMenuComponent)

export default MenuContainer;