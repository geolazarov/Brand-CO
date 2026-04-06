import type { Project } from "../types";

const PROJECTS_ENDPOINT = `${import.meta.env.BASE_URL}data/projects.json`;

const isAbsoluteUrl = (value: string): boolean =>
  /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(value) ||
  value.startsWith("data:") ||
  value.startsWith("blob:");

const normalizeAssetPath = (value: string): string => {
  if (!value) {
    return "";
  }

  if (isAbsoluteUrl(value)) {
    return value;
  }

  const path = value.startsWith("/") ? value.slice(1) : value;
  return `${import.meta.env.BASE_URL}${path}`;
};

const parseProject = (raw: unknown): Project | null => {
  if (!raw || typeof raw !== "object") {
    return null;
  }

  const candidate = raw as Record<string, unknown>;

  if (
    typeof candidate.id !== "string" ||
    typeof candidate.title !== "string" ||
    typeof candidate.description !== "string" ||
    typeof candidate.bgImage !== "string"
  ) {
    return null;
  }

  const project: Project = {
    id: candidate.id,
    title: candidate.title,
    description: candidate.description,
    bgImage: normalizeAssetPath(candidate.bgImage),
  };

  if (typeof candidate.projectImage === "string") {
    project.projectImage = normalizeAssetPath(candidate.projectImage);
  }

  if (typeof candidate.projectVideo === "string") {
    project.projectVideo = normalizeAssetPath(candidate.projectVideo);
  }

  if (typeof candidate.link === "string") {
    project.link = candidate.link;
  }

  return project;
};

export async function loadProjects(): Promise<Project[]> {
  const response = await fetch(PROJECTS_ENDPOINT, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Failed to load projects.json: ${response.status}`);
  }

  const payload: unknown = await response.json();

  if (!Array.isArray(payload)) {
    throw new Error("Invalid projects.json format");
  }

  const parsedProjects = payload
    .map((item) => parseProject(item))
    .filter((item): item is Project => item !== null);

  if (payload.length > 0 && parsedProjects.length === 0) {
    throw new Error("projects.json contains no valid project entries");
  }

  return parsedProjects;
}
