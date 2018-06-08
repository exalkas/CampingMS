import React from 'react';
import { connect } from 'react-redux';
// import { DateRangePicker } from 'react-dates';
import { setSurnameFilter, setTelephoneFilter, setDocIDFilter, setPlatesFilter, sortBySurname, sortByEmail} from '../actions/filters';

export class ClientListFilters extends React.Component {
  // state = {
  //   calendarFocused: null
  // };
  // onDatesChange = ({ startDate, endDate }) => {
  //   this.props.setStartDate(startDate);
  //   this.props.setEndDate(endDate);
  // };
  // onFocusChange = (calendarFocused) => {
  //   this.setState(() => ({ calendarFocused }));
  // }
  onSurnameChange = (e) => {
    this.props.setSurnameFilter(e.target.value);
  };

  onTelephoneChange = (e) => {
    this.props.setTelephoneFilter(e.target.value);
  };

  onDocIDChange = (e) => {
    this.props.setDocIDFilter(e.target.value);
  };

  onPlatesChange = (e) => {
    this.props.setPlatesFilter(e.target.value);
  };

  onSortChange = (e) => {
    if (e.target.value === 'surname') {
      this.props.sortByDate();
    } else if (e.target.value === 'email') {
      this.props.sortByEmail();
    }
  };
  render() {
    return (
      <div className="content-container">
      <p>Αναζήτηση με:</p>
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="επίθέτο"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
          <input
              type="text"
              className="text-input"
              placeholder="τηλέφωνο"
              value={this.props.filters.telephone}
              onChange={this.onTelephoneChange}
            />         
           </div>
           <div className="input-group__item">
          <input
              type="text"
              className="text-input"
              placeholder="διαβατήριο"
              value={this.props.filters.docID}
              onChange={this.onDocIDChange}
            />         
           </div>
           <div className="input-group__item">
          <input
              type="text"
              className="text-input"
              placeholder="πινακίδες"
              value={this.props.filters.plates}
              onChange={this.onPlatesChange}
            />         
           </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="surname">Επίθετο</option>
              <option value="email">email</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setSurnameFilter: (surname) => dispatch(setSurnameFilter(surname)),
  setTelephoneFilter: (telephone) => dispatch(setTelephoneFilter(telephone)),
  setDocIDFilter: (docID) => dispatch(setDocIDFilter(docID)),
  setPlatesFilter: (plates) => dispatch(setPlatesFilter(plates)),
  sortBySurname: () => dispatch(sortBySurname()),
  sortByEmail: () => dispatch(sortByEmail())
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientListFilters);
