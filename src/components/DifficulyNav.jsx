import React from 'react';
import { Link } from 'react-router-dom';

const DifficulyNav = ({ categoryName }) => {
  const categoryNames = categoryName;
  return (
    <>
      <li className="easy-difficulty">
        <Link to={'/categories/' + categoryNames + '-easy'}>
          <i className="fa-solid fa-star"></i>Facile
        </Link>
      </li>
      <li className="medium-difficulty">
        <Link to={'/categories/' + categoryNames + '-medium'}>
          <i className="fa-solid fa-star"></i>Intermédiaire
        </Link>
      </li>
      <li className="hard-difficulty">
        <Link to={'/categories/' + categoryNames + '-hard'}>
          <i className="fa-solid fa-star"></i>Difficile
        </Link>
      </li>
    </>
  );
};

export default DifficulyNav;
