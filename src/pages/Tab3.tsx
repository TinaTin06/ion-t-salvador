import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonInput, IonIcon } from '@ionic/react';
import { eye, eyeOff } from 'ionicons/icons';
import './Tab3.css';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [isCalculatorVisible, setIsCalculatorVisible] = useState<boolean>(true);

  const handleInput = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const toggleCalculatorVisibility = () => {
    setIsCalculatorVisible(!isCalculatorVisible);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
          <IonButton slot="end" onClick={toggleCalculatorVisibility}>
            <IonIcon icon={isCalculatorVisible ? eyeOff : eye} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className={`ion-padding ${isCalculatorVisible ? '' : 'hidden'}`}>
        {isCalculatorVisible && (
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <IonInput style={{ fontSize: '50px' }} value={input} readonly={true} className="ion-text-right" />
              </IonCol>
            </IonRow>
            {/* Buttons for calculator operations */}
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Calculator;