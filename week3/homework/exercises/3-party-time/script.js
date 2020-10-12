/**
 * 3: Party time
 *
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 *
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */

function makeReservation() {
  // YOUR CODE GOES IN HERE
  const fetch = require('node-fetch');
  const invite = { name: 'Amjad Habbabeh', numberOfPeople: 2 };
  async function reserveForME() {
    try {
      const response = await fetch(
        ' https://reservation100-sandbox.mxapps.io/api/reservations',
        {
          method: 'POST',
          body: JSON.stringify(invite),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const data = await response.text();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  reserveForME();
}

makeReservation();
