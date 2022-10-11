const PORT = 3000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();


const url = "https://raviduno1.blogspot.com/";
axios(url).then(
    response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const articles = [];
        $('.post-title', html).each(function () {
            const title = $(this).text();

            articles.push({ title });


        })

            ;

        console.log(articles);

    }
).catch(err => console.log(err));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));