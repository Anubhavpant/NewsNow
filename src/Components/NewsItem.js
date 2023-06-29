
import React from "react";

const NewsItem =(props)=> {


  
    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div className="my-3 ">
        <div className="card" style={{width:"18rem",marginTop:"40px"}}>
          <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:0}}>
            <span className="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <a href={newsUrl} target="_blank" rel="noreferrer">
            <img
              src={
                !imageUrl
                  ? "https://images.hindustantimes.com/tech/img/2023/06/18/1600x900/Pixlr_X_AI_1687081425058_1687081425247.jpg"
                  : imageUrl
                  
              }
              className="card-img-top"
              alt="..."

              title={!title?"click the read more button to learn more":title.slice(0,300)}

              

              style={{cursor:"pointer",width:"100%"}}
              
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>  
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm   btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
