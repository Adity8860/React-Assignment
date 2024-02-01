import React from 'react';

const ShowSummary = ({ shows }) => {
  const showId = parseInt(window.location.pathname.split('/')[2]);
  const show = shows.find((s) => s.show.id === showId);

  return (
    <div>
      <h1>{show.show.name}</h1>
      <img src={show.show.image.medium} alt={show.show.name} />
      <p>{show.show.summary}</p>
      <p>Premiered: {show.show.premiered}</p>
      <p>Network: {show.show.network.name}</p>
    </div>
  );
};

export default ShowSummary;