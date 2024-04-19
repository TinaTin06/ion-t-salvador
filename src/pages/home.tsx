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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
