import React from 'react';
import ClientList from './ClientList';
import ClientListFilters from './ClientListFilters';
import ClientsSummary from './ClientsSummary';



const DashboardPage = () => (
  <div>

    <ClientsSummary />
    <ClientListFilters />
    <ClientList />
  </div>
);

export default DashboardPage;
