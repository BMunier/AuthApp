export interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: '3M9lhrd3M92YB7KBHs2crINNPp2i04LB',
    CLIENT_DOMAIN: 'bmunier.eu.auth0.com', // e.g., you.auth0.com
    AUDIENCE: 'http://localhost:3001',
    REDIRECT: 'http://localhost:4200/callback',
    SCOPE: 'openid profile email'
  };