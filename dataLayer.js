# Prioriteetti 2
###########################
#### GENERAL DATALAYER ####
###########################

//General dataLayer on all car pages. Loaded before Google Analytics Pageview is fired

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event':'General dataLayer',
    'car':{
        'brand': 'BMW',
        'model': '5-sarja',
        'type': 'Vaihtoauto',
        'vehicleType': 'Pakettiauto',
        'dealType': 'Fiksudiili', //jos ei diiliä, jätetään tyhjäksi
        'registerId': 'ABC-123', //uusissa autoissa jätetään tyhjäksi
        'price': 23000,
        'constructionYear': '2010', 
        'outlet': 'Ford Espoo',
        'mileage': 120000, //uusissa autoissa 0
        'transmission': 'Automaatti',
        'fuel': 'Diesel',
        'color': 'Valkoinen',
        'dateAdded': '2019-07-21',
        'rawData': 'brand:BMW|model:5-sarja|type:vaihtoauto|mileage:23000|fueltype:diesel...'
      },
    'user':{
        'omalaakkonenId': 'ASDFGHJKQWERTYU123456', //Jos ei ole kirjautunut niin tyhjä
        'omalaakkonenCarBrand': 'BMW|Seat|Volkswagen', //Array of owned brands
        'loggedInToOmalaakkonen': 'Yes',
        'abTestGroup': '1' //jätetään arvo tyhjäksi
      },
    'page':{
        'type': 'Autokortti',
        'brandEnvironment': 'BMW', //Kun merkkisivusto tulee
        'lastUpdated': '2019-07-21', //YYYY-MM-DD
        'responseCode': '200' //tai 404
      }
});

//General dataLayer on all other pages. Loaded before Google Analytics Pageview is fired

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event':'General dataLayer',
    'user':{
        'omalaakkonenId': 'ASDFGHJKQWERTYU123456',
        'omalaakkonenCarBrand': 'BMW',
        'loggedInToOmalaakkonen': 'Yes',
        'abTestGroup': '1'
      },
    'page':{
        'type': 'Etusivu', //Hakutulos, Sisältösivu (url:n ensimmäinen taso kertoo sivutyypin)
        'brandEnvironment': 'BMW',
        'lastUpdated': '2019-07-21', //YYYY-MM-DD
        'responseCode': '200' //404, 500
      }
});

# Prioriteetti 1
################################
####      CONVERSIONS       ####
#### KAUPALLISET KONVERSIOT ####
################################

//Conversion dataLayer
//If this dataLayer is firing on the thank you page
//the previous page 'car' object needs to be populated

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event':'Conversion',
  'conversion':{
      'name': 'Varaa auto', //Descriptive conversion name, also in campaign forms
      'id': '12345678912345678'
  }
});

# Prioriteetti 4
#########################
#### UI INTERACTIONS ####
#########################

//UI interaction dataLayer examples

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event':'UI interaction',
  'interaction':{
      'element': 'link',
      'elementName': 'Jaa sivu Facebookissa',
      'type': 'click'
  }
});

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event':'UI interaction',
  'interaction':{
      'element': 'input',
      'elementName': 'Laske rahoitus | Muuta viimeistä erää',
      'type': 'value change' //click, drag,
  }
});

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event':'UI interaction',
  'interaction':{
      'element': 'accordion',
      'elementName': 'Perustiedot',
      'type': 'expand' //close
  }
});

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event':'UI interaction',
  'interaction':{
      'element': 'input',
      'elementName': 'Tee fiksudiilisopimus | Vaihda ajokilometreja',
      'type': 'value change' //close
  }
});




# Prioriteetti 3
####################
#### CAR SEARCH ####
####################

//car search events, fired each time a change is made
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event':'Car search',
  'carSearch':{
      'brand': 'BMW|Ford|Nissan',
      'model': '5-sarja',
      'type': 'Vaihtoautot|Uudet Autot',
      'vehicleType': 'Farmari|Porrasperä',
      'dealType': 'Fiksudiili',
      'priceMax': 50000,
      'monthlyPaymentPriceMax': 350,
      'monthlyPaymentMonths': 60,
      'constructionYearMin': '2010',
      'outlet': 'Ford Espoo',
      'mileageMin': 50000,
      'mileageMax': 100000,
      'transmission': 'Automaatti|Manuaali',
      'fuel': 'Diesel|Bensiini|Hybridi',
      'powerMin': '170kW',
      'totalFuelConsumption100kmMax': 2,
      'pullMassMin': '1000kg',
      'drive': 'Neliveto|Etuveto',
      'doors': '2|3|4',
      'passangers': '2|3|4',
      'additionalProducts': 'Laakkonen Turva|Kuntotarkastusraportti',
      'campaign':'Erään skoda superb malleja talvirenkaat kaupan päälle',
      'freeText': 'Hyvä ja kiva auto',
      'rawData': 'brand:BMW|model:5-sarja|type:vaihtoauto|mileage:23000|fueltype:diesel...'
    }
});

//Hakuvahti events, fired each time a change is made
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event':'Hakuvahti saved',
  'carSearch':{
      'brand': 'BMW|Ford|Nissan',
      'model': '5-sarja',
      'type': 'Vaihtoautot|Uudet Autot',
      'vehicleType': 'Farmari|Porrasperä',
      'dealType': 'Fiksudiili',
      'priceMax': 50000,
      'monthlyPaymentPriceMax': 350,
      'monthlyPaymentMonths': 60,
      'constructionYearMin': '2010',
      'outlet': 'Ford Espoo',
      'mileageMin': 50000,
      'mileageMax': 100000,
      'transmission': 'Automaatti|Manuaali',
      'fuel': 'Diesel|Bensiini|Hybridi',
      'powerMin': '170kW',
      'totalFuelConsumption100kmMax': 2,
      'pullMassMin': '1000kg',
      'drive': 'Neliveto|Etuveto',
      'doors': '2|3|4',
      'passangers': '2|3|4',
      'additionalProducts': 'Laakkonen Turva|Kuntotarkastusraportti',
      'campaign':'Erään skoda superb malleja talvirenkaat kaupan päälle',
      'freeText': 'Hyvä ja kiva auto',
      'rawData': 'brand:BMW|model:5-sarja|type:vaihtoauto|mileage:23000|fueltype:diesel...'
    }
});

# Prioriteetti 5
#####################
#### SITE SEARCH ####
#####################

//Site search event
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event':'Site search',
  'searchInput': 'Tässä on hakulauseke'
});
# Prioriteetti 5
##############
#### CHAT ####
##############

//Chat event
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event':'Chat event',
  'chatEventType': 'User sent message' //Operator sent message, Operator sent automated message, User opened chat, User closed chat
});
