const API_URL = 'https://api-mobilespecs.azharimm.site/v2/apple_iphone_12_pro_max-10237';

var getJSONData = function (url) {
  var result = {};

  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      return result; 
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      return result;
    });
}


