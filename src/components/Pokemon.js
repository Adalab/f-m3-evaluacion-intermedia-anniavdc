import React from "react";
import PropTypes from 'prop-types';
import "../App.css";

class Pokemon extends React.Component {
  render() {
    const { src, title, type } = this.props;
    return (
      <React.Fragment>
        <img className="card__image" src={src} alt={title} />
        <h2 className="card__title">{title}</h2>
        <ul className="card__plus-info">
          {type.map((type, index) => (
            <li className="info__item" key={index}>
              {type}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

Pokemon.propTypes={
  title: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string
}
export default Pokemon;
