const axios = require('axios');
const fs = require('fs');
const path = require('path');

/**
 * Fetches data from a specified API endpoint.
 * @returns {Promise<Object>} The fetched data.
 */
async function fetchData() {
    try {
        const response = await axios.get('http://localhost:3000/api/data');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

/**
 * Replaces placeholders in the content with dynamic data.
 * @param {string} content - The content to process.
 * @param {Object} data - The dynamic data to inject.
 * @returns {string} The content with placeholders replaced.
 */
function getData(content, data) {
    return content.replace(/~DataApi/, `
		<div class="p-6 bg-white rounded-lg shadow-lg">
		<p class="text-center">${data.message}</p>
		<p class="text-center">${data.timestamp}</p>
		</div>
	`);
}

module.exports = {
    fetchData,
    getData
};
