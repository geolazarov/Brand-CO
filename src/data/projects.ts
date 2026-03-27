import type { Project } from '../types';

/**
 * Figma asset URLs below are valid for ~7 days from generation.
 * Replace with permanent hosted assets before deploying.
 */
export const projects: Project[] = [
  {
    id: 'maestro-dian',
    title: 'Maestro Dian Tchobanov',
    description: "Portfolio of Plovdiv's State Opera Director",
    // Dark concert-hall photo as BG; website screenshot centered inside
    bgImage: 'https://www.figma.com/api/mcp/asset/076ebba8-be3d-491f-bc67-1305b98b3aba',
    projectImage: 'https://www.figma.com/api/mcp/asset/2777d728-cb09-4559-8ca6-aacb0a51aceb',
  },
  {
    id: 'brand-the-city',
    title: 'Brand the City',
    description: 'Festival Identity and web implementation',
    // The original Figma MCP asset was returning an SVG curve shape, not a photo.
    // Replace bgImage with the actual project photo when available.
    bgImage: '',
    link: '#',
  },
  {
    id: 'mir-office-building',
    title: 'Mir Office Building',
    description: 'Website design and implementation',
    bgImage: '',
    projectImage: 'https://www.figma.com/api/mcp/asset/fabbf10a-57fa-4af4-83a4-4b08760582ed',
    link: '#',
  },
  {
    id: 'nine-elephants',
    title: 'Nine Elephants: Festival for Art in Urban Spaces',
    description: 'Festival identity and web implementation',
    bgImage: 'https://www.figma.com/api/mcp/asset/cdf5f5ae-29c0-4ebd-8bdb-eb42eb51085f',
    projectImage: 'https://www.figma.com/api/mcp/asset/b38b76e0-9c7b-45ce-9bda-9951aee15be8',
  },
  {
    id: 'urban-storytelling-school',
    title: 'Urban Storytelling School',
    description: 'Identity and web implementation',
    bgImage: 'https://www.figma.com/api/mcp/asset/1731a80a-c9b4-455d-a4b9-da8bcc786d3b',
    projectImage: 'https://www.figma.com/api/mcp/asset/eeed1f33-ee44-4b32-97ab-a3e3193fd6fa',
  },
  {
    id: 'naep-plovdiv',
    title: 'National Autumn Exhibitions Plovdiv 2025',
    description: 'Festival identity',
    bgImage: '',
    projectImage: 'https://www.figma.com/api/mcp/asset/046f33d1-63e2-45da-acd0-d001a48bf606',
  },
  {
    id: 'lyuben-stanev',
    title: 'Lyuben Stanev. Literary and film heritage',
    description: 'Digital exhibition design and implementation',
    bgImage: 'https://www.figma.com/api/mcp/asset/cbd7850c-ec65-4281-b478-2b225f564f2b',
    projectImage: 'https://www.figma.com/api/mcp/asset/7f2d4784-2fe7-44a4-860c-16e5798ef934',
    link: '#',
  },
  {
    id: 'resm',
    title: 'RESM: Reshaping the Future of Sport',
    description: 'Identity',
    bgImage: 'https://www.figma.com/api/mcp/asset/b836a599-530e-408f-b247-675ef60b4c44',
    projectImage: 'https://www.figma.com/api/mcp/asset/c40b4009-a130-4b65-8de0-5094fc633252',
  },
];
