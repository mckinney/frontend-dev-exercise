# Frontend Excercise

Th following exercise is an excerpt from a game we developed for a client, and a good example of a project we might work on as a team.


## Submission Instructions

Clone this repository and push your code changes to your personal Github account. When finished, please share the link to your public repository with Brie Floyd at **brie.floyd@cylndr.com** so that we may have a chance to review.


## Items
The Notebook is in need of some maintenance. _Most_ of the code is written, but we need your help!
1. The project tab is broken. Write the code to toggle between Tasks and Projects.
2. Delete the pre-defined tasks in `src/components/game/TaskList.vue` and populate the to-do list from the JSON file `src/tasks.json`.
    - Apply each task's status as a CSS class. Tasks have a corresponding `status` key with a value of `active`, `complete`, or `inactive`.
    - Edit the `taskClick()` method in `src/components/game/Task.vue` to toggle the `active` status when a task is clicked to `completed`. 
    - Programmatically track the number of completed tasks at the top of the to-do list. E.g: "x of n tasks completed". **Note:** Inactive tasks should not count towards the overall number (n) of tasks.
3. Delete the pre-defined project (`src/components/ProjectList.vue`) and tasks (`src/components/Project.vue`) and configure the project-task heirarchy using the JSON data in `src/projects.json` and `src/tasks.json`.
    - Each task in `src/tasks.json` is associated with a project in `src/projects.json`.
    - Programmatically track the number of completed projects at the top of the project tab. E.g: "x of n projects completed". 
    - A project should be considered completed when all of its associated tasks have a status of `completed`.  
4. Make an edit to the to-do list, project tab or CSS change that you find interesting. This could be an animation, hover effect, code optimization, or whatever you like!


### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
