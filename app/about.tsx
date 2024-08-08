import React from 'react';
import Layout from './layout';

const About: React.FC = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">About CS Council</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to empower the next generation of computer scientists through hands-on learning experiences and community engagement.
        </p>
      </section>
    </Layout>
  );
};

export default About;