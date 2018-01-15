import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPets } from '../actions';
import PetsNew from './PetsNew';
import PetsShow from './PetsShow';
import PetsList from '../components/PetsList';

class PetsPage extends Component {

  componentDidMount() {
    this.props.fetchPets();
  }

  render() {
    let { match, pets } = this.props
    return (
      <div>
        <Switch >
          <Route exact path={`${match.path}`} render={()=>(<PetsList pets={pets}/>)} />
          <Route path={`${match.path}/new`} component={PetsNew} />
          <Route path={`${match.path}/:petId`} component={PetsShow}/>
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    pets: state.pets
  };
}

export default connect(mapStateToProps, { fetchPets })(PetsPage);
