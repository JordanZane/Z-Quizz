import React from 'react';
import { Link } from 'react-router-dom';

const DifficulyNav = ({ categoryName }) => {
  const categoryNames = categoryName;
  return (
    <>
      <li className="easy-difficulty">
        <Link
          className="btn-style"
          to={'/categories/' + categoryNames + '-easy'}
        >
          Easy
          <i className="fa-solid fa-star"></i>
        </Link>
      </li>
      <li className="medium-difficulty">
        <Link
          className="btn-style"
          to={'/categories/' + categoryNames + '-medium'}
        >
          Medium
          <i className="fa-solid fa-star"></i>
        </Link>
      </li>
      <li className="hard-difficulty">
        <Link
          className="btn-style"
          to={'/categories/' + categoryNames + '-hard'}
        >
          Hard
          <i className="fa-solid fa-star"></i>
        </Link>
      </li>
    </>
  );
};

export default DifficulyNav;
