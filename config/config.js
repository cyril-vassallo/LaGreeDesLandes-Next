/**
 *APP CONFIG - FRONTEND
 */
var domaine;
if (typeof window !== "undefined") {
  var location = window.location;
  domaine = location.protocol + "//" + location.hostname + "/";
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    domaine = location.protocol + "//" + location.hostname + ":" + location.port + "/";
  }
}

const Config = {
  APP: {
    DOMAINE: domaine,
  },
  API: {
    // all external api parameters
  },
};

export default Config;
