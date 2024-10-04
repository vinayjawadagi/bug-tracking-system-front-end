// Import any necessary libraries or modules

// Define the base URL of the API
const BASE_URL = "http://localhost:8080/api/";

// Define a function to make a GET request to the API
async function fetchData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Define a function to make a POST request to the API
async function postData(endpoint, body) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
}

// Export the functions for use in other parts of the application
export { fetchData, postData };
