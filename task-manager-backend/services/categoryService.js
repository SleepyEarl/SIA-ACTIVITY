const axios = require("axios");

const fetchCategories = async () => {

    try {

        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = response.data;

        const categories = data.map(user =>
            user.company.bs.split(" ")[0]
        );

        return [...new Set(categories)].slice(0, 5);

    } catch (error) {

        return [
            "Personal",
            "Work",
            "Urgent"
        ];
    }
};

module.exports = fetchCategories;