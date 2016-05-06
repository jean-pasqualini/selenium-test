var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('http://www.laposte.fr/particulier/outils/calculateur-de-tarif')
    .click('=Démarrer')
    .pause(2000)
    .end();