import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {

    constructor() {
        super();
        console.log("Hello I am a contructor from News Component!")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8bf073ba6c5d445abddb5a6dd55199f3&page=1";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })


    }

     handlePreviousClick = async()=>{

    }

    handleNextClick = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8bf073ba6c5d445abddb5a6dd55199f3&page=1=$(this.state.page+1)`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
        this.setState({
            page:this.state.page+1
        })
    }


    render() {
        return (
            <div className='container my-3'>
                <h2>NewsPepper - Top Headlines</h2>

                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element ? element.title : ""} description={element ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}


                </div>
                <div className='container d-flex justify-content-between'>
                <button disabled = {this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
