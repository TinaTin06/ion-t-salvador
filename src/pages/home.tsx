import {
    // Initial Components
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
} from '@ionic/react';

// CSS
//import './profile.css';

const Home: React.FC = () => {
return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Home</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Home</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonContent>
    </IonPage>
);
};

import React from 'react';
const Bio: React.FC = () => {
    return (
        <div>
            <h2>Bio</h2>
            <p>This is my bio.</p>
        </div>
    );
};
const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to my Ion-T-Salvador</h1>
            <Bio />
            {/* Other content of the home page goes here */}
        </div>
    );
};

//
export default Home;