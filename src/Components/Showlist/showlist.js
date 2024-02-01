import React from 'react';
import './showlist.css';
import { Link } from 'react-router-dom';

const ShowList = ({ shows }) => {
  return (
    <div>
      <h1 content='center'> Shows </h1>
      <ul className="list-group">
        {shows.map((show) => (
          <li key={show.show.id} className="list-group-item">
            <Link to={`/summary/${show.show.id}`}>{show.show.name}</Link>
            <p>Type: {show.show.type}</p>
            <p>Language: {show.show.language}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;