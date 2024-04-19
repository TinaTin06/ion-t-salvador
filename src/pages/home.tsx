import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardContent,
} from '@ionic/react';
import { pulseOutline, calculatorOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './home.css'; // Styling for the Home component

const Home: React.FC = () => {
<<<<<<< HEAD
  const history = useHistory();

  // Navigate to the Click Counter page
  const goToClickCounter = () => {
    history.push('/click_counter');
  };

  // Navigate to the Calculator page
  const goToCalculator = () => {
    history.push('/calculator');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="ion-text-center">
          <IonCard className="home-card" onClick={goToClickCounter}>
            <IonCardContent className="home-card-content">
              <IonIcon icon={pulseOutline} slot="start" aria-label="Click Counter" />
              Click Counter
            </IonCardContent>
          </IonCard>
  
          <IonCard className="home-card" onClick={goToCalculator}>
            <IonCardContent className="home-card-content">
              <IonIcon icon={calculatorOutline} slot="start" aria-label="Calculator" />
              Calculator
            </IonCardContent>
          </IonCard>
          
          {/* Placeholder cards for future implementation */}
          <IonCard className="home-card">
            <IonCardContent className="home-card-content">
              Future Feature
            </IonCardContent>
          </IonCard>
  
          <IonCard className="home-card">
            <IonCardContent className="home-card-content">
              Future Feature
            </IonCardContent>
          </IonCard>
=======
    return (
        <div>
            <h1>Welcome to my Ion-T-Salvador</h1>
            <Bio />
            <div className="applet-cards">
                <AppletCard title="Applet 1" />
                <AppletCard title="Applet 2" />
                {/* Add more AppletCards for each applet */}
            </div>
>>>>>>> a493b733f3d34d4da05e4d1c4b9674a3bc743c83
        </div>
      </IonContent>
    </IonPage>
  );
};

<<<<<<< HEAD
=======
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

>>>>>>> a493b733f3d34d4da05e4d1c4b9674a3bc743c83
export default Home;
