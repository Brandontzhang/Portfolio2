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

8/27 - CSS Grid, Subgrid
1. Setting the display of the container to grid
   - Grid-template-rows/columns: sets the amount of rows or columns and the amount of space they will take up
      - the unit fr is a fraction of the space. (Ex. cols: 1fr 1fr divides the available space evenly into 2)
      - use repeat(#, size) on template to set amount (doesn't exist in tailwind)
      - If additional items are added that exceed the initial amount of rows/cols:
         - the direction (row/col) can be added using grid-flow
         - the size can be set using grid-col/row-auto
   - Grid items can be placed on different rows/cols using grid-row/col
      - Ex. grid-row: 1 / 3 (starts on the 1 edge and ends on the 3rd edge)
      - Use span to disregard starting location (Ex. span 2, start from wherever you are and go 2 blocks)
      - cols and rows combined into grid-area
   - utilize the layout menu in the developer console to view grid layouts
   - Use minmax function when declaring rows and cols to set minmax on resizing