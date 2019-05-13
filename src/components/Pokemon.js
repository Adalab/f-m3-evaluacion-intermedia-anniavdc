import React from "react";

class Pokemon extends React.Component {
  render() {
    const { key, src, title, type } = this.props;
    return (
      <li className="poke__card" key={key}>
        <img className="card__image" src={src} alt="" />
        <h2 className="card__title">{title}</h2>
        <ul className="card__plus-info">
          {type.map((type, index) => (
            <li className="info__item" key={index}>
              {type}
            </li>
          ))}
        </ul>
      </li>
    );
  }
}

export default Pokemon;
