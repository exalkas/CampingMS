import React from 'react';
import ClientList from './ClientList';
import ClientListFilters from './ClientListFilters';
import ClientsSummary from './ClientsSummary';
import ReactTable from "react-table";

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
