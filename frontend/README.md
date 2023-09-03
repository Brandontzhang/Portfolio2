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

8/29/23
- TailWind: Tailwind doesn't allow for string interpolation (Ex. "bg-${backgroundColor}). TO have dynamic variables, use clsx and conditionals

8/30/23
- Sticky
   - Stick works like normal positioning (static), until it is moved out of the container it is defined in. Then it behaves like a fixed element
   - So trying to move an element within the container with left, right, top, and bottom, won't work (except bottom, but behavior isn't as expected)
   - Use fixed if it is something like a HUD over the entire screen
- Context
   - Issues with normal use of context
      - 1. Declaring variables to pass into the Provider creates clutter
         - Create a custom ContextProvider class that initiates the initial variables, and export that to wrap around the components
      - 2. Null checks for using the useContextHook
         - This occurs if you use a context outside of the provider
         - To avoid having to have null checks whenever you use the context, create a custom context hook that does the check for you and throws an error
- Intersection Observer
   - rootMargin - think of it as an expansion of the root (additional area that counts as in view outside of the root)
   - threshold - percentage of the object that needs to be on the screen for it to be counted as in view (represented as a decimal)
- Debugger
   - Create a new device under the gear icon and devices, and add it as a Desktop device to have a screen without the touch mode
      - Why was this so annoying to find???/
- Hover covers
   - For adding effects with a hover, make changes to the item that ends up on top after the hover
      - Change the display to cover the item


9/3/23
- Organization:
   - Container components should only contain css that is in charge of the positioning and layout
   - Subcomponents take care of styling for appearance
- Man gotta remember to use overflow