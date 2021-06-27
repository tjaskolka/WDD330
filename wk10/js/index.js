'use strict';

/*import {getJSON, getLocation} from './utilities.js';
import QuakesController from './QuakesController.js';

const url =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2021-02-02";


getLocation().then(result => {
    let latitude = result.coords.latitude;
    let longitude = result.coords.longitude;
    let urlCurrentLocation = url + `&latitude=${latitude}&longitude=${longitude}&maxradiuskm=100`;
    console.log(urlCurrentLocation);
    console.log(getJSON(urlCurrentLocation))
    return urlCurrentLocation;
});

const quake = new QuakesController('#quakeList');

quake.init();*/

import QuakesController from './QuakesController.js';

const myQuakesController = new QuakesController('#quakeList');
myQuakesController.init();




