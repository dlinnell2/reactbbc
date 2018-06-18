import React, { Component } from "react";
import API from "../../utils/api";

class Home extends Component {

    componentDidMount(){
        this.getArticles;
    }

    getArticles = () => {
        API.getArticles()
            .then( (res) => console.log(res));
    }
}