import { aboutMe } from "../components/About/About.ts";
import { AboutHeader } from "../components/About/AboutHeader";
import { ExperienceTimeline } from "../components/About/Experience";
import { TechStack } from "../components/About/TechStack";

const About = () => {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-10 w-full">
      <h2 className="text-white text-3xl font-bold mb-6 text-center">About Me</h2>

      <div className="bg-[#2b1e34] text-gray-300 p-6 rounded-xl shadow-md max-w-4xl mx-auto mb-12">
        <AboutHeader 
          name={aboutMe.name}
          title={aboutMe.title}
          description={aboutMe.summary}
        />

        {/* Tech Stack (opsiyonel olarak kullanılabilir) */}
        {aboutMe.skills && <TechStack skills={aboutMe.skills} />}

        {/* Experience */}
        {aboutMe.experience && (
          <ExperienceTimeline
            experiences={aboutMe.experience.map(exp => ({
              year: exp.duration || "", // or extract year from duration if needed
              company: exp.company,
              role: exp.position,
              details: exp.description,
            }))}
          />
        )}

        {/* Education */}
{aboutMe.education && (
  <div className="mt-10">
    <h3 className="text-white text-xl font-bold mb-6 text-center">Education</h3>
    <div className="grid gap-4">
      {aboutMe.education.map((edu, idx) => (
        <div
          key={idx}
          className="bg-[#3d2843] p-4 rounded-lg shadow-md flex flex-col md:flex-row md:justify-between md:items-center"
        >
          <div>
            <p className="text-white font-semibold text-md">{edu.degree}</p>
            <p className="text-sm text-gray-400">{edu.institution}</p>
          </div>
          <div className="text-sm text-gray-300 mt-2 md:mt-0">
            {edu.duration}
                  {edu.gpa && (
            <p className="text-sm text-gray-400">GPA: {edu.gpa}</p>
          )}
          </div>
    

        </div>
      ))}
    </div>
  </div>
)}

      </div>
    </section>
  );
};

export default About;