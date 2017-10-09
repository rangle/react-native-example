// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Home as HomeComponent } from './home.component';

export const Home = compose(connect(() => ({})))(HomeComponent);
