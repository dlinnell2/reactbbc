import React, { Component } from "react";
import API from "../../utils/api";
import Saved from "../../components/SavedArticles"

class Home extends Component {

    state = {
        articles:[]
    }

    componentDidMount(){
        this.getArticles();
    }

    getArticles = () => {
        API.getArticles()
            .then( (res) => this.setState({
                articles: res
            }));
    }

    render(){
        return (
            <Saved />
        )
    }
}

export default Home;