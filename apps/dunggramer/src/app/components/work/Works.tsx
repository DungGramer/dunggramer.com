import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState<any>([]);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category.toLowerCase() === item.name
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (name) => {
    setItem({ name });
  };

  return (
    <>
      <div className="work__filters">
        {projectsNav.map((project, index) => (
          <span
            key={index}
            className={clsx('work__item', {
              'active-work': item.name === project.name,
            })}
            onClick={() => handleClick(project.name.toLowerCase())}
          >
            {project.name}
          </span>
        ))}
      </div>
      <div className="work__container container grid">
        {projects.map((item, index) => (
          <WorkItems item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Works;
