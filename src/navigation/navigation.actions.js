// @flow
import { createAction } from 'src/core/utils/action-helper';
import { NAVIGATION } from './navigation.types';
import type { NavigationEvent } from './navigation.types';

export const populateNavigator = (navigator: any) => createAction(NAVIGATION.INIT, { navigator });

export const onTrack = (id: string, visible: boolean, meta: any) =>
  createAction(NAVIGATION.TRACK, { id, visible, meta });

export const pushScene = (screen: string, meta: any = {}): NavigationEvent => {
  const { params = {}, ...rest } = meta;
  return createAction(NAVIGATION.PUSH, {
    method: 'push',
    params: { screen, ...params },
    ...rest,
  });
};

export const popScene = (screen: string, meta: any = {}): NavigationEvent => {
  const { params = {}, ...rest } = meta;
  return createAction(NAVIGATION.POP, {
    method: 'pop',
    params: { screen, ...params },
    ...rest,
  });
};

export const popToRootScene = (meta: any): NavigationEvent =>
  createAction(NAVIGATION.POP_TO_ROOT, {
    method: 'popToRoot',
    ...meta,
  });

export const resetToScene = (screen: string, meta: any = {}): NavigationEvent => {
  const { params = {}, ...rest } = meta;
  return createAction(NAVIGATION.RESET_TO, {
    method: 'resetTo',
    params: { screen, ...params },
    ...rest,
  });
};

export const showModal = (meta: any) =>
  createAction(NAVIGATION.SHOW_MODAL, {
    method: 'showModal',
    params: { ...meta },
  });

export const dismissModal = (meta: any) =>
  createAction(NAVIGATION.DISMISS_MODAL, {
    method: 'dismissModal',
    params: { ...meta },
  });

export const dismissAllModals = (meta: any) =>
  createAction(NAVIGATION.DISMISS_ALL_MODALS, {
    method: 'dismissAllModals',
    ...meta,
  });

export const showLightBox = (meta: any) =>
  createAction(NAVIGATION.SHOW_LIGHTBOX, {
    method: 'showLightBox',
    params: { ...meta },
  });

export const dismissLightBox = (meta: any) =>
  createAction(NAVIGATION.DISMISS_LIGHTBOX, {
    method: 'dismissLightBox',
    params: { ...meta },
  });

export const switchToTab = (tabIndex: number, meta: any = {}): NavigationEvent => {
  const { params = {}, ...rest } = meta;
  return createAction(NAVIGATION.SWITCH_TO_TAB, {
    method: 'switchToTab',
    params: { tabIndex, ...params },
    ...rest,
  });
};

export const handleDeepLink = (meta: any) =>
  createAction(NAVIGATION.HANDLE_DEEP_LINK, {
    method: 'handleDeepLink',
    ...meta,
  });

export const toggleNavBar = (meta: any) =>
  createAction(NAVIGATION.TOGGLE_NAV_BAR, {
    method: 'toggleNavBar',
    ...meta,
  });

export const toggleTabs = (meta: any) =>
  createAction(NAVIGATION.TOGGLE_TABS, {
    method: 'toggleTabs',
    ...meta,
  });

export const setTitle = (meta: any) =>
  createAction(NAVIGATION.SET_TITLE, {
    method: 'setTitle',
    ...meta,
  });

export const setSubtitle = (meta: any) =>
  createAction(NAVIGATION.SET_SUB_TITLE, {
    method: 'setSubTitle',
    ...meta,
  });
