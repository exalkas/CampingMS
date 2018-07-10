import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/actionsAuth';
import { firebase} from '../firebase/firebase';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      
          <div className="header__content">
            <Link className="header__title" to="/dashboard">
              <h1>Camping Management</h1>
            </Link>   
            <div>  
            <button className="button button--link" onClick={startLogout}>Έξοδος<p>{firebase.auth().currentUser.email}</p></button>     
            {/* <div className="header_par">
              <h5>Χρήστης: {</h5>
            </div>  */}
            </div>
        </div>
       
        
    </div>
  </header>
);


const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
