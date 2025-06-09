
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Table from '@/components/programs/Table';
import TextBox from '@/components/programs/TextBox';
import FAQ from '@/components/programs/FAQ';

export default function Page2024() {
  const events = [
    
    { name: 'Hour of Code', date: 'December 2024', location: 'Elementary Schools Across the District', details: "Introduced dozens of classrooms of elementary school and middle school students to fascinating computer science concepts"},
    { name: 'Codefest', date: 'March 2025', location: 'Eastlake High School', details: "STEM Fair event, hosted with Eastlake Math Honor Society, for 250+ participants"},
    { name: 'PackHacks', date: 'June 2025', location: 'Virtual', details: "Our weeklong virtual hackathon."},
    
  ];

  return (
    <div>
 
      <main className="min-h-screen bg-gray-50">
        <Header />
        <h1 className="text-3xl font-bold mb-6 text-center py-8"> Events in the 2024-2025 School Year</h1>
        
        <Table events={events} />
        
        <TextBox
          title="Hour of Code"
          description="CS Council's Hour of Code is a part of a nationwide Hour of Code effort focused on introducing younger students to computer science. Participants engage in hands-on activities aimed at demonstrating the possibilities of CS. This year, we revamped our workshops situated in modern developments, such as cybersecurity, computer vision, large language models, cryptography and more.  Through these fun activities, students learn the basics of programming and the enormous range of CS applications. This initiative aims to inspire the next generation of tech leaders.."
        />
        <TextBox
          title="Codefest"
          description="The CodeFest was a STEM fair aimed at highlighting the richness of computer science and math to elementary and middle school students. Through workshops in data science, AI, quantum computing, and more, the CodeFest caters to our youngest generation of aspiring computer scientists. This year, we collaborated with Eastlake's Math Honor Society and a local robotics team to display a wider range of STEM disciplines."
        />
        <TextBox
          title="PackHack"
          description="PackHack is a hackathon hosted by Eastlake CS Council, aimed at broadening students' awareness and insight into topics of relevance in CS. PackHack aspires to encourage middle school students to strengthen their programming abilities working on challenging and fun projects. This year, to make our event more accessible for students, we shifted towards more defined coding projects in lieu of the traditional hackathon format."
        />
      </main>

      <Footer />
    </div>
  );
}
export const metadata = {
    title: 'PAST 2024-2025',
    link: "/favicon.ico"
  }
  