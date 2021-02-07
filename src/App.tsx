import { IonApp } from '@ionic/react';
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./helper/Routes";
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <Router>
      <Routes />
    </Router>
  </IonApp>
);

export default App;
