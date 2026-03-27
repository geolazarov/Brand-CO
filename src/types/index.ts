export interface Project {
  id: string;
  title: string;
  description: string;
  /** Primary image — fills the card's image area */
  bgImage: string;
  /** Optional centered mockup displayed on top of the background */
  projectImage?: string;
  /** External link; omit for projects without a live site */
  link?: string;
}
