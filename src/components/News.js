import React, { Component } from "react";
import Loader from "./Loader.js";
import NewsItem from "./NewsItem.js";
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country:"in",
    pageSize:20,
    category:"general"
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }
  
  articles = [];

  currentPage = 1;

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${this.props.pageSize}&page=${
      this.currentPage - 1
    }&category=${this.props.category}&apiKey=ee6561209404434b9894f29ec481bd56`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.currentPage -= 1;
    this.setState({
      currPage: this.currentPage,
      articles: parsedData.articles,
    });
    document.getElementById("news-heading-container").scrollIntoView();
  };

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${this.props.pageSize}&page=${
      this.currentPage + 1
    }&category=${this.props.category}&apiKey=ee6561209404434b9894f29ec481bd56`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.currentPage += 1;
    this.setState({
      currPage: this.currentPage, 
      articles: parsedData.articles,
    });
    document.getElementById("news-heading-container").scrollIntoView();
  };

  constructor() {
    super();
    console.log(`Current Page : ${this.currentPage}`);
    this.state = {
      currPage: 1,
      articles: this.articles,
      resultPerPage: 20,
      totalResults: 0,
      totalPageCount: 0,
      loading: true,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${this.props.pageSize}&page=1&category=${this.props.category}&apiKey=ee6561209404434b9894f29ec481bd56`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      totalPageCount: Math.ceil(
        parsedData.totalResults / this.state.resultPerPage
      ),
      loading: parsedData.articles ? false : true,
    });

    console.log(`${this.state.totalResults} bc`);
    console.log(`${this.state.totalPageCount} bcs`);
  }

  render() {

    return (
      <div className="container my-3" id="news-heading-container">
        <h3 className="text-center" style={{margin:"90px 0"}}>News</h3>
        {this.state.loading ? (
          <Loader/>
        ) : (
          <div className="row">
            {this.state.articles.map((i) => (
              <div className="col md-4" key={i.url}>
                <NewsItem
                  title={i.title}
                  description={i.description}
                  imgUrl={
                    i.urlToImage
                      ? i.urlToImage
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7Z6nS0paslUx7X-rSOyNqmhge_ugyoMcFA&usqp=CAU"
                  }
                  newsUrl={i.url}
                  value={i.source}
                />
              </div>
            ))}
          </div>
        )}

        <div className="container d-flex justify-content-between">
          <button
            className="btn-primary btn-lg"
            onClick={this.handlePrevClick}
            disabled={this.currentPage <= 1}
            style={
              this.currentPage <= 1
                ? { opacity: "0.5", cursor: "not-allowed" }
                : { opacity: 1, cursor: "pointer" }
            }
          >
            Previous
          </button>

          <button
            className="btn-primary btn-lg"
            onClick={this.handleNextClick}
            disabled={this.currentPage >= this.state.totalPageCount}
            style={
              this.currentPage >= this.state.totalPageCount
                ? { opacity: "0.5", cursor: "not-allowed" }
                : { opacity: 1, cursor: "pointer" }
            }
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
