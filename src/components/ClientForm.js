import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { Link } from 'react-router-dom';

export default class ClientForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      telephone: props.client ? props.client.telephone : '',
      email: props.client ? props.client.email : '',
      name: props.client ? props.client.name : '',
      fathername: props.client ? props.client.fathername : '',
      surname: props.client ? props.client.surname : '',
      address: props.client ? props.client.address : '',
      docID: props.client ? props.client.docID : '',
      plates: props.client ? props.client.plates : '',
      arrivalDate: props.client ? moment(props.client.arrivalDate) : moment(),
      departureDate: props.client ? moment(props.client.departureDate) : moment(),
      adultsNum: props.client ? props.client.adultsNum : '',
      adultsPrice: props.client ? props.client.adultsPrice : '',
      adultsSumMoney: props.client ? props.client.adultsSumMoney : '',
      childrenNum: props.client ? props.client.childrenNum : '',
      childrenPrice: props.client ? props.client.childrenPrice : '',
      childrenSumMoney: props.client ? props.client.childrenSumMoney : '',
      carsNum: props.client ? props.client.caravansNum : '',
      carsPrice: props.client ? props.client.carsPrice : '',
      carsSumMoney: props.client ? props.client.caravansSumMoney : '',
      motosNum: props.client ? props.client.motosNum : '',
      motosPrice: props.client ? props.client.motosPrice : '',
      motosSumMoney: props.client ? props.client.motosSumMoney : '',
      caravansNum: props.client ? props.client.caravansNum : '',
      caravansPrice: props.client ? props.client.caravansPrice : '',
      caravansSumMoney: props.client ? props.client.caravansSumMoney: '',
      skinesSmallNum: props.client ? props.client.skinesSmallNum : '',
      skinesSmallPrice: props.client ? props.client.skinesSmallPrice : '',
      skinesSmallSumMoney: props.client ? props.client.skinesSmallSumMoney : '',
      skinesBigNum: props.client ? props.client.skinesBigNum : '',
      skinesBigPrice: props.client ? props.client.skinesBigPrice : '',
      skinesBigSumMoney: props.client ? props.client.skinesBigSumMoney : '',
      pulmansNum: props.client ? props.client.pulmansNum : '',
      pulmansPrice: props.client ? props.client.pulmansPrice : '',
      pulmansSumMoney: props.client ? props.client.pulmansSumMoney : '',
      skafiNum: props.client ? props.client.skafiNum : '',
      skafiPrice: props.client ? props.client.skafiPrice : '',
      skafiSumMoney: props.client ? props.client.skafiSumMoney : '',
      prizesNum: props.client ? props.client.prizesNum : '',
      prizesPrice: props.client ? props.client.prizesPrice : '',
      prizesSumMoney: props.client ? props.client.prizesSumMoney : '',
      notes: props.client ? props.client.notes : '',
      thesi: props.client ? props.client.thesi : '',
      totalPerDay: props.client ? props.client.totalPerDay : '',
      total: props.client ? props.client.total : '',
      dianikterefseis: props.client ? props.client.dianikterefseis: '',
      imeresDiamonis: props.client ? props.client.imeresDiamonis: '',
      calendarArrivalsFocused: false,
      calendarDeparturesFocused: false,
      error: ''
    };
  }

  onTelephoneChange = (e) => {
    const telephone = e.target.value;
    this.setState(() => ({ telephone }));
  };

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  onFatherNameChange = (e) => {
    const fathername = e.target.value;
    this.setState(() => ({ fathername }));
  };

  onSurnameChange = (e) => {
    const surname = e.target.value;
    this.setState(() => ({ surname }));
  };

  onAddressChange = (e) => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  };

  onDocIDChange = (e) => {
    const docID = e.target.value;
    this.setState(() => ({ docID }));
  };

  onPlatesChange = (e) => {
    const plates = e.target.value;
    this.setState(() => ({ plates }));
  };
  //------------------------------------------
