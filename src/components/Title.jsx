import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return <h2>{headline}</h2>;
  }
}
// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
/* PropTypes exporta
uma variedade de validadores que podem ser usados
para certificar que os dados que você recebe são válidos.
 Neste exemplo, utilizamos PropTypes.string. Quando um valor
 inválido for fornecido a uma prop, um alerta será exibido no
 console JavaScript. Por motivos de performance, propTypes é checado
 apenas em modo de desenvolvimento. */

export default Title;
