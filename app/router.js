import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('profile', { path: '/profile/:profile_id' }, function() {
    this.route('edit', {path: '/edit'});
  });
  this.route('account', { path: '/account'}, function() {
  });
});

export default Router;
