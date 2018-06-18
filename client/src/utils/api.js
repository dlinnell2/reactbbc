import axios from 'axios';

export default {

    getArticles: function () {
        return axios({
            method: 'get',
            url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
            params: {
                'api-key': "c15b92fa39a44bf189d243dcc60bdefa",
                'sort': "newest",
                'fl': "web_url, headline, pub_date",
                'page': 0
            }
        });
    }


}