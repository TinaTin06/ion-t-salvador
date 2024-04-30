import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonSearchbar,
} from '@ionic/react';
import { pulseOutline, calculatorOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');

  const goToClickCounter = () => {
    history.push('/click_counter');
  };

  const goToCalculator = () => {
    history.push('/calculator');
  };

  const goToTodolist = () => {
    history.push('/todolist');
  };

  const handleSearch = (e: CustomEvent) => {
    setSearchQuery(e.detail.value);
  };

  const filteredItems = [
    { title: 'Click Counter', icon: pulseOutline, onClick: goToClickCounter },
    { title: 'Calculator', icon: calculatorOutline, onClick: goToCalculator },
    { title: 'Todo List', onClick: goToTodolist },
    // Add other items here...
  ].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
        <hr />
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonSearchbar placeholder="Search" onIonChange={handleSearch} autocapitalize={''}></IonSearchbar>
        <div className="ion-text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <div> {/* Centering content */}
            {filteredItems.map((item, index) => (
              <IonCard key={index} onClick={item.onClick} style={{ width: '350px', cursor: 'pointer' }}>
                <IonCardContent style={{ height: '70px', fontSize: '30px', display: 'flex', alignItems: 'center', padding: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '20%', backgroundColor: 'var(--ion-color-light)', padding: 0 }}>
                    {item.icon && <IonIcon icon={item.icon} slot="start" />}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '80%', backgroundColor: 'var(--ion-color-primary)', color: 'white', padding: 0 }}>
                    {item.title}
                  </div>
                </IonCardContent>
              </IonCard>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
