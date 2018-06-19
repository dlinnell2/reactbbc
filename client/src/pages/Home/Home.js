import React, { Component } from "react";
import API from "../../utils/api";
import Saved from "../../components/SavedArticles"

class Home extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        this.getArticles();
    }

    getArticles = () => {
        API.getArticles()
            .then((res) => {this.setState({
                articles: res.data.response.docs
            })
            console.log(this.state.articles);
        }
        );
    }

    render() {
        return (
            this.state.articles.map((article) =>
            <Saved 
            headline={article.headline.main} 
            snippet={article.snippet} 
            link={article.web_url}/>
            )
        )
    }
}

export default Home;