import { Star } from "./Star";

export const Stars = ({ count = 0 }) => {
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