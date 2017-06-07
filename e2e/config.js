export const IOS_SIM = '1991C14B-9892-44E8-BCEF-EA63F308972E';

export default {
  specs: 'e2e',
  configurations: {
    'ios.sim.release': {
      binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/ReactNativeStarter.app',
      build: 'export RCT_NO_LAUNCH_PACKAGER=true && xcodebuild -project ios/ReactNativeStarter.xcodeproj -scheme ReactNativeStarter -configuration Release -sdk iphonesimulator -derivedDataPath ios/build',
      type: 'ios.simulator',
      name: IOS_SIM,
    },
    'ios.sim.debug': {
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/ReactNativeStarter.app',
      build: 'xcodebuild -project ios/ReactNativeStarter.xcodeproj -scheme ReactNativeStarter -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
      type: 'ios.simulator',
      name: IOS_SIM,
    },
  },
};
