# Frontend Excercise

The following exercise is an excerpt from a game we developed for a client, and a good example of some of the tasks we work on as a team.

Please complete the following items and submit your code, as detailed in the **submission instructions**.

## Items
The ToDo List task pad is in need of some maintenance. _Almost_ all of the code is written, and we need your help!
1. Delete the pre-defined tasks in `src/components/game/TaskList.vue` and populate the to-do list from the JSON file `src/tasks.json`.
    - Apply the task status as a CSS class. Each task in the JSON file has a corresponding `status` (completed, deactivated, not-completed).
    - Edit the `taskClick()` method in `src/components/game/Task.vue` to toggle the `completed` status of the clicked task. **Note:** Deactivated tasks cannot be clicked, and clicking a completed task should change its status to `not-completed`.  
    - Programmatically track the number of completed tasks at the top of the to-do list. E.g: "x of n tasks completed". **Note:** Deactivated tasks do not count towards the overall number (n) of tasks.
2. Delete the pre-defined project and tasks in `src/components/game/` and configure the project-task heirarchy from the JSON files `src/projects.json` and `src/tasks.json`.
    - Project titles should appear as bold header, and their associated tasks listed below. Each task in `src/tasks.json` is associated with a project in `src/tasks.json`. **Note:** No single task is associated with more than one project.
    - Programmatically track the number of completed projects at the top of the project tab. E.g: "x of n projects completed". A project is completed when all of its associated tasks have been completed.  
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
