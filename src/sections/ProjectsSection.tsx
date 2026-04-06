import { useEffect, useState } from "react";
import type { Project } from "../types";
import Section from '../components/layout/Section';
import ProjectCard from '../components/ProjectCard';
import { loadProjects } from "../data/projects";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [hasLoadError, setHasLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    void loadProjects()
      .then((items) => {
        if (isMounted) {
          setProjects(items);
        }
      })
      .catch(() => {
        if (isMounted) {
          setHasLoadError(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (hasLoadError) {
    return (
      <Section
        id="work"
        padded={false}
        className="px-4 sm:px-6 pb-12 sm:pb-20"
      >
        <p className="text-white text-lg sm:text-xl font-medium text-center py-16">
          Our work will be presented soon
        </p>
      </Section>
    );
  }

  return (
    <Section id="work" padded={false} className="px-4 sm:px-6 pb-12 sm:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-[187px]">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
}
