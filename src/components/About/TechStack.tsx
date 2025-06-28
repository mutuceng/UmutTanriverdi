interface SkillProps {
  skills: string[];
}

export const TechStack = ({ skills }: SkillProps) => (
  <div className="mb-12">
    <h4 className="text-white text-xl font-semibold mb-3">Tech Stack</h4>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-fuchsia-800/20 border border-fuchsia-400 text-fuchsia-300 px-4 py-2 rounded-full text-sm shadow-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);