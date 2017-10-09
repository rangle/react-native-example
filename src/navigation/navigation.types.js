// @flow

const INIT = 'NAVIGATION/INIT';
const TRACK = 'NAVIGATION/TRACK';
const PUSH = 'NAVIGATION/PUSH';
const POP = 'NAVIGATION/POP';
const POP_TO_ROOT = 'NAVIGATION/POP_TO_ROOT';
const RESET_TO = 'NAVIGATION/RESET_TO';
const SHOW_MODAL = 'NAVIGATION/SHOW_MODAL';
const DISMISS_MODAL = 'NAVIGATION/DISMISS_MODAL';
const DISMISS_ALL_MODALS = 'NAVIGATION/DISMISS_ALL_MODALS';
const SHOW_LIGHTBOX = 'NAVIGATION/SHOW_LIGHTBOX';
const DISMISS_LIGHTBOX = 'NAVIGATION/DISMISS_LIGHTBOX';
const SWITCH_TO_TAB = 'NAVIGATION/SWITCH_TO_TAB';
const HANDLE_DEEP_LINK = 'NAVIGATION/HANDLE_DEEP_LINK';
const TOGGLE_NAV_BAR = 'NAVIGATION/TOGGLE_NAV_BAR';
const TOGGLE_TABS = 'NAVIGATION/TOGGLE_TABS';
const SET_TITLE = 'NAVIGATION/SET_TITLE';
const SET_SUB_TITLE = 'NAVIGATION/SET_SUB_TITLE';
const SET_ON_NAVIGATION_EVENT = 'NAVIGATION/SET_ON_NAVIGATION_EVENT';

export const NAVIGATION = {
  INIT,
  TRACK,
  PUSH,
  POP,
  POP_TO_ROOT,
  RESET_TO,
  SHOW_MODAL,
  DISMISS_MODAL,
  DISMISS_ALL_MODALS,
  SHOW_LIGHTBOX,
  DISMISS_LIGHTBOX,
  SWITCH_TO_TAB,
  HANDLE_DEEP_LINK,
  TOGGLE_NAV_BAR,
  TOGGLE_TABS,
  SET_TITLE,
  SET_SUB_TITLE,
  SET_ON_NAVIGATION_EVENT,
};

export type Options = {
  tabs?: Array<Tab>,
  screen?: {
    screen: string,
    title: string,
    navigatorStyle?: Object,
    navigatorButtons?: Object,
  },
  drawer?: {
    left?: {
      screen: string,
      passProps?: Object,
    },
    right?: {
      screen: string,
      passProps?: Object,
    },
    disableOpenGesture?: boolean,
  },
  passProps?: Object,
  animationType?: string,
};

declare type Tab = {
  label?: string,
  screen: string,
  icon: any,
  selectedIcon?: any,
  iconInsets?: {
    top?: number,
    left?: number,
    bottom?: number,
    right?: number,
  },
  title?: string,
  navigatorStyle?: Object,
  navigatorButtons?: Object,
};

export type SetNavigatorAction = {
  payload: {
    navigator: any,
  },
};
export type NavigationAction = {
  type: typeof NAVIGATION.TRACK,
  payload: { id: string, visible: boolean },
};

type EventTypes =
  | typeof INIT
  | typeof TRACK
  | typeof PUSH
  | typeof POP
  | typeof POP_TO_ROOT
  | typeof RESET_TO
  | typeof SHOW_MODAL
  | typeof DISMISS_MODAL
  | typeof DISMISS_ALL_MODALS
  | typeof SHOW_LIGHTBOX
  | typeof DISMISS_LIGHTBOX
  | typeof SWITCH_TO_TAB
  | typeof HANDLE_DEEP_LINK
  | typeof TOGGLE_NAV_BAR
  | typeof TOGGLE_TABS
  | typeof SET_TITLE
  | typeof SET_SUB_TITLE
  | typeof SET_ON_NAVIGATION_EVENT;

type NavigationEventPayload = {
  method: string,
  params: any,
};

export type NavigationEvent = Action<EventTypes, NavigationEventPayload, any>;

export type NavigationState = {
  previousID: string,
  currentID: string,
};
