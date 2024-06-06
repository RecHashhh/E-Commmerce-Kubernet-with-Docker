import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook} from '@fortawesome/free-solid-svg-icons'
import { Link, Redirect } from "react-router-dom";
import '../style/Book.scss';

function BookCover(props) {

    const generateColor = () => {
        return '#' +  Math.random().toString(16).substr(-6);
    }  

    return (
        <div style={{"backgroundColor": generateColor()}} className="book-cover">
            <span className="book-cover-title">{props.title}</span>
        </div>
    );
}



function BookContainer(props) {

    let [added, setAdded] = useState(false);
    
    const addToCart = async () =>{
    
        const b = {
            "ISBN": props.book.ISBN,
            "Username": props.user.Username
        }
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(b)
        };
        try {
            let fetchResponse = await fetch(`http://localhost:8080/checkout`, settings);
            let data = await fetchResponse.json();
            console.log(data);
            setAdded(true)
        } catch (e) {
            return e;
        }    
        //trigger redirect to cart page
      }
    return (
      <div className="book-container">
          {added ? <Redirect to={"/cart"}></Redirect> : ""}
          {props.setLoading ? 
          <div onClick={()=>{props.setLoading(true)}}><Link to={"/book/"+props.book.ISBN}><BookCover title={props.book.Book_title}/></Link></div>
          :
          <Link to={"/book/"+props.book.ISBN}><BookCover title={props.book.Book_title}/></Link>  
          }
          
          <div className="book-title"><b>{props.book.Book_title}</b></div>
          <div className="book-genre">{props.book.Book_genre}</div>
          <div className="book-price"><b>${props.book.Book_price}</b></div>
          { 
          props.ordered != null || props.user == null ? "" : 
          <input type="button" className="book-order-button" value="Add to Cart" onClick={addToCart}></input>
          }
      </div>
    );
  }
export default BookContainer;