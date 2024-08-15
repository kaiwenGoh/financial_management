import React from 'react';
import Header from './components/Header';

function AboutPage() {
  return (
    <div>
      <Header/>
      <div className="flex flex-col items-center justify-center flex-grow sm:p-8">
        <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md w-full sm:max-w-md overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">About Us</h1>
          <div className="mb-4">
            <h4 className="block text-gray-700 font-bold mb-2">Welcome to KK Financial Management! </h4>
            <h1 className="flex items-center mb-2">At KK Financial Management, we are committed to helping you take control of your finances with ease. Our mission is to provide you with intuitive tools for tracking expenses, calculating budgets, and gaining valuable budget insights to make informed financial decisions.</h1>
          </div>
          <div className="mb-4">
            <h4 className="block text-gray-700 font-bold mb-2">Our Story</h4>
            <h1 className="flex items-center mb-2">Founded in 2024 by Jun Thye, Kai Wen, and Cheryl. Financial Management was created out of a passion for financial empowerment. Our journey began with a simple idea: to calculate a budget for spendings for financial management. Since then, we have been dedicated to developing innovative solutions to help you stay on top of your spending and achieve your financial goals.</h1>
          </div>
          <div className="mb-4">
            <h4 className="block text-gray-700 font-bold mb-2">Meet The Team</h4>
            <h1 className="flex items-center mb-2">Our team is made up of students pursuing their degree in Monash who are all passionate about helping you succeed. Here are a few of our key team members: </h1>
            <h1 className="flex items-center mb-2">Jun Thye (Bachelor of Computer Science in Data Science)</h1>
            <h1 className="flex items-center mb-2">Kai Wen (Bachelor of Computer Science)</h1>
            <h1 className="flex items-center mb-2">Cheryl (Bachelor of Computer Science in Data Science)</h1>
          </div>
          <div className="mb-4">
            <h4 className="block text-gray-700 font-bold mb-2">Get in Touch</h4>
            <h1 className="flex items-center mb-2">We value your feedback and are here to help you with any questions or suggestions.</h1>
            <h1 className="flex items-center mb-2">Thank you for choosing KK Financial Management as your partner in financial management. We look forward to helping you achieve your financial goals!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
