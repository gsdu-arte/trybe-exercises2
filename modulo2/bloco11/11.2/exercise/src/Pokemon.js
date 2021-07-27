import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    return (
      <div className="pokemon">
        <img src={ image } alt={ name } />
        <h3>{name}</h3>
        <p>{type}</p>
        <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
      </div>
    );
  }
}

export default Pokemon;
