import React from 'react';
import ClientList from './ClientList';
import ClientListAdmin from './ClientListAdmin';
import ClientListFilters from './ClientListFilters';
import ClientListFiltersAdmin from './ClientListFiltersAdmin';
import ClientsSummary from './ClientsSummary';
import ClientsSummaryAdmin from './ClientsSummarAdmin';
import { firebase } from '../firebase/firebase';





const DashboardPage = () => { 
  const uid = firebase.auth().currentUser;
  return (
  <div>

    {uid.email=='rdxtbl@gmail.com' || uid.email=='dermatakis@gmail.com' ?  <ClientsSummaryAdmin /> : <ClientsSummary />}
    
    {uid.email=='rdxtbl@gmail.com' || uid.email=='dermatakis@gmail.com' ?  <ClientListFiltersAdmin /> : <ClientListFilters />}
    {uid.email=='rdxtbl@gmail.com' || uid.email=='dermatakis@gmail.com' ?  <ClientListAdmin /> : <ClientList />}
    
  </div>
);}

export default DashboardPage;
