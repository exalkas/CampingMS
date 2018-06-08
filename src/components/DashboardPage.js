import React from 'react';
import ClientList from './ClientList';
import ClientListFilters from './ClientListFilters';
import ClientsSummary from './ClientsSummary';
import ReactTable from "react-table";


// const data = [
//   {firstname:'Alkis',  lastname:'Kastris'},
//   {firstname:'Kostas', lastname:'Papis'},
//   {firstname:'Kostas3', lastname:'Papis3'},
//   {firstname:'Kostas4', lastname:'Papis4'},
//   {firstname:'Kostas5', lastname:'Papis5'}
// ];

// const columns=[
// {Header: "Όνομα",accessor:"firstname"},
// {Header: "Επίθετο",accessor:"lastname"}

// ];

const DashboardPage = () => (
  <div>

    <ClientsSummary />
    <ClientListFilters />
    <ClientList />


      {/* <ReactTable
data={data}
columns={columns}
/> */}
  </div>
);

export default DashboardPage;
