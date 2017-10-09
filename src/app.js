import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import Config from 'react-native-config';
import PushNotification from 'react-native-push-notification';
import initializeStore from 'src/core';
import { initializeNavigation } from 'src/navigation';
import { scenes } from './scenes';
import { clientReducers } from './reducers';
import { clientSagas } from './sagas';
import { tabs, devTabs } from './tabs';

PushNotification.configure({});

const { DEV_MENU } = Config;

export const store = initializeStore({
  storage: AsyncStorage,
  whitelist: [''],
  clientMiddlewares: [],
  clientSagas,
  clientReducers,
});

initializeNavigation(scenes, store, Provider, {
  tabs: DEV_MENU ? devTabs : tabs,
  tabsStyle: {
    tabBarSelectedButtonColor: '#FFFFFF',
    tabBarBackgroundColor: '#242424',
    tabBarTranslucent: false,
  },
})
