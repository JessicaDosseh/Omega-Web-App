## [0.0.1.README-ERROR-workflow_setup](https://github.com/JessicaDosseh/Omega-Web-App/blob/master/DOCUMENTATION/0.0.1.README-ERROR/ERROR-workflow_setup.md)

 > [PULL REQUEST OVERVIEW](https://github.com/JessicaDosseh/Omega-Web-App/pull/1) 

# Overview

The goal is to set up an environment that works across multiple platforms [web, web-app, and mobile] to create a better experience for the user and a better development process for the developers. My initial thought was to use react with react-native; however, react-native-web introduces a lot of bugs that I currently don't know how to fix. So instead, I opted for a new framework -- expo. Expo works across multiple platforms; however, it does not seem to work if in a monorepo environment.

---

# [Step 1.](https://github.com/JessicaDosseh/Omega-Web-App/pull/1/commits/75fe5d9df29c5c81d73b1434870de06c18ce3cc0)

Initialize lerna with `lerna init`

- [ ] Purpose: set up a monorepo environment.

---

# [Step 4.](https://github.com/JessicaDosseh/Omega-Web-App/pull/1/commits/bd22e39ae202bd9a6a2d7b15f881fe3ba934f3cd)

in a temp folder create-react-app then move to packages

- [ ] Purpose: There are a couple of bugs with npm when setting up a monorepo, so to make this work:
  - cd out of your root folder and make a temp folder.
  - cd into the temp folder and run `npx create-react-app`
  - delete the node_module and yarn.lock
  - `remove the hidden .git file`

---

## [sub - step 4.](https://github.com/JessicaDosseh/Omega-Web-App/pull/1#issuecomment-633063674)

## How to view hidden files

- [ ] For Mac's use the command `command-shift-dot`
- [ ] For Windows see instructions on this [LINK](https://support.microsoft.com/en-us/help/14201/windows-show-hidden-files)

---

# ERROR!!!

## [Step 6.](https://github.com/JessicaDosseh/Omega-Web-App/pull/1/commits/9cf2b95c74e064146c7c2abf2b09e231e4f7a498)

Create expo repo and add it as a submodule in packages

- [ ] Purpose: add expo into the monorepo file without damaging it.

> This is where all the issues start. Just like react-native, expo had some issues when it comes to the node_modules. Let me attempt to explain. In most files, there is almost always a `.gitignore` file that removes node_moduels when you push to GitHub; however, when you reclone the repo — in this particular case, the node module does not get reset properly when you run yarn.

> > One thing I noticed is that in the original expo file to reset the proper node_moduel, you have to run `yarn` then run `expo install`. This seems to work. However, when you try to do this in the monorepo package, the node_module does not install, and all you get is an error saying expo module does not exist — try running yarn add expo. When you run `yarn add expo`, it does not work.

## So I'm stuck what do I do?

---

## [Step 7.](#)

Delete Omega-Bundle submodule

> So, I think I have a solution to the expo not running problem. Instead of connecting the expo app to the web app, we have to instead connect the web app to the expo app.

For more information click the link below

## [0.0.2.README-ERROR-workflow_refactor](https://github.com/JessicaDosseh/Omega-Bundle/blob/master/DOCUMENTATION/0.0.2.README-ERROR-workflow_refactor.md)
