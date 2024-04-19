import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  calculatorOutline,
  fingerPrintOutline,
  personCircleOutline,
  homeOutline,
  eyeOutline,
  eyeOffOutline
} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Home from './pages/home';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const [isTabHidden, setIsTabHidden] = useState(false);

  const toggleTabVisibility = () => {
    setIsTabHidden(!isTabHidden);
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/tab1" component={Tab1} exact />
            {!isTabHidden && <Route path="/tab2" component={Tab2} exact />}
            <Route path="/tab3" component={Tab3} exact />
            <Route path="/home" component={Home} exact />
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={personCircleOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
            {!isTabHidden && (
              <IonTabButton tab="tab2" href="/tab2">
                <IonIcon icon={fingerPrintOutline} />
                <IonLabel>Click Counter</IonLabel>
              </IonTabButton>
            )}
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={calculatorOutline} />
              <IonLabel>Calculator</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton onClick={toggleTabVisibility}>
              <IonIcon icon={isTabHidden ? eyeOutline : eyeOffOutline} />
              <IonLabel>{isTabHidden ? 'Show Tab' : 'Hide Tab'}</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
