import axios from "axios";

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // // Deletes the book with the given id
  // deleteBook: function (id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveArticle: function (data) {
  //   return axios.post("/api/books", data);
  // },
  // Use the API to search for articles
  searchArticle: function (topic, startYear, endYear) {
    const apiKey = "03401e1f08b24aa185b5bb4d3771714c";
    const queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}0101`;
    console.log(queryUrl)
    return axios.get(queryUrl);
  },
  getArticles: function () {
    return axios.get("/api/articles");
  },
  saveArticle: function (articleData) {
    console.log(articleData.articleData.headline.main)
    return axios.post("/api/articles/" + articleData.articleData._id, {
      title: articleData.articleData.headline.main,
      url: articleData.articleData.web_url,
      date: articleData.articleData.pub_date
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
