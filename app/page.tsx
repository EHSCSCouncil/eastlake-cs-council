import React from 'react';
import Head from 'next/head';
import Layout from './layout';
import Slideshow from '@/components/Slideshow';
import Nameplate from '@/components/Nameplate';
import EventSchedule from '@/components/EventSchedule';
import EventContentBlock from '@/components/EventContentBlock';
import Sponsors from '@/components/Sponsors';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>CS Outreach Council</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <img
          src="/path/to/your/background.jpg" // Update this path to your actual image path
          alt="Background"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">Hands-on Learning Experiences</h1>
        </div>
      </div>
      <section className="container mx-auto px-4 py-16">
        <Nameplate name="Name" position="President" avatarUrl="/path/to/avatar.jpg" />
        <EventSchedule />
        <EventContentBlock title="Sample Event" description="This is a sample event description." date="2024-08-10" />
        <Sponsors />
      </section>
    </Layout>
  );
};

export default Home;