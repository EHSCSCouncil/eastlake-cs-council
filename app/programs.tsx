import React from 'react';
import Layout from './layout';

const Programs: React.FC = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Programs</h2>
        <p className="text-gray-700 leading-relaxed">
          Description of the programs offered.
        </p>
      </section>
    </Layout>
  );
};

export default Programs;