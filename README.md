# React Native starter
| **Build**  | **Status**  |
|---|---|
| **Circle CI**  | [![CircleCI](https://circleci.com/gh/rangle/react-native-starter/tree/dev.svg?style=svg)](https://circleci.com/gh/rangle/react-native-starter/tree/dev)  |
| **iOS**  | [![IOS Build](https://dashboard.buddybuild.com/api/statusImage?appID=5911ec83fa14870001a3c3ce&branch=dev&build=latest)](https://dashboard.buddybuild.com/apps/5911ec83fa14870001a3c3ce/build/latest?branch=dev) |
| **Android**  | [![Android Build](https://dashboard.buddybuild.com/api/statusImage?appID=5911ee89fbf04f00014c0874&branch=dev&build=latest)](https://dashboard.buddybuild.com/apps/5911ee89fbf04f00014c0874/build/latest?branch=dev)|

### Getting detox to run
```
brew tap facebook/fb
export CODE_SIGNING_REQUIRED=NO && brew install fbsimctl --HEAD
```
Then run:
```
yarn e2e
```
