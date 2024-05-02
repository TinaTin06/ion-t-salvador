import React, { useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonSearchbar,
  IonAlert,
  IonActionSheet,
  IonAvatar,
  IonThumbnail
} from '@ionic/react';

//Dynamic data reference


const QuotesGenerator: React.FC = () => {


  
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Quote Generator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Quote Generator</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>

          {/*Button Trigger*/}
          <IonGrid>
            <IonRow>
                <IonCol size="" push="">
                <IonButton id="present-alert" color="primary" expand="full" onClick={handleOpenAlert}>Click me</IonButton> 
                <IonAlert
                  isOpen={showAlert}
                  onDidDismiss={handleAlertDismiss} // Call the handleAlertDismiss function when the alert is closed
                  header="ArysArts"
                  subHeader=""
                  message={renderRandomMessage()}
                  buttons={['Close']}
                />
                </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>  
      </IonContent>
    </IonPage>
  );
};

export default  QuotesGenerator;