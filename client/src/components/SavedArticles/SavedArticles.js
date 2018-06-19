import React, { Component } from "react";
import SaveBtn from '../SaveBtn'

const SavedArticles = (props) => (
    <div className="container">
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-10">
                        <a href={props.link}><h3 className="card-title">{props.headline}</h3></a>
                        <p>{props.snippet}</p>
                    </div>
                    <div className="col-sm-2 text-center">
                        <SaveBtn />
                    </div>
                </div>
            </div>
        </div>

    </div>
)

export default SavedArticles;