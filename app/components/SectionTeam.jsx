"use client";

import Image from 'next/image';

function CardTeamMember({ name, role, imgSrc }) {
  return (
    <div className="bg-base-200 rounded-lg overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-64 w-full">
        <Image
          src={imgSrc}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-base-content/70">{role}</p>
      </div>
    </div>
  );
}

export function TeamSection() {
  const teamMembers = [
    { name: 'Alex Rivera', role: 'Founder & CEO', imgSrc: '/images/team/alex.webp' },
    { name: 'Morgan Chen', role: 'CTO', imgSrc: '/images/team/morgan.webp' },
    { name: 'Sam Thompson', role: 'Lead Designer', imgSrc: '/images/team/sam.webp' },
    { name: 'Jordan Lee', role: 'Head of Product', imgSrc: '/images/team/jordan.webp' }
  ];

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content">Meet Our Team</h2>
        <p className="text-base-content/80 mt-4 max-w-2xl mx-auto">
          Our diverse team brings together expertise from various fields to create the best developer experience.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <CardTeamMember key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}