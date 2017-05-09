jest.mock('Linking', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  openURL: jest.fn(),
  canOpenURL: jest.fn(),
  getInitialURL: jest.fn(),
}));

jest.mock('NativeEventEmitter', () => class NativeEventEmitter {});

jest.mock('react-native-push-notification', () => ({
  configure: () => {},
  localNotificationSchedule: (message, date) => message + date,
}));

jest.mock('react-native-push-notification', () => ({
  configure: () => {},
  localNotificationSchedule: (message, date) => message + date,
}));

Date.now = jest.fn(() => 1491317221168);
