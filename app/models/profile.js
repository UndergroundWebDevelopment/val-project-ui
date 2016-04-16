import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  slug: DS.attr('string'),
  publicDescription: DS.attr('string'),
  dateOfBirth: DS.attr('date'),
  publicDateOfBirth: DS.attr('boolean'),

  name: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
});
