export default async function handler(req, res) {

    try {

        const {
            countries,
            topic
        } = req.query;


        if (!countries || !topic) {

            return res.status(400).json({
                error: "Countries and topic are required"
            });

        }


        const countryList =
            countries.split(",");


        const query =
            `${countryList.join(" ")} ${topic}`;


        console.log("Search query:", query);


        const params =
            new URLSearchParams({

                engine: "google_news_light",

                q: query,

                api_key:
                    process.env.SERPAPI_KEY

            });


        const response =
            await fetch(
                `https://serpapi.com/search?${params}`
            );


        const data =
            await response.json();


        res.status(200).json(data);


    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

}