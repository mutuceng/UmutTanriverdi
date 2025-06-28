import { projects } from '../components/Projects/Projects';
import ProjectCard from '../components/Projects/ProjectCard';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-10 w-full">
      <h2 className="text-white text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => {
        console.log(`Project[${index}]`, project);
        return (
          <Link to={`/projects/details/${index}`} key={project.id}>
            <ProjectCard project={project} />
          </Link>
        );
      })}
      </div>
    </section>
  );
};

export default Projects;
