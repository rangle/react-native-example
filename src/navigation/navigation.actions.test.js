import {
  popScene,
  pushScene,
  dismissAllModals,
  dismissModal,
  showModal,
  showLightBox,
  dismissLightBox,
  switchToTab,
  handleDeepLink,
  setTitle,
  setSubtitle,
  toggleTabs,
  toggleNavBar,
  popToRootScene,
  resetToScene,
} from './navigation.actions';

describe('navigation actions', () => {
  it('should push a scene', () => {
    const action = pushScene('Scene/name');
    expect(action).toMatchSnapshot();
  });

  it('should push a scene and pass props', () => {
    const action = pushScene('Scene/name', { params: { passProps: { a: 1, b: 2 } } });
    expect(action).toMatchSnapshot();
  });

  it('should pop a scene', () => {
    const action = popScene();
    expect(action).toMatchSnapshot();
  });

  it('should push a modal and pass props', () => {
    const action = showModal({ screen: 'Scene/modal' });
    expect(action).toMatchSnapshot();
  });

  it('should push a modal and pass props', () => {
    const action = showModal({ screen: 'Scene/modal', passProps: { a: 1, b: 2 } });
    expect(action).toMatchSnapshot();
  });

  it('should dimiss a modal and pass props', () => {
    const action = dismissModal();
    expect(action).toMatchSnapshot();
  });

  it('should dimiss all modals and pass props', () => {
    const action = dismissAllModals();
    expect(action).toMatchSnapshot();
  });

  it('should show a lightbox', () => {
    const action = showLightBox({ screen: 'Scene/lightbox' });
    expect(action).toMatchSnapshot();
  });

  it('should show a lightbox and pass props', () => {
    const action = showLightBox({ screen: 'Scene/lightbox', passProps: { a: 1, b: 2 } });
    expect(action).toMatchSnapshot();
  });

  it('should dimiss a lightbox and pass props', () => {
    const action = dismissLightBox();
    expect(action).toMatchSnapshot();
  });

  it('should switch to a tab', () => {
    const action = switchToTab(1);
    expect(action).toMatchSnapshot();
  });

  it('should set the title', () => {
    const action = setTitle({ title: 'Dynamic Title' });
    expect(action).toMatchSnapshot();
  });

  it('should set the subtitle', () => {
    const action = setSubtitle({ subtitle: 'Dynamic Title' });
    expect(action).toMatchSnapshot();
  });

  it('should handle a deeplink', () => {
    const action = handleDeepLink({ link: '123456' });
    expect(action).toMatchSnapshot();
  });

  it('should reset to a scene', () => {
    const action = resetToScene({ screen: 'Screen/name' });
    expect(action).toMatchSnapshot();
  });

  it('should toggle tabs hidden', () => {
    const action = toggleTabs({ to: 'hidden' });
    expect(action).toMatchSnapshot();
  });

  it('should pop to root scene', () => {
    const action = popToRootScene();
    expect(action).toMatchSnapshot();
  });

  it('should toggle the nav bar hidden', () => {
    const action = toggleNavBar({ to: 'hidden' });
    expect(action).toMatchSnapshot();
  });
});
