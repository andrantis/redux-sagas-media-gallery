import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
    return (
        <div className="jumbotron center">
            <h1 className="lead">Welcome to Media Library built with React, Redux and Redux-Saga</h1>
            <div>
                <Link to="library">
                    <button type="button" className="btn btn-lg btn-primary">Visit Library</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
