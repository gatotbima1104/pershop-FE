const axios = require('axios');
const fs = require('fs');

// Define the URL
const url = 'https://fakestoreapi.com/products';

// Send a GET request to the URL
axios.get(url)
  .then((response) => {
    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      // Parse the JSON response
      const data = response.data;

      // Define the filename for the JSON file
      const filename = 'fakestore_products.json';

      // Save the data as a JSON file
      fs.writeFileSync(filename, JSON.stringify(data, null, 2));

      console.log('Data has been saved to', filename);
    } else {
      console.error('Failed to fetch data:', response.status, response.statusText);
    }
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });





