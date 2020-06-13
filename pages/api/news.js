import axios from 'axios';

export default async (req, res) => {
  const {
    data: { articles },
  } = await axios.get(
    'http://newsapi.org/v2/top-headlines?' +
      'country=uk&' +
      `apiKey=${process.env.NEWSAPI_KEY}`
  );
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(articles);
};
