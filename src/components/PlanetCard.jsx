import PropTypes from 'prop-types';
import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;

    return (
      <div className="divplanetcard" data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
export default PlanetCard;
