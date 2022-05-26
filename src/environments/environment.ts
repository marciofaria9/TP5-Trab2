// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  publicKey: 'c83f0ed3e2c41fc8b24bbdc02b858a98' ,
  hash: "",

  // URLs para acessar 
  
  URLCaracter: 'https://gateway.marvel.com/v1/public/characters',
  URLComics:  'https://gateway.marvel.com/v1/public/comics',
  URLEvents:  'https://gateway.marvel.com/v1/public/events',
  URLSeries:  'https://gateway.marvel.com/v1/public/series',
  URLStories:  'https://gateway.marvel.com/v1/public/stories'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
