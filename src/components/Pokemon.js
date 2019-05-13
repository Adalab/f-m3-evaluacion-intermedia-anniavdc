import React from "react";
import "./App.css";


class Pokemon extends React.Component{
    render(){
        return(
            <li className="poke__card" key={item.id}>
              <img className="card__image" src={item.url} alt=""/>
              <h2 className="card__title">{item.name}</h2>
              <ul className="card__plus-info">
              {item.types.map((type, index)=>(
                <li className="info__item" key={index}>
                  {type}
                </li>
              ))}
              </ul>    
           </li>
        )
    }
}

export default Pokemon;