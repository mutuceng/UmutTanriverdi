import type { Project } from './Projects.ts';
import { Github, ExternalLink } from 'lucide-react';

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="bg-[#2b1e34] rounded-2xl shadow-md p-6 w-full h-[500px] flex flex-col justify-between hover:scale-[1.01] transition-transform duration-200">

      {/* Görsel */}
      {project.imageUrls.length > 0 && (
        <img
          src={project.imageUrls[0]}
          alt={project.title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )}

      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-sm text-gray-300 mb-4 line-clamp-3 overflow-hidden">
          {project.description}
      </p>

      <div className="flex flex-wrap gap-2 text-xs text-fuchsia-300 font-mono mb-4">
        {project.techStack.map((tech) => (
          <span key={tech} className="bg-[#3d2843] px-2 py-1 rounded-md">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-fuchsia-400 hover:underline flex items-center gap-1">
            <Github size={16} /> GitHub
          </a>
        )}
        {project.liveDemoUrl && (
          <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-fuchsia-400 hover:underline flex items-center gap-1">
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
