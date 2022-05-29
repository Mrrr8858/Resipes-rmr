import { connect } from "react-redux";
import React, { useEffect } from "react";
import { loadDetailThunkCreator } from "../reducers/details-reducer";
import Details from "./Details";
import { useParams } from "react-router-dom"

function MiddleDetailComponent(props) {
    const params = useParams();
    const prodId = params.id;

    useEffect(() => {
        props.loadDetailThunkCreator(prodId);
    });
    return (<Details {...props} />);
}

function mapStateToProps(state) {
    return { detailsPage: state.detailsPage };
}

const DetailContainer = connect(mapStateToProps, { loadDetailThunkCreator })(MiddleDetailComponent)

export default DetailContainer;