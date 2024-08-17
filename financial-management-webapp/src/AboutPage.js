import React, { useState } from 'react';
import Header from './components/Header';

function AboutPage() {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow sm:p-8">
        <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md w-full sm:max-w-md overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">About Us</h1>
          <hr/>

          <div className="mb-4 my-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsWelcomeOpen(!isWelcomeOpen)}
            >
              <h4 className="block text-gray-700 font-bold mb-2">
                Welcome to KK Financial Management!
              </h4>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isWelcomeOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {isWelcomeOpen && (
              <div className="mt-2">
                <p>
                  At KK Financial Management, we are committed to helping you take
                  control of your finances with ease. Our mission is to provide
                  you with intuitive tools for tracking expenses, calculating
                  budgets, and gaining valuable budget insights to make informed
                  financial decisions.
                </p>
              </div>
            )}
          </div>
          <hr/>

          <div className="mb-4 my-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsStoryOpen(!isStoryOpen)}
            >
              <h4 className="block text-gray-700 font-bold mb-2">Our Story</h4>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isStoryOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {isStoryOpen && (
              <div className="mt-2">
                <p>
                  Founded in 2024 by Jun Thye, Kai Wen, and Cheryl. Financial
                  Management was created out of a passion for financial
                  empowerment. Our journey began with a simple idea: to calculate
                  a budget for spendings for financial management. Since then, we
                  have been dedicated to developing innovative solutions to help
                  you stay on top of your spending and achieve your financial
                  goals.
                </p>
              </div>
            )}
          </div>
          <hr/>

          <div className="mb-4 my-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsTeamOpen(!isTeamOpen)}
            >
              <h4 className="block text-gray-700 font-bold mb-2">
                Meet The Team
              </h4>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isTeamOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {isTeamOpen && (
              <div className="mt-2">
                <p>
                  Our team is made up of students pursuing their degree in Monash
                  who are all passionate about helping you succeed. Here are a
                  few of our key team members:
                </p>
                <p>Jun Thye (Bachelor of Computer Science in Data Science)</p>
                <p>Kai Wen (Bachelor of Computer Science)</p>
                <p>Cheryl (Bachelor of Computer Science in Data Science)</p>
              </div>
            )}
          </div>
          <hr/>

          <div className="mb-4 my-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsContactOpen(!isContactOpen)}
            >
              <h4 className="block text-gray-700 font-bold mb-2">
                Get in Touch
              </h4>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isContactOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {isContactOpen && (
              <div className="mt-2">
                <p>
                  We value your feedback and are here to help you with any
                  questions or suggestions.
                </p>
                <p>
                  Thank you for choosing KK Financial Management as your partner
                  in financial management. We look forward to helping you achieve
                  your financial goals!
                </p>
              </div>
            )}
          </div>
          <hr/>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;