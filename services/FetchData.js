import Config from "../config/config";


/**
 * Request json data from public
 */
class FetchData {
  getData = (callback , fileName = "productions") => {


    return fetch(query)
      .then((response) => {
        console.log(response);
        if (response.status === 200) return response.json();
        else throw new Error("Problème de réponse ", response);
      })
      .then((data) => {
        console.log("Data: ", data);
        callback(data);
      });
  };
}
export default FetchData;


