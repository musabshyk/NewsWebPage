import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className='my-2'>
         <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl?imageUrl:"https://static8.depositphotos.com/1338574/829/i/450/depositphotos_8292496-stock-photo-news.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a rel="noreferrer" href={newsUrl} target = "_blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
