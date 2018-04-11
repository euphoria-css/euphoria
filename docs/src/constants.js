export const COLORS = [
  'primary-lightest',
  'primary-lighter',
  'primary-light',
  'primary',
  'primary-dark',
  'primary-darker',
  'primary-darkest',
  'secondary-lightest',
  'secondary-lighter',
  'secondary-light',
  'secondary',
  'secondary-dark',
  'secondary-darker',
  'secondary-darkest',
  'info-lightest',
  'info-lighter',
  'info-light',
  'info',
  'info-dark',
  'info-darker',
  'info-darkest',
  'success-lightest',
  'success-lighter',
  'success-light',
  'success',
  'success-dark',
  'success-darker',
  'success-darkest',
  'warning-lightest',
  'warning-lighter',
  'warning-light',
  'warning',
  'warning-dark',
  'warning-darker',
  'warning-darkest',
  'danger-lightest',
  'danger-lighter',
  'danger-light',
  'danger',
  'danger-dark',
  'danger-darker',
  'danger-darkest',
  'gray-lightest',
  'gray-lighter',
  'gray-light',
  'gray',
  'gray-dark',
  'gray-darker',
  'gray-darkest',
]
export const CURSORS = [
  'auto',
  'default',
  'none',
  'context-menu',
  'help',
  'pointer',
  'progress',
  'wait',
  'cell',
  'crosshair',
  'text',
  'vertical-text',
  'alias',
  'copy',
  'move',
  'no-drop',
  'not-allowed',
  'all-scroll',
  'col-resize',
  'row-resize',
  'n-resize',
  'e-resize',
  's-resize',
  'w-resize',
  'ne-resize',
  'nw-resize',
  'se-resize',
  'sw-resize',
  'ew-resize',
  'ns-resize',
  'nesw-resize',
  'nwse-resize',
  'zoom-in',
  'zoom-out',
  'grab',
  'grabbing',
]
export const WIDTHS = [
  0,
  5,
  10,
  15,
  20,
  25,
  30,
  33,
  40,
  50,
  60,
  66,
  70,
  75,
  80,
  90,
  100,
  'auto',
]
export const DIRECTIONS = ['', 'l', 't', 'r', 'b', 'x', 'y']
export const SPACINGS = ['none', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']
export const MARGINS = [...SPACINGS, 'auto']
export const PADDINGS = SPACINGS
export const VARIABLES = `
/*---------------------------------------------
- Colors
---------------------------------------------*/

/* Base colors */

--color-primary: #31c4a9;
--color-secondary: #7a7a7a;
--color-info: #3187c4;
--color-success: #7db735;
--color-warning: #dd6618;
--color-danger: #d8401e;
--color-gray: #7a7a7a;
--color-white: white;
--color-black: black;

/* Color shades/tints */

--color-primary-lightest: #f7fdfc;
--color-primary-lighter: #e2f8f4;
--color-primary-light: #a5e9dc;
--color-primary-dark: #279b86;
--color-primary-darker: #218371;
--color-primary-darkest: #186254;

--color-secondary-lightest: #fafafa;
--color-secondary-lighter: #ededed;
--color-secondary-light: #c7c7c7;
--color-secondary-dark: #616161;
--color-secondary-darker: #525252;
--color-secondary-darkest: #3d3d3d;

--color-info-lightest: #f7fafd;
--color-info-lighter: #e2eff8;
--color-info-light: #a5cde9;
--color-info-dark: #276b9b;
--color-info-darker: #215a83;
--color-info-darkest: #184362;

--color-success-lightest: #f5faef;
--color-success-lighter: #e9f5db;
--color-success-light: #c5e3a0;
--color-success-dark: #618e29;
--color-success-darker: #517722;
--color-success-darkest: #3b5719;

--color-warning-lightest: #fef9f6;
--color-warning-lighter: #fbeadf;
--color-warning-light: #f4be9a;
--color-warning-dark: #ae5113;
--color-warning-darker: #934510;
--color-warning-darkest: #6e330c;

--color-danger-lightest: #fef7f6;
--color-danger-lighter: #fbe5e0;
--color-danger-light: #f2ac9c;
--color-danger-dark: #ab3217;
--color-danger-darker: #902a14;
--color-danger-darkest: #6c200f;

--color-gray-lightest: #fafafa;
--color-gray-lighter: #ededed;
--color-gray-light: #c7c7c7;
--color-gray-dark: #616161;
--color-gray-darker: #525252;
--color-gray-darkest: #3d3d3d;

/*---------------------------------------------
- Spacing
---------------------------------------------*/

--spacing-xxs: 0.25rem;
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 2rem;
--spacing-lg: 4rem;
--spacing-xl: 8rem;
--spacing-xxl: 14rem;

/*---------------------------------------------
- Font families
---------------------------------------------*/

--font-family-serif: Georgia, Times, serif;
--font-family-sans-serif: Helvetica, Arial, sans-serif;
--font-family-mono: Consolas, Monaco, mono;

/*---------------------------------------------
- Font sizes
---------------------------------------------*/

--font-size-xxxl: 4rem;
--font-size-xxl: 2.6rem;
--font-size-xl: 1.9rem;
--font-size-lg: 1.3rem;
--font-size-md: 1rem;
--font-size-sm: 0.85rem;
--font-size-xs: 0.7rem;

/*---------------------------------------------
- Border sizes
---------------------------------------------*/

--border-radius-xs: 0.15em;
--border-radius-sm: 0.3em;
--border-radius-md: 0.6em;
--border-radius-lg: 1em;
--border-radius-xl: 1.8em;
--border-radius-pill: 100em;

/*---------------------------------------------
- Border widths
---------------------------------------------*/

--border-width-xxs: 1px;
--border-width-xs: 0.25rem;
--border-width-sm: 0.5rem;
--border-width-md: 1rem;
--border-width-lg: 1.5rem;
--border-width-xl: 2rem;
--border-width-xxl: 3rem;

/*---------------------------------------------
- Box shadows
---------------------------------------------*/

--box-shadow-1: 0 0 4px 2px rgba(0, 0, 0, 0.2);
--box-shadow-2: 0 0 8px 2px rgba(0, 0, 0, 0.2);
--box-shadow-3: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
--box-shadow-4: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
--box-shadow-5: 4px 4px 4px 2px rgba(0, 0, 0, 0.2);

/*---------------------------------------------
- Letter spacing
---------------------------------------------*/

--letter-spacing-xxs: -0.2em;
--letter-spacing-xs: -0.1em;
--letter-spacing-sm: 0.05em;
--letter-spacing-md: 0em;
--letter-spacing-lg: 0.3em;
--letter-spacing-xl: 0.6em;
--letter-spacing-xxl: 1.2em;

/*---------------------------------------------
- line heights
---------------------------------------------*/

--line-height-xxs: 0.5em;
--line-height-xs: 0.75em;
--line-height-sm: 1em;
--line-height-md: 1.5em;
--line-height-lg: 2em;
--line-height-xl: 3em;
--line-height-xxl: 4em;
`
