interface Experience {
  year: string;
  role: string;
  company: string;
  details: string;
}

interface ExperienceProps {
  experiences: Experience[];
}

export const ExperienceTimeline = ({ experiences }: ExperienceProps) => (
  <div>
    <h4 className="text-white text-xl font-semibold mb-3">Experience</h4>
    <div className="relative border-l-2 border-fuchsia-400 pl-6">
      {experiences.map((exp, idx) => (
        <div key={idx} className="mb-8 relative">
          <div className="absolute -left-3 top-1.5 w-3 h-3 bg-fuchsia-400 rounded-full"></div>
          <div className="text-white font-bold text-md m-1.5">{exp.year} - {exp.role}</div>
          <div className="text-sm italic text-gray-400">{exp.company}</div>
          <div className="text-sm mt-1 text-gray-300">{exp.details}</div>
        </div>
      ))}
    </div>
  </div>
);