import Config from "../config/config";


/**
 * Request json data from public
 */
class FetchData {
  getData = (fetchSuccess , fileName = "data-home") => {
    let query = `${Config.app.DOMAINE}data/${fileName}.json`;
    // let query = `http://localhost:3000/data/${fileName}.json`;
    return fetch(query)
      .then((response) => {
        console.log(response);
        if (response.status === 200) return response.json();
        else throw new Error("Problème de réponse ", response);
      })
      .then((data) => {
        console.log("Data: ", data);
        fetchSuccess(data);
      });
  };
}
export default FetchData;


