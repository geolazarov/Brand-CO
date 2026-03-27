# Project Context

This project is a React + TypeScript + Tailwind implementation based on a connected Figma design.

The goal is to recreate the design as faithfully as possible in code, with clean structure, reusable components, and strong visual accuracy.

## Primary Goal

Implement the Figma design into a frontend app using:

React
TypeScript
Tailwind CSS

There is no existing app yet, so you should create the project structure from scratch when needed.

## Page and Section Architecture

The page should be built using **separate sections**, each implemented in its own component file.

Expected sections include:

Hero
About
Projects
Contact

Each section must be implemented as a **separate component** and kept modular.

Example:

HeroSection.tsx
AboutSection.tsx
ProjectsSection.tsx
ContactSection.tsx

## Reusable Section Layout

All sections should use a **shared reusable base layout component** to maintain consistent spacing and width across the site.

This base component should handle things like:

section width
horizontal padding
vertical spacing
responsive layout behavior

Suggested structure:

src/components/layout/Section.tsx

Example responsibility of the Section component:

constrain content width
apply consistent paddings
center content
maintain layout consistency across all sections

Sections such as Hero, About, Projects, and Contact should use this base layout component instead of repeating layout styles.

## Design Requirements

The design includes multiple **project cards/frames** with the same structure.

Each card contains:

a background image section with:
  - a secondary/project image displayed inside that section
a title area with:
  - project name
  - project description
the entire frame/card is a clickable external link

These repeated UI blocks must be implemented as a **reusable component in a separate file**.

## Required Reusable Component

Create a reusable component for the project card/frame.

### Card Structure

Each card must follow this structure:

background image section
  - contains the project image
title section
  - project name
  - project description
the entire card acts as a clickable external link

### Component Behavior

The whole card must be wrapped in an external link
It must accept all required content as props
It must be reusable for multiple cards/frames from the Figma
It must visually match the Figma as closely as possible
It must support responsive behavior if the design implies it
It must use accessible markup

### Required Props

The reusable component must support at least:

bgImage
projectImage
title
description
link

Use clear TypeScript prop types.

### File Organization

Put this reusable component in its own separate file.

Example structure:

src/components/ProjectCard.tsx
src/App.tsx
src/data/projects.ts (if structured data is useful)

## Implementation Rules

Prioritize fidelity to the Figma design
Match spacing, sizes, typography, colors, radii, shadows, and alignment carefully
Do not redesign the UI
Do not invent extra sections or features that are not shown in the design
Keep the code clean and production-quality
Prefer simple, maintainable component structure
Use semantic HTML where appropriate
Use Tailwind utilities for styling
Use TypeScript interfaces/types for props and data
If a value is unclear from Figma, make the smallest reasonable assumption and note it briefly

## App Structure Expectations

Since there is no existing app, scaffold the necessary files for a minimal React + TypeScript + Tailwind setup.

Prefer a clean structure like:
src/
components/
layout/
Section.tsx
ProjectCard.tsx
sections/
HeroSection.tsx
AboutSection.tsx
ProjectsSection.tsx
ContactSection.tsx
data/
types/
assets/
App.tsx


## Output Expectations

When implementing, provide:

1. Full code
2. File-by-file output
3. Any setup commands needed
4. Any assumptions made from the Figma
5. Any assets I need to supply manually

## Working Style

When working from the Figma:

1. Identify the layout structure
2. Separate the page into sections
3. Use the shared Section layout component
4. Extract repeated patterns into reusable components
5. Implement the page using those components
6. Keep the implementation close to the design

Do not stop at a plan — provide complete code.

## Notes About Images and Links

Treat image fields as configurable inputs to the reusable component
Use appropriate alt text where possible
External links should open safely using appropriate anchor attributes when needed

## If Design Details Are Missing

If some exact values are not obvious from the Figma:

infer the closest reasonable implementation
keep the structure aligned with the design intent
mention assumptions briefly instead of blocking implementation