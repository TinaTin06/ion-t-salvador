import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to my Ion-T-Salvador</h1>
            <Bio />
            <div className="applet-cards">
                <AppletCard title="Applet 1" />
                <AppletCard title="Applet 2" />
                {/* Add more AppletCards for each applet */}
            </div>
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

interface AppletCardProps {
    title: string;
}

const AppletCard: React.FC<AppletCardProps> = ({ title }) => {
    return (
        <div className="applet-card">
            <h2>{title}</h2>
            {/* Add content specific to each applet */}
        </div>
    );
};

export default Home;
