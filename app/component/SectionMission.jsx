"use client";

export function MissionSection() {
    return (
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">Our Mission</h2>
          <p className="text-base-content/80">
            We believe that developers should focus on creating value, not wrestling with boilerplate code.
            Our stack is designed to eliminate repetitive tasks and provide a solid foundation for building
            modern web applications.
          </p>
          <ul className="space-y-3">
            {['Speed', 'Quality', 'Scalability', 'Developer Experience'].map((value) => (
              <li key={value} className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-base-200 p-8 rounded-lg">
          <blockquote className="text-xl italic">
            "ShipFast has transformed how we build and deploy web applications. What used to take weeks now takes days."
            <footer className="mt-4 text-base-content/70 text-base not-italic">
              — Jane Cooper, CTO at TechForward
            </footer>
          </blockquote>
        </div>
      </section>
    );
  }