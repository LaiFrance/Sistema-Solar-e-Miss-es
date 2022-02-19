import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
class SolarSystem extends React.Component {
  render() {
    const planetlist = Planets.map(({ name, image }) => (
      <PlanetCard
        key={ name }
        planetName={ name }
        planetImage={ image }
      />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>{ planetlist }</div>
      </div>
    );
  }
}
export default SolarSystem;
