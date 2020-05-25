## [0.0.1.README-FEATRUE / skeleton](https://github.com/JessicaDosseh/Omega-Web-App/blob/master/DOCUMENTATION/0.0.1.README-feature/skeleton.md)

# Overview

"Write it once; use it everywhere."
The goal for setting up skeletons is to allow for a better developer experience. Many developers may want to focus on functionality rather than styling. This is why setting template presets is useful so that developers don't have to ask themselves, "should I move 100px to the right or 3% to the left?" In addition to this, I wanted the project to be as scalable as possible.

---

# [Step 0.](#)

Add initial dependencies and set folders.

- [ ] add react-router-dom
- [ ] add material-ui/core and icons
- [ ] set up component folders

---

# [Step 1.](#)

> > sub-steps: [1.1](#), [1.2](#) , [1.3](#) , [1.4](#)

Set up navbar skeleton

- [ ] Purpose: This allows us to change the navbar layout according to the screen size.

- [ ] set up the web-based navbar skeleton
- [ ] set up the web-app navbar skeleton
- [ ] set up the mobile navbar skeleton
- [ ] load in text and buttons in the web web-app and mobile skeleton

---

# [Step 2.](#)

> > sub-steps: [2.1](#), [2.2](#) , [2.3](#) , [2.4](#)

Set up the web template skeletons

- [ ] Purpose: This allows us to pull and quickly use a layout according to the UX design without having to overthink about styling specifications.

- [ ] set up web template page 1 skeleton
- [ ] set up Home Page
- [ ] set up the web template page 2 skeleton
- [ ] set up the Landing page
- [ ] set up Footer

---

# ISSUES

## [Step 2.](#)

Make a note to fix some styling issues

> There's a couple rendering issues that have come up, but because this is not currently a priority, make a note so that it can be fixed later on.

---

## WebTemplate Snippet

```js

import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const WebTemplatePage# = (props) => {
  const classes = useStyles();
  const { loading = true } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.centerContainer}></Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default WebTemplatePage#;

```
