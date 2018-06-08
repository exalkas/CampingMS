import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
//import numeral from 'numeral';

const ClientListItem = ({ id, telephone, email, name, fathername, surname, address, docID, plates, arrivalDate, departureDate, adultsNum, adultsPrice, adultsSumMoney, childrenNum,childrenPrice, childrenSumMoney, carsNum, carsPrice, carsSumMoney, motosNum, motosPrice, motosSumMoney, caravansNum, caravansPrice, caravansSumMoney, skinesSmallNum, skinesSmallPrice, skinesSmallSumMoney, skinesBigNum, skinesBigPrice, skinesBigSumMoney, pulmansNum, pulmansPrice, pulmansSumMoney, skafiNum, skafiPrice, skafiSumMoney, prizesNum, prizesSumMoney, notes, thesi, total }) => (

    <tr >     
      <td className="row-item">{name}</td>
      <td className="row-item">{surname}</td>
      <td className="row-item">{telephone}</td>  
      <td className="row-item">{email}</td>  
      <td className="row-item">{address}</td>  
      <td className="row-item">{docID}</td>  
      <td className="row-item">{plates}</td> 
      <td className="row-item">{moment(arrivalDate).format('DD/MM/YY')}</td>
      <td className="row-item">{moment(departureDate).format('DD/MM/YY')}</td>
      <td className="row-item"><Link className="list-item" to={`/edit/${id}`}><button className="button">Αλλαγή</button></Link></td> 
    </tr>

);

export default ClientListItem;