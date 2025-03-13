import Image from 'next/image';
import { TeamSection } from '../component/SectionTeam';
import { MissionSection } from '../component/SectionMission';
import { StatsSection } from '../component/SectionStats';
 
// Metadata can only be exported from Server Components
export const metadata = {
  title: 'About Us | ShipFast',
  description: 'Learn about our mission, team, and achievements',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content">
          Our Story
        </h1>
        <div className="max-w-2xl">
          <p className="text-lg text-base-content/80">
            We're building the future of web development, one project at a time.
            Our mission is to help developers ship faster without compromising on quality.
          </p>
        </div>
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden mt-8">
          <Image
            src="/images/team-photo.webp"
            alt="Our team collaborating"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Mission Section */}
      <MissionSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Team Section */}
      <TeamSection />
    </div>
  );
}