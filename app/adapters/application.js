import DS from 'ember-data';
import ENV from 'alexwillemsma-webapp-ui/config/environment';

export default DS.JSONAPIAdapter.extend({
    host: ENV.APP.API_HOST,
});
