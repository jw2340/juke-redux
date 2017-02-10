import React from 'react';

const Lyrics = (props) => {
  const artistChange = e => {
    props.setArtist(e.target.value);
  };

  const songChange = e => {
    props.setSong(e.target.value);
  };

  return (

    <form className="form-horizontal" onSubmit={props.handleSubmit}>
      <input className="form-control" type="text" value={props.artistQuery} placeholder="Artist" onChange={artistChange} />
      <input className="form-control" type="text" value={props.songQuery} placeholder="Song" onChange={songChange} />
      <pre>{props.text || 'Search above!'}</pre>
      <button type="submit">Search for Lyrics</button>
    </form>

  );
}

export default Lyrics;
