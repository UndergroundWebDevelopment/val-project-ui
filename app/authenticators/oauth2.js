import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from 'val-project-ui/config/environment';

export default OAuth2PasswordGrant.extend({
  clientId: ENV.APP.OAUTH_CLIENT_ID,
  serverTokenEndpoint: ENV.APP.API_HOST + "/token",
});
