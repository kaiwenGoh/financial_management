import React from 'react';
import Button from './components/HomeButton'
import Header from './components/Header';

function HomePage() {
  return ( 
    <div>
      <Header/>
      <div class="relative flex min-h-screen items-center justify-center gap-x-4 overflow-hidden py-6 sm:py-12">
          <Button value = "Expense Tracking"/>
          <Button value = "Budget Analysis"/>
      </div>
    </div>

  );
}

export default HomePage;
