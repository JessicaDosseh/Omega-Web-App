## [0.0.1.README-FEATRUE / skeleton](https://github.com/JessicaDosseh/Omega-Web-App/blob/master/DOCUMENTATION/0.0.1.README-feature/skeleton.md)

# Overview

"Write it once; use it everywhere."
The goal for setting up skeletons is to allow for a better developer experience. Many developers may want to focus on functionality rather than styling. This is why setting template presets is useful so that developers don't have to ask themselves, "should I move 100px to the right or 3% to the left?" In addition to this, I wanted the project to be as scalable as possible.

---

# [Step 0.](https://github.com/JessicaDosseh/Omega-Web-App/pull/2/commits/bbfd474eea22c6c7a565d1b547d5e2760593ea42)

Add initial dependencies and set folders.

- [ ] add react-router-dom
- [ ] add material-ui/core and icons
- [ ] set up component folders

---

# [Step 1.](https://github.com/JessicaDosseh/Omega-Web-App/pull/2/commits/b70b3611f28a21b13f08660ae8cd26852ffb532a)

> > sub-steps: [1.1](https://github.com/JessicaDosseh/Omega-Web-App/pull/2/commits/9bf80093f8ad8f1c8e3d8c59a8b8723aa129851a), [1.2](https://github.com/JessicaDosseh/Omega-Web-App/pull/2/commits/86591fcad477330e95fefdc73a7c4530517ccf12) , [1.3](https://github.com/JessicaDosseh/Omega-Web-App/pull/2/commits/771b1362333aadbe6e7b528f6c426399e307792c) , [1.4](https://github.com/JessicaDosseh/Omega-Web-App/pull/2/commits/1ad02e8e1d3625f2c8e2229113166410642c78e0)

Set up navbar skeleton

- [ ] Purpose: This allows us to change the navbar layout according to the screen size.

- [ ] set up the web-based navbar skeleton
- [ ] set up the web-app navbar skeleton
- [ ] set up the mobile navbar skeleton
- [ ] load in text and buttons in the web web-app and mobile skeleton

---

# [Step 2.](https://github.com/JessicaDosseh/Omega-Web-App/pull/2/commits/554f4aab3b3cca1fec5d28b3b478b249721eaa8d)

> > sub-steps: [2.1](https://github.com/JessicaDosseh/Omega-Web-App/pull/2/commits/cfab3d44399dde59caa6c16ddba1bc7f6a3a448c), [2.2](https://github.com/JessicaDosseh/Omega-Web-App/pull/2/commits/cd5ae65179275b478af84ab57316900ef6d06e52) , [2.3](https://github.com/JessicaDosseh/Omega-Web-App/pull/2/commits/3c4d4cb54c9ccc84a4a2faeb18669309758c24e5) , [2.4](https://github.com/JessicaDosseh/Omega-Web-App/pull/2/commits/64b95740b529fbf88adbe1433292e53511e8dc24)

Set up the web template skeletons

- [ ] Purpose: This allows us to pull and quickly use a layout according to the UX design without having to overthink about styling specifications.

- [ ] set up web template page 1 skeleton
- [ ] set up Home Page
- [ ] set up the web template page 2 skeleton
- [ ] set up the Landing page
- [ ] set up Footer

---

# ISSUES

## [Step 2.](https://github.com/JessicaDosseh/Omega-Web-App/pull/2/commits/143558bdb07bc849fc395bc0688728a11572aa28)

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
---

# [Step 3.](https://github.com/JessicaDosseh/Omega-Web-App/pull/3)

Finish setting up web template skeletons

- [ ] styling issues resolved 
- [ ] major skeleton components are ready to go

---


