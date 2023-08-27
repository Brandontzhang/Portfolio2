# React + TypeScript + Vite

## Lessons Learned
1. To enable TailwindCSS, also need to install postcss and autoprefixer, with a postcss.config.cjs
2. Sanity is a headless CMS system. A headless CMS system provides the backend without implementing the front end
   - Create Schemas and then navigate to localhost:3333 to add data

8/26 - CSS Positioning, transitions
1. Absolute vs Relative
   - Absolute positions the element relatively to the ROOT element
   - Relative positions the element relatively to the closest parent that is also relative/absolute
   - using left/right/top/bottom to push elements around will cause overflow, which will need to be handled
   - Watch out for weird behavior when height and width aren't set on parent elements
2. Implementation of inView hook with javascript Intersection Observer
   - IntersectionObserver is built into to javacript, so no library is required
   - The callback function to create the observer looks over all the entries that have been added
      - The entries are added using observer.observe
3. Transitions are used when a css property is changed
   - A delay is set so the change isn't instantaneous
   - Tailwind has different classes that apply transitions to different properties
      - transition-all: all properties that are changed
      - transition-opacity: only the opacity