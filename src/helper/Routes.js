import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, withRouter } from 'react-router-dom';
import HomePage from '../pages/Homepage';

const Routes = () => {
  return (
    <IonReactRouter>
    <IonRouterOutlet>
      <Route path="/" component={HomePage} exact />
    </IonRouterOutlet>
  </IonReactRouter>
  );
};

export default withRouter(Routes);
