import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const mission = missions.map(({ name, year, country, destination }) => (
      <MissionCard
        key={ name }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />));

    return (
      <div className="missoes" data-testid="missions">
        <Title headline="Missões" />
        <div>{ mission }</div>
        <footer>
          <h3>Todos os Direitos Reservados</h3>
        </footer>
      </div>
    );
  }
}

export default Missions;
