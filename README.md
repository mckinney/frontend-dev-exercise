# Frontend Excercise

The following exercise is an excerpt from a game we developed for a client, and a good example of some of the tasks we work on as a team.

Please complete the following items and submit your code, as detailed in the **submission instructions**.

## Items
The ToDo List task pad is in need of some maintenance. _Almost_ all of the code is written, and we need your help!
1. Delete the pre-defined tasks in `src/components/game/TaskList.vue` and populate the to-do list from the JSON file `src/tasks.json`.
    - Apply each task's status as a CSS class. Tasks have a corresponding `status` key with a value of `completed`, `deactivated`, or `not-completed`.
    - Edit the `taskClick()` method in `src/components/game/Task.vue` to toggle the `completed` status when a task is clicked. **Note:** Deactivated tasks should not be "clickable". And clicking a completed task should change the task's status back to `not-completed`.  
    - Programmatically track the number of completed tasks at the top of the to-do list. E.g: "x of n tasks completed". **Note:** Deactivated tasks should not count towards the overall number (n) of tasks.
2. Delete the pre-defined project (`src/components/ProjectList.vue`) and tasks (`src/components/Project.vue`) and configure the project-task heirarchy using the JSON data in `src/projects.json` and `src/tasks.json`.
    - Each task in `src/tasks.json` is associated with a project in `src/projects.json`.
    - Programmatically track the number of completed projects at the top of the project tab. E.g: "x of n projects completed". 
    - A project should be considered complete when all of its associated tasks have a status of `completed`.  
3. [ CSS task ]
4. Make an edit to the to-do list, project tab or [ CSS ] that you find interesting. 


## Submission Instructions

Fork this repository to your own github account, and push your edits to the forked repository. When finished. Please share a link to the repository.

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
