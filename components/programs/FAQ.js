'use client';
import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left focus:outline-none"
      >
        <h3 className="text-lg font-bold text-gray-800">{question}</h3>
      </button>
      {isOpen && <p className="mt-2 text-gray-700">{answer}</p>}
    </div>
  );
}

export default function FAQ({ faqs }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

