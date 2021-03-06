// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  timestamp: '1653661266',
  publicKey: 'c83f0ed3e2c41fc8b24bbdc02b858a98' ,
  hash: '604dbfb0d2240217af936477af75503d',

  // URLs para acessar 
  
  URLCaracter: 'https://gateway.marvel.com/v1/public/characters?ts=',
  URLComics:  'https://gateway.marvel.com/v1/public/comics?ts=',
  URLEvents:  'https://gateway.marvel.com/v1/public/events?ts=',
  URLSeries:  'https://gateway.marvel.com/v1/public/series?ts=',
  URLStories:  'https://gateway.marvel.com/v1/public/stories?ts='
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