//------------------------------------------
  onArrivalDateChange = (arrivalDate) => {
    if (arrivalDate) {
      this.setState(() => ({ arrivalDate }));
    }
  };

  onDepartureDateChange = (departureDate) => {
    if (departureDate) {
      this.setState(() => ({ departureDate }));
    }
  };

  onFocusArrivalsChange = ({ focused }) => {
    this.setState(() => ({ calendarArrivalsFocused: focused }));
  };

  onFocusDeparturesChange = ({ focused }) => {
    this.setState(() => ({ calendarDeparturesFocused: focused }));
  };
//------------------------------------------
//------------------------------------------
  onAdultsNumChange = (e) => {
    const adultsNum = e.target.value;
    this.setState(() => ({ adultsNum }));
  };

  onAdultsPriceChange = (e) => {
    const adultsPrice = e.target.value;
    this.setState(() => ({ adultsPrice }));
  };

  onAdultsSumMoneyChange = (e) => {
    const adultsSumMoney = e.target.value;
    this.setState(() => ({ adultsSumMoney }));
  };
//-----------------------------------------------
  onChildrenNumChange = (e) => {
    const localvalue = e.target.value;
    this.setState(() => ({ localvalue }));
  };

  onChildrenPriceChange = (e) => {
    const localvalue = e.target.value;
    this.setState(() => ({ localvalue }));
  };

  onChildrenSumMoneyChange = (e) => {
    const localvalue = e.target.value;
    this.setState(() => ({ localvalue }));
  };
//-----------------------------------------------
onChildrenNumChange = (e) => {
  const childrenNum = e.target.value;
  this.setState(() => ({ childrenNum }));
};

onChildrenPriceChange = (e) => {
  const childrenPrice = e.target.value;
  this.setState(() => ({ childrenPrice }));
};

onChildrenSumMoneyChange = (e) => {
  const childrenSumMoney = e.target.value;
  this.setState(() => ({ childrenSumMoney }));
};
//-----------------------------------------------
onCarsNumChange = (e) => {
  const carsNum = e.target.value;
  this.setState(() => ({ carsNum }));
};

onCarsPriceChange = (e) => {
  const carsPrice = e.target.value;
  this.setState(() => ({ carsPrice }));
};

onCarsSumMoneyChange = (e) => {
  const carsSumMoney = e.target.value;
  this.setState(() => ({ carsSumMoney }));
};
//-----------------------------------------------
onMotosNumChange = (e) => {
  const motosNum = e.target.value;
  this.setState(() => ({ motosNum }));
};

onMotosPriceChange = (e) => {
  const motosPrice = e.target.value;
  this.setState(() => ({ motosPrice }));
};

onMotosSumMoneyChange = (e) => {
  const motosSumMoney = e.target.value;
  this.setState(() => ({ motosSumMoney }));
};
//-----------------------------------------------
onCaravansNumChange = (e) => {
  const caravansNum = e.target.value;
  this.setState(() => ({ caravansNum }));
};

onCaravansPriceChange = (e) => {
  const caravansPrice = e.target.value;
  this.setState(() => ({ caravansPrice }));
};

onCaravansSumMoneyChange = (e) => {
  const caravansSumMoney = e.target.value;
  this.setState(() => ({ caravansSumMoney }));
};
//-----------------------------------------------
onSkinesSmallNumChange = (e) => {
  const skinesSmallNum = e.target.value;
  this.setState(() => ({ skinesSmallNum }));
};

onSkinesSmallPriceChange = (e) => {
  const skinesSmallPrice = e.target.value;
  this.setState(() => ({ skinesSmallPrice }));
};

onSkinesSmallSumMoneyChange = (e) => {
  const skinesSmallSumMoney = e.target.value;
  this.setState(() => ({ skinesSmallSumMoney }));
};
//-----------------------------------------------
onSkinesBigNumChange = (e) => {
  const skinesBigNum = e.target.value;
  this.setState(() => ({ skinesBigNum }));
};

onSkinesBigPriceChange = (e) => {
  const skinesBigPrice = e.target.value;
  this.setState(() => ({ skinesBigPrice }));
};

