import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setSurnameFilter, setTelephoneFilter, setDocIDFilter, setPlatesFilter, setArrStartDate, setArrEndDate, setDepStartDate, setDepEndDate   } from '../actions/actionFilters';


export class ClientListFilters extends React.Component {
  state = {
    calendarArrFocused: null,
    calendarDepFocused: null,
  };
  onArrDatesChange = ({ startDate, endDate }) => {
    this.props.setArrStartDate(startDate);
    this.props.setArrEndDate(endDate);
  };

  onDepDatesChange = ({ startDate, endDate }) => {
    this.props.setDepStartDate(startDate);
    this.props.setDepEndDate(endDate);
  };

  onArrFocusChange = (calendarArrFocused) => {
    this.setState(() => ({ calendarArrFocused }));
  }

  onDepFocusChange = (calendarDepFocused) => {
    this.setState(() => ({ calendarDepFocused }));
  }
  
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

  ClearInputs =() => {
    this.props.setSurnameFilter("");
    this.props.setTelephoneFilter("");
    this.props.setDocIDFilter("");
    this.props.setPlatesFilter("");
    this.props.setArrStartDate(undefined);
    this.props.setArrEndDate(undefined);
    this.props.setDepStartDate(undefined);
    this.props.setDepEndDate(undefined);
  }

  render() {
    return (
      <div className="page-header-colored">
        <div className="content-container">
        <p><b>Αναζήτηση με:</b></p>
          <div className="input-group">
            <div className="input-group__item">
              <input
                type="text"
                className="text-input"
                id="kookoo"
                placeholder="επίθέτο"
                value={this.props.filters.surname}
                onChange={this.onSurnameChange}
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
            <button
                className="button-filter"
                onClick={this.ClearInputs}
              >Clear</button>
            </div>
            </div>
            <div className="input-group">
            <div className="input-group__item">
            <p><b>Αφίξεις</b></p>
              <DateRangePicker
                startDate={this.props.filters.startArrDate}
                endDate={this.props.filters.endArrDate}
                onDatesChange={this.onArrDatesChange}
                focusedInput={this.state.calendarArrFocused}
                onFocusChange={this.onArrFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
                displayFormat="DD/MM/YYYY"
              />
            </div>

            <div className="input-group__item">
            <p><b>Αναχωρήσεις</b></p>
              <DateRangePicker
                startDate={this.props.filters.startDepDate}
                endDate={this.props.filters.endDepDate}
                onDatesChange={this.onDepDatesChange}
                focusedInput={this.state.calendarDepFocused}
                onFocusChange={this.onDepFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}        
                displayFormat="DD/MM/YYYY"
              />
              </div>
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
  setArrStartDate: (startArrDate) => dispatch(setArrStartDate(startArrDate)),
  setArrEndDate: (endArrDate) => dispatch(setArrEndDate(endArrDate)),
  setDepStartDate: (startDepDate) => dispatch(setDepStartDate(startDepDate)),
  setDepEndDate: (endDepDate) => dispatch(setDepEndDate(endDepDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientListFilters);
