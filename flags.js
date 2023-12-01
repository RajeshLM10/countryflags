const url = 'https://restcountries.com/v3.1/all';

// Make a GET request using the Fetch API
fetch(url)
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`Error: Unable to fetch data. Status code: ${response.status}`);
    }
    
    // Parse the JSON data
    return response.json();
  })
  .then(countriesData => {
    // Extract and display information for each country
    countriesData.forEach(country => {
      const name = country.name.common || 'N/A';
      const region = country.region || 'N/A';
      const subRegion = country.subregion || 'N/A';
      const population = country.population || 'N/A';
      const flag = country.flags?.svg || 'N/A';

      // Display information
      console.log(`Country: ${name}`);
      console.log(`Region: ${region}`);
      console.log(`Sub-region: ${subRegion}`);
      console.log(`Population: ${population}`);
      console.log(`Flag: ${flag}`);
      console.log('------------------------');
    });
  })
  .catch(error => {
    console.error(error.message);
  });
