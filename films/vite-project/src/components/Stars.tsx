import React from 'react';
import { Star } from './Star';

interface StarsProps {
  count: number;
}

export const Stars: React.FC<StarsProps> = ({ count = 0 }) => {
  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null;
  }

  const stars = Array(count).fill(<Star />);

  return (
    <ul className="card-body-stars u-clearfix">
      {stars.map((star, index) => (
        <React.Fragment key={index}>{star}</React.Fragment>
      ))}
    </ul>
  );
};