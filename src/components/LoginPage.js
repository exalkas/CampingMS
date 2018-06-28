import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/actionsAuth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Camping Management</h1>
      <p>Διαχείριση κάμπινγκ v1.0.0</p>
      <button className="button" onClick={startLogin}>Είσοδος με Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
