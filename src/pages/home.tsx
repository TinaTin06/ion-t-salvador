import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to my Ion-T-Salvador</h1>
            <Bio />
            {/* Other content of the home page goes here */}
        </div>
    );
};

const Bio: React.FC = () => {
    return (
        <div>
            <h2>Bio</h2>
            <p>This is my bio.</p>
        </div>
    );
};

export default Home;