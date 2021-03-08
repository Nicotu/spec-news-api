// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default (req, res) => {
  axios
    .get(
      "https://newsapi.org/v2/everything?q=italy&pageSize=20&apiKey=653163b8c7a14e54ac680e2d91eaefd4"
    )
    .then((response) => {
      res.status(200).json(response.data.articles);
      return;
    })
    .catch((error) => {
      console.log(error);
    });
};
