import React from 'react';

import athlete from '../../img/athlete2.png';
import theRacer from '../../img/theracer-small.png';
import goodTimes from '../../img/goodtimes-small.png';
import { Movie, Work } from './OurWork.styled';
import { Link } from 'react-router-dom';

const OurWork = ({ ...props }) => {
  return (
    <Work>
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link>
          <img src={theRacer} alt="the racer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link>
          <img src={goodTimes} alt="good times" />
        </Link>
      </Movie>
    </Work>
  );
};

export default OurWork;
