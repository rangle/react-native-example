export const serverConfig = process.env.NODE_ENV === 'e2eSauce' ? {
  host: 'ondemand.saucelabs.com',
  port: 80,
  auth: `${process.env.SAUCE_USERNAME}:${process.env.SAUCE_ACCESS_KEY}`,
} : {
  host: 'localhost',
  port: 4723,
};

export const app = process.env.NODE_ENV === 'e2eSauce' ?
  'sauce-storage:ReactNativeMobilePOC.zip' :
  'ios/build/Build/Products/Debug-iphonesimulator/ReactNativeMobilePOC.app';