onSkinesBigSumMoneyChange = (e) => {
  const skinesBigSumMoney = e.target.value;
  this.setState(() => ({ skinesBigSumMoney }));
};
//-----------------------------------------------
onPulmansNumChange = (e) => {
  const pulmansNum = e.target.value;
  this.setState(() => ({ pulmansNum }));
};

onPulmansPriceChange = (e) => {
  const pulmansPrice = e.target.value;
  this.setState(() => ({ pulmansPrice }));
};

onPulmansSumMoneyChange = (e) => {
  const pulmansSumMoney = e.target.value;
  this.setState(() => ({ pulmansSumMoney }));
};
//-----------------------------------------------
onSkafiNumChange = (e) => {
  const skafiNum = e.target.value;
  this.setState(() => ({ skafiNum }));
};

onSkafiPriceChange = (e) => {
  const skafiPrice = e.target.value;
  this.setState(() => ({ skafiPrice }));
};

onSkafiSumMoneyChange = (e) => {
  const skafiSumMoney = e.target.value;
  this.setState(() => ({ skafiSumMoney }));
};
//-----------------------------------------------
onPrizesNumChange = (e) => {
  const prizesNum = e.target.value;
  this.setState(() => ({ prizesNum }));
};

onPrizesPriceChange = (e) => {
  const prizesPrice = e.target.value;
  this.setState(() => ({ prizesPrice }));
};

onPrizesSumMoneyChange = (e) => {
  const prizesSumMoney = e.target.value;
  this.setState(() => ({ prizesSumMoney }));
};
//-----------------------------------------------
onThesiChange = (e) => {
  const thesi = e.target.value;
  this.setState(() => ({ thesi }));
};

onNotesChange = (e) => {
  const notes = e.target.value;
  this.setState(() => ({ notes }));
};

onTotaPerDayChange = (e) => {
  const totalPerDay = e.target.value;
  this.setState(() => ({ totalPerDay }));
};

onTotalChange = (e) => {
  const total = e.target.value;
  this.setState(() => ({ total }));
};

onDianikterefseisChange = (e) => {
  const dianikterefseis = e.target.value;
  this.setState(() => ({ dianikterefseis }));
};

onImeresDiamonisChange = (e) => {
  const imeresDiamonis = e.target.value;
  this.setState(() => ({ imeresDiamonis }));
};
//-----------------------------------------------

onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name || !this.state.surname) {
      this.setState(() => ({ error: 'Όνομα και Επίθετο είναι υποχρεωτικά πεδία.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        telephone:this.state.telephone,
        email: this.state.email,
        name: this.state.name,
        fathername: this.state.fathername,
        surname: this.state.surname,
        address: this.state.address,
        docID: this.state.docID,
        plates: this.state.plates,
        arrivalDate: this.state.arrivalDate.valueOf(),
        departureDate: this.state.departureDate.valueOf(),

        adultsNum: this.state.adultsNum,
        adultsPrice: this.state.adultsPrice,
        adultsSumMoney: this.state.adultsSumMoney,
        childrenNum: this.state.childrenNum,
        childrenPrice: this.state.childrenPrice,
        childrenSumMoney: this.state.childrenSumMoney,
        carsNum: this.state.caravansNum,
        carsPrice: this.state.carsPrice,
        carsSumMoney: this.state.caravansSumMoney,
        motosNum: this.state.motosNum,
        motosPrice: this.state.motosPrice,
        motosSumMoney: this.state.motosSumMoney,
        caravansNum: this.state.caravansNum,
        caravansPrice: this.state.caravansPrice,
        caravansSumMoney: this.state.caravansSumMoney,
        skinesSmallNum: this.state.skinesSmallNum,
        skinesSmallPrice: this.state.skinesSmallPrice,
        skinesSmallSumMoney: this.state.skinesSmallSumMoney,
        skinesBigNum: this.state.skinesBigNum,
        skinesBigPrice: this.state.skinesBigPrice,
        skinesBigSumMoney: this.state.skinesBigSumMoney,
        pulmansNum: this.state.pulmansNum,
        pulmansPrice: this.state.pulmansPrice,
        pulmansSumMoney: this.state.pulmansSumMoney,
        skafiNum: this.state.skafiNum,
        skafiPrice: this.state.skafiPrice,
        skafiSumMoney: this.state.skafiSumMoney,
        prizesNum: this.state.prizesNum,
        prizesPrice: this.state.prizesPrice,
        prizesSumMoney: this.state.prizesSumMoney,
        notes: this.state.notes,
        thesi: this.state.thesi,
        //imeresDiamonis: this.state.imeresDiamonis,
        dianikterefseis: this.state.dianikterefseis,
        //totalPerDay: this.state.totalPerDay,
        total: this.state.total
      });
    }
  };
  render() {
    return (

        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
         
          <div className="div-hoc">
            <div className="div-normal-166-left-text">Τηλέφωνο</div>
            <div className="div-normal-166-left-input">
            <input
              type="number"
              placeholder=""
              autoFocus
              className="text-input"
              value={this.state.telephone}
              onChange={this.onTelephoneChange}
            />
            </div>
            <div className="div-normal-166-left-text">email</div>
            <div className="div-normal-166-left-input">
              <input
                type="email"
                placeholder=""
                className="text-input"
                value={this.state.email}
                onChange={this.onEmailChange}
              />
              </div>
          </div>


          <div className="div-hoc">
            <div className="div-normal-166-left-text">Όνομα</div>
            <div className="div-normal-166-left-input">
              <input //Όνομα
                type="text"
                placeholder=""
                className="text-input"
                value={this.state.name}
                onChange={this.onNameChange}
              />
              </div>
            <div className="div-normal-166-left-text">Πατρώνυμο</div>
            <div className="div-normal-166-left-input">
              <input //Πατρώνυμο
                type="text"
                placeholder=""
                className="text-input"
                value={this.state.fathername}
                onChange={this.onFatherNameChange}
              />
            </div>
            <div className="div-normal-166-left-text">Επίθετο</div>
            <div className="div-normal-166-left-input">
              <input //Επίθετο
                type="text"
                placeholder=""
                className="text-input"
                value={this.state.surname}
                onChange={this.onSurnameChange}
              />
            </div>
          </div>

          
          
          <div className="div-hoc">
          <div className="div-normal-166-left-text">Διεύθυνση</div>
          <div className="div-normal-166-left-input">
            <input //Διεύθυνση
              type="text"
              placeholder=""
              className="text-input"
              value={this.state.address}
              onChange={this.onAddressChange}
            />
            </div>
          <div className="div-normal-166-left-text">Αρ. Διαβατηρίου</div>
          <div className="div-normal-166-left-input">
            <input //Αρ. Διαβατηρίου
              type="text"
              placeholder=""
              className="text-input"
              value={this.state.docID}
              onChange={this.onDocIDChange}
            />
            </div>
          <div className="div-normal-166-left-text">Πινακίδες οχήματος</div>
          <div className="div-normal-166-left-input">
            <input //Πινακίδες οχήματος
              type="text"
              placeholder=""
              className="text-input"
              value={this.state.plates}
              onChange={this.onPlatesChange}
            /></div>
          </div>



          <div>
            <h3>Ημερομηνίες άφιξης-αναχώρησης</h3>
            <div className="date-picker-left">
              <p>Άφιξη  &nbsp;
              <SingleDatePicker
              date={this.state.arrivalDate} // momentPropTypes.momentObj or null
              onDateChange={this.onArrivalDateChange} // PropTypes.func.isRequired
              focused={this.state.calendarArrivalsFocused}
              onFocusChange={this.onFocusArrivalsChange}
              id="your_unique_id" // PropTypes.string.isRequired,
              numberOfMonths={1}             
              displayFormat="DD/MM/YYYY"
              isOutsideRange={() => false}      
      
              /></p>
            </div>
            <div className="date-picker-right">
              <p>Πιθανή Αναχώρηση &nbsp;
              <SingleDatePicker
                date={this.state.departureDate} 
                onDateChange={this.onDepartureDateChange}
                focused={this.state.calendarDeparturesFocused}
                onFocusChange={this.onFocusDeparturesChange}
                id="your_unique_id2" // PropTypes.string.isRequired,
                numberOfMonths={1}             
                displayFormat="DD/MM/YYYY"
                isOutsideRange={() => false}    
              /></p>            
            </div>
        </div>


        <div className="div-hoc">
          <div className="div-normal-25-left-text">Αριθμός ενηλίκων</div>
          <div className="div-normal-7-left-input">
          <input //ENILIKES
              type="number"
              placeholder="0"
              className="text-input"
              value={this.state.adultsNum}
              onChange={this.onAdultsNumChange}
            />
            </div>
          <div className="div-normal-25-left-text">Τιμή ανά ενήλικα</div>
          <div className="div-normal-7-left-input">
          <input  //TIMI ANA ENILIKA
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.adultsPrice}
              onChange={this.onAdultsPriceChange}
            />
            </div>
          <div className="div-normal-25-left-text">Σύνολο για ενήλικες</div>
          <div className="div-normal-7-left-input">
          <input //SINOLO XRIMATON
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.adultsSumMoney}
              onChange={this.onAdultsSumMoneyChange}
            />
            </div> 
        </div>


        <div className="div-hoc">
          <div className="div-normal-25-left-text">Αριθμός παιδιών έως 10 ετών</div>
          <div className="div-normal-7-left-input">
          <input // Παιδιά έως 10 ετών
              type="number"
              placeholder="0"
              className="text-input"
              value={this.state.childrenNum}
              onChange={this.onChildrenNumChange}
            />
            </div>
          <div className="div-normal-25-left-text">Τιμή ανά παιδί</div>
          <div className="div-normal-7-left-input">
          <input //Τιμή ανά παιδί
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.childrenPrice}
              onChange={this.onChildrenPriceChange}
            />
            </div>
          <div className="div-normal-25-left-text">Σύνολο για παιδιά</div>
          <div className="div-normal-7-left-input">
          <input //Σύνολο χρημάτων
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.childrenSumMoney}
              onChange={this.onChildrenSumMoneyChange}
            />
            </div>     
        </div>

        <div className="div-hoc">
          <div className="div-normal-25-left-text">Αριθμός αυτοκινήτων</div>
          <div className="div-normal-7-left-input">
          <input //Αυτοκίνητα
              type="number"
              placeholder="0"
              className="text-input"
              value={this.state.carsNum}
              onChange={this.onCarsNumChange}
            />
            </div>
          <div className="div-normal-25-left-text">Τιμή ανά αυτοκίνητο</div>
          <div className="div-normal-7-left-input">
          <input //Τιμή αυτοκινήτου
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.carsPrice}
              onChange={this.onCarsPriceChange}
            />
            </div>
          <div className="div-normal-25-left-text">Σύνολο για αυτοκίνητα</div>
          <div className="div-normal-7-left-input">
          <input //Σύνολο χρημάτων
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.carsSumMoney}
              onChange={this.onCarsSumMoneyChange}
            />
            </div> 
        </div>

    <div className="div-hoc">
          <div className="div-normal-25-left-text">Αριθμός Μοτοσυκλετών</div>
          <div className="div-normal-7-left-input">
          <input //Μοτοσυκλέτες
              type="number"
              placeholder="0"
              className="text-input"
              value={this.state.motosNum}
              onChange={this.onMotosNumChange}
            />
            </div>
          <div className="div-normal-25-left-text">Τιμή ανά μοτοσυκλέτα</div>
          <div className="div-normal-7-left-input">
          <input //Τιμή μοτοσυκλέτας
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.motosPrice}
              onChange={this.onMotosPriceChange}
            />
            </div>
          <div className="div-normal-25-left-text">Σύνολο για μοτοσυκλέτες</div>
          <div className="div-normal-7-left-input">
          <input //Σύνολο χρημάτων
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.motosSumMoney}
              onChange={this.onMotosSumMoneyChange}
            />
            </div>  
        </div>

    <div className="div-hoc">
          <div className="div-normal-25-left-text">Αριθμός τροχοσκηνών</div>
          <div className="div-normal-7-left-input">
          <input //Τροχόσπιτα-τροχοσκηνές
              type="number"
              placeholder="0"
              className="text-input"
              value={this.state.caravansNum}
              onChange={this.onCaravansNumChange}
            />
            </div>
          <div className="div-normal-25-left-text">Τιμή τροχοσκηνής</div>
          <div className="div-normal-7-left-input">
          <input //Τιμή μονάδας
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.caravansPrice}
              onChange={this.onCaravansPriceChange}
            />
            </div>
          <div className="div-normal-25-left-text">Σύνολο για τροχοσκηνές</div>
          <div className="div-normal-7-left-input">
          <input //Σύνολο χρημάτων
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.caravansSumMoney}
              onChange={this.onCaravansSumMoneyChange}
            />
            </div> 
        </div>

    <div className="div-hoc">
          <div className="div-normal-25-left-text">Αριθμός μικρών σκηνών</div>
          <div className="div-normal-7-left-input">
          <input //Μικρές σκηνές
              type="number"
              placeholder="0"
              className="text-input"
              value={this.state.skinesSmallNum}
              onChange={this.onSkinesSmallNumChange}
            />
            </div>
          <div className="div-normal-25-left-text">Τιμή ανά μικρή σκηνή</div>
          <div className="div-normal-7-left-input">
          <input //Τιμή μονάδας
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.skinesSmallPrice}
              onChange={this.onSkinesSmallPriceChange}
            />
            </div>
          <div className="div-normal-25-left-text">Σύνολο για μικρές σκηνές</div>
          <div className="div-normal-7-left-input">
          <input //Σύνολο χρημάτων
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.skinesSmallSumMoney}
              onChange={this.onSkinesSmallSumMoneyChange}
            />
            </div> 
        </div>

    <div className="div-hoc">
          <div className="div-normal-25-left-text">Αριθμός μεγάλων σκηνών</div>
          <div className="div-normal-7-left-input">
          <input //Μεγάλες σκηνές
              type="number"
              placeholder="0"
              className="text-input"
              value={this.state.skinesBigNum}
              onChange={this.onSkinesBigNumChange}
            />
            </div>
          <div className="div-normal-25-left-text">Τιμή ανά μεγάλη σκηνή</div>
          <div className="div-normal-7-left-input">
          <input //Τιμή μονάδας
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.skinesBigPrice}
              onChange={this.onSkinesBigPriceChange}
            />
            </div>
          <div className="div-normal-25-left-text">Σύνολο για μεγάλες σκηνές</div>
          <div className="div-normal-7-left-input">
          <input //Σύνολο χρημάτων
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.skinesBigSumMoney}
              onChange={this.onSkinesBigSumMoneyChange}
            />
            </div>   
        </div>

    <div className="div-hoc">
          <div className="div-normal-25-left-text">Αριθμός πούλμαν</div>
          <div className="div-normal-7-left-input">
          <input //Πούλμαν
              type="number"
              placeholder="0"
              className="text-input"
              value={this.state.pulmansNum}
              onChange={this.onPulmansNumChange}
            />
            </div>
          <div className="div-normal-25-left-text">Τιμή ανά πούλμαν</div>
          <div className="div-normal-7-left-input">
          <input //Τιμή μονάδας
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.pulmansPrice}
              onChange={this.onPulmansPriceChange}
            />
            </div>
          <div className="div-normal-25-left-text">Σύνολο για πούλμαν</div>
          <div className="div-normal-7-left-input">
          <input //Σύνολο χρημάτων
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.pulmansSumMoney}
              onChange={this.onPulmansSumMoneyChange}
            />
            </div> 
        </div>

        <div className="div-hoc">
          <div className="div-normal-25-left-text">Αριθμός σκαφών με τρέιλερ</div>
          <div className="div-normal-7-left-input">
          <input //Σκάφος με τρέιλερ
              type="number"
              placeholder="0"
              className="text-input"
              value={this.state.skafiNum}
              onChange={this.onSkafiNumChange}
            />
            </div>
          <div className="div-normal-25-left-text">Τιμή ανά σκάφος με τρέιλερ</div>
          <div className="div-normal-7-left-input">
          <input //Τιμή μονάδας
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.skafiPrice}
              onChange={this.onSkafiPriceChange}
            />
            </div>
          <div className="div-normal-25-left-text">Σύνολο για σκάφη με τρέιλερ</div>
          <div className="div-normal-7-left-input">
          <input //Σύνολο χρημάτων
              type="text"
              placeholder="0"
              className="text-input"
              value={this.state.skafiSumMoney}
              onChange={this.onSkafiSumMoneyChange}
            />
            </div> 
        </div>

        <div className="div-hoc">
          <div className="div-normal-25-left-text">Αριθμός πριζών</div>
          <div className="div-normal-7-left-input">
            <input //Πρίζες
                type="number"
                placeholder="0"
                className="text-input"
                value={this.state.prizesNum}
                onChange={this.onPrizesNumChange}
              />
          </div>
          <div className="div-normal-25-left-text">Τιμή ανά πρίζα</div>
          <div className="div-normal-7-left-input">
            <input //Τιμή μονάδας
                type="text"
                placeholder="0"
                className="text-input"
                value={this.state.prizesPrice}
                onChange={this.onPrizesPriceChange}
              />
          </div>
          <div className="div-normal-25-left-text">Σύνολο για πρίζες</div>
          <div className="div-normal-7-left-input">
            <input //Σύνολο χρημάτων
                type="text"
                placeholder="0"
                className="text-input"
                value={this.state.prizesSumMoney}
                onChange={this.onPrizesSumMoneyChange}
              />
          </div> 
        </div>    

        <div className="div-hoc">      
          <div className="div-normal-25-left-text">Τελικό Σύνολο χρημάτων</div>
          <div className="div-normal-7-left-input">
            <input //Τελικό Σύνολο χρημάτων
                type="text"
                placeholder="0"
                className="text-input"
                value={this.state.total}
                onChange={this.onTotalChange}
              />
          </div>  
          <div className="div-normal-25-left-text">Ημέρες Διαμονής</div>
          <div className="div-normal-7-left-input">
            <input //Ημέρες Διαμονής
                type="number"
                placeholder="0"
                className="text-input"
                value={this.state.imeresDiamonis}
                onChange={this.onImeresDiamonisChange}
              /></div>
          <div className="div-normal-25-left-text">Σύνολο ανά διανυκτέρευση</div>
          <div className="div-normal-7-left-input">
            <input //Σύνολο ανά διανυκτέρευση
                type="text"
                placeholder="0"
                className="text-input"
                value={this.state.totalPerDay}
                onChange={this.onTotaPerDayChange}
              />
          </div>  
          </div>          
                     

        {/* //empty rows                      */}
        <div className="div-hoc"></div> 
        <div className="div-hoc"></div> 

        <div className="div-hoc">
          <div className="div-normal-166-left-text">Παρατηρήσεις</div>
          <div className="div-normal-166-left-input">
          <textarea   //Παρατηρήσεις
              type="text"
              placeholder=""
              className="textarea"
              value={this.state.notes}
              onChange={this.onNotesChange}
            />
          </div>

          <div className="div-normal-25-left-text">Θέση</div>
          <div className="div-normal-7-left-input">
            <input //Θέση
                type="text"
                placeholder="0"
                className="text-input"
                value={this.state.thesi}
                onChange={this.onThesiChange}
              />
          </div>

          <div className="div-normal-25-left-text">Διανυκτερεύσεις</div>
          <div className="div-normal-7-left-input">
            <input //Διανυκτερεύσεις
                type="number"
                placeholder="0"
                className="text-input"
                value={this.state.dianikterefseis}
                onChange={this.onDianikterefseisChange}
              /></div>  

        </div>
        
          <div className="div-hoc">
            <div className="div-left">
              <button className="button">Αποθήκευση</button>
            </div>

            <div className="div-right">
            <Link  to="/dashboard"><button className="button">Άκυρο</button></Link>
            </div>
        </div>    
        </form>

    )
  }
}
