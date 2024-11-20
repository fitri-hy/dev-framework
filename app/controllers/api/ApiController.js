const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function fetchData() {
    try {
        const response = await axios.get('http://localhost:3000/api/data');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

function getData(content, data) {
    return content.replace(/~DataApi/, `
		<p class="text-3xl md:text-4xl text-gray-200 text-center font-extrabold">${data.message}</p>
	`);
}

module.exports = {
    fetchData,
    getData
};
