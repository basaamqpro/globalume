export default async function handler(req, res) {

    try {

        const query = "china pakistan energy";

        const url =
            "https://serpapi.com/search" +
            "?engine=google_news_light" +
            "&q=" + encodeURIComponent(query) +
            "&api_key=" + process.env.SERPAPI_KEY;

        const response = await fetch(url);

        const data = await response.json();

        res.status(200).json(data);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

}