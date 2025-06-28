// 📁 pages/ProjectDetail.tsx
import { useParams } from 'react-router-dom';
import { projects } from '../components/Projects/Projects';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const ProjectDetail = () => {
  const { id } = useParams();
  const projectIndex = parseInt(id || '0', 10);
  const project = projects[projectIndex];
  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) {
    return <div className="text-white text-center mt-10">Project not found.</div>;
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? project.imageUrls.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === project.imageUrls.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="px-6 md:px-20 lg:px-40 py-10 w-full">
      <h1 className="text-white text-4xl font-bold mb-6 text-center">{project.title}</h1>

      {/* 🎠 Carousel */}
      <div className="relative w-full max-w-3xl mx-auto mb-8">
        <img
          src={project.imageUrls[activeIndex]}
          alt={`project-${activeIndex}`}
          className="rounded-xl max-h-96 w-full object-cover shadow-md"
        />
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          ▶
        </button>
      </div>

      {/* 📝 Açıklama */}
      <div className="bg-[#2b1e34] p-6 rounded-lg shadow-md max-w-3xl mx-auto mb-8 text-gray-300 leading-relaxed space-y-4">
        {project.longDescription
          ? project.longDescription.split('\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))
          : <p>{project.description}</p>
        }
      </div>

      {/* 🧰 Tech Stack */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="bg-[#3d2843] text-fuchsia-300 px-3 py-1 rounded-full text-sm border border-fuchsia-500"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* 🔗 Bağlantılar */}
      <div className="flex justify-center gap-6">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-fuchsia-400 hover:underline"
          >
            <Github size={18} /> GitHub
          </a>
        )}
        {project.liveDemoUrl && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-fuchsia-400 hover:underline"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;