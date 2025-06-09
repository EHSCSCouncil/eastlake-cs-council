'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Table from '@/components/programs/Table';
import TextBox from '@/components/programs/TextBox';
import FAQ from '@/components/programs/FAQ';
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('@/components/programs/PDFViewer'), {
  ssr: false,
});
import Link from 'next/link';
import Image from 'next/image';
export default function PackHack() {
    
  const faqs = [
    { question: 'What is the difference between the beginner and advanced division?', answer: 'The beginner division works on more structured projects, such as a quiz app. You should have received an email with the beginner project descriptions. The advanced division is open to all ideas you have.' },
    { question: 'What programming languages can I use?', answer: 'Anything goes! Just be sure to include a README.md which describes how we can run your code.' },
    { question: 'Do I get any help?', answer: 'Yes! See the links and times above. Alternatively, email ehscscouncil@gmail.com and cc either 1048962@lwsd.org or 1082650@lwsd.org' },
    { question: 'What resources can I use?', answer: 'Google, documentation, online tutorials, forums, and us volunteers are all good resources! Please write all your code yourself though and do not copy anything.'},
    { question: 'Can I use a past project?', answer: 'No. Any submissions must be entirely created within the competition timeframe.'},
    {question: "Wait! I have more questions!", answer: 'email ehscscouncil@gmail.com and cc either 1048962@lwsd.org or 1082650@lwsd.org.'}
  ];

  const events = [
  { name: 'Competition Starts', date: 'June 8', location: 'Virtual', details: 'Good luck!'},
  {  name: 'Q&A or Coding Support', date: 'June 8', location: 'https://meet.google.com/vhg-abmw-dsq', details: "Come ask questions or get support in anything related to the hackathon!"}, 
  { name: '', date: 'June 9 5-6 PM', location: 'https://meet.google.com/smt-avfc-tzq' }, 
  { name: '', date: 'June 10 5-6 PM', location: 'https://meet.google.com/cnk-cogm-cia' },
  { name: '', date: 'June 11 5-6 PM', location: 'https://meet.google.com/jvz-icof-ipx' }, 
  { name: '', date: 'June 12 5-6 PM', location: 'https://meet.google.com/pkt-ujce-eyo' }, 
  { name: '', date: 'June 13 5-6 PM', location: 'https://meet.google.com/yxg-xeid-zww' }, 
  { name: '', date: 'June 14 5-6 PM', location: 'https://meet.google.com/fqo-jkir-szf' }, 
  {name: 'Due date', date: 'June 14 11:59 PM PST', location: 'Virtual', details: 'Remember your video and repository!'}
];

  return (
    <div>
 
      <main className="min-h-screen bg-gray-100">
        <Header />
        <h1 className="text-5xl font-bold mb-6 text-center py-8"> PackHacks</h1>
        <h3 className="mb-6 text-center px-20"> Are you a middle school or advanced elementary school student looking for a fun way to grow your CS skills? We welcome you to our virtual, accessible hackathon from June 8 to 14, open to all skill levels. Signups open until submission date at <Link href = "http://forms.office.com/r/NF5jdGt7ah"> http://forms.office.com/r/NF5jdGt7ah</Link>.</h3>
         <Table events={events} />
        <TextBox
          title="Guidelines"
          description={<div><p>TLDR: Work in teams of 1-4 to create a code repository and presentation video. Beginner division features defined programming projects with explicit target goals. Advanced division requires an open-ended project around environmental sustainability. </p><PDFViewer fileUrl = "/PackHack.pdf"/></div>}
        />
        <TextBox
            title = "Sign up"
            description = {<div className="flex justify-center">
      <Image
        src="/PackHack 2025 Flyer.jpg"
        width={500}
        height={500}
        alt="A flyer"
      />
    </div>}
        />

        <FAQ faqs={faqs} />
      </main>

      <Footer />
    </div>
  );
}
/*
export const metadata = {
    title: 'PackHacks 2025',
    link: "/favicon.ico"
  }
    */
  