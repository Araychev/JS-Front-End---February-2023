function sprintReview(arrInput) {
  let initialNumber = arrInput.shift();
  let sprintBoardArr = [];

  initialStateSprintBoard();

  function initialStateSprintBoard() {
    for (let i = 0; i < initialNumber; i++) {
      let [assignee, taskId, title, status, estimatedPoints] = arrInput
        .shift()
        .split(":");
      let assigneeObj = {};
      assigneeObj["assignee"] = assignee;
      let objTasks = {};
      let arrTasks = [];
      objTasks["taskId"] = taskId;
      objTasks["title"] = title;
      objTasks["status"] = status;
      objTasks["estimatedPoints"] = estimatedPoints;
      arrTasks.push(objTasks);
      assigneeObj["tasks"] = arrTasks;

      if (!sprintBoardArr.find((e) => e.assignee === assignee)) {
        sprintBoardArr.push(assigneeObj);
      } else {
        let foundAssignee = sprintBoardArr.find((e) => e.assignee === assignee);
        foundAssignee.tasks.push(objTasks);
      }
    }
  }

  for (const item of arrInput) {
    let line = item.split(":");
    let command = line[0];
    let searchedAssignee = line[1];

    switch (command) {
      case "Add New":
        let taskId = line[2];
        let title = line[3];
        let status = line[4];
        let estimatedPoints = line[5];

        if (!sprintBoardArr.find((e) => e.assignee === searchedAssignee)) {
          console.log(
            `Assignee ${searchedAssignee} does not exist on the board!`
          );
        } else {
          let objTasks = {};
          let arrTasks = [];
          objTasks["taskId"] = taskId;
          objTasks["title"] = title;
          objTasks["status"] = status;
          objTasks["estimatedPoints"] = estimatedPoints;
          arrTasks.push(objTasks);
          let foundAssignee = sprintBoardArr.find(
            (e) => e.assignee === searchedAssignee
          );
          foundAssignee.tasks.push(objTasks);
        }

        break;

      case "Remove Task":
        if (!sprintBoardArr.find((e) => e.assignee === searchedAssignee)) {
          console.log(
            `Assignee ${searchedAssignee} does not exist on the board!`
          );
        } else {
          let index = line[2];
          let foundAssignee = sprintBoardArr.find(
            (e) => e.assignee === searchedAssignee
          );
          if (index > foundAssignee.tasks.length - 1 || index < 0) {
            console.log("Index is out of range!");
          } else {
            foundAssignee.tasks.splice(index, 1);
          }
        }

        break;

      case "Change Status":
        let newTaskId = line[2];
        let newStatus = line[3];
        let foundAssignee = sprintBoardArr.find(
          (e) => e.assignee === searchedAssignee
        );

        if (!foundAssignee) {
          console.log(
            `Assignee ${searchedAssignee} does not exist on the board!`
          );
          break;
        }

        if (!foundAssignee.tasks.find((e) => e.taskId === newTaskId)) {
          console.log(
            `Task with ID ${newTaskId} does not exist for ${searchedAssignee}!`
          );
        } else {
          let foundTaskId = foundAssignee.tasks.find(
            (e) => e.taskId === newTaskId
          );
          foundTaskId.status = newStatus;
        }

        break;

      default:
        break;
    }
  }

  let toDoTasksTotalPoints = 0;
  let inProgressTasksTotalPoints = 0;
  let codeReviewTasksTotalPoints = 0;
  let doneTasksTotalPoints = 0;

  for (const item of sprintBoardArr) {
    for (const task of item.tasks) {
      switch (task.status) {
        case "ToDo":
          toDoTasksTotalPoints += Number(task.estimatedPoints);
          break;
        case "In Progress":
          inProgressTasksTotalPoints += Number(task.estimatedPoints);
          break;
        case "Code Review":
          codeReviewTasksTotalPoints += Number(task.estimatedPoints);
          break;
        case "Done":
          doneTasksTotalPoints += Number(task.estimatedPoints);
          break;

        default:
          break;
      }
    }
  }

  console.log(`ToDo: ${toDoTasksTotalPoints}pts`);
  console.log(`In Progress: ${inProgressTasksTotalPoints}pts`);
  console.log(`Code Review: ${codeReviewTasksTotalPoints}pts`);
  console.log(`Done Points: ${doneTasksTotalPoints}pts`);

  if (
    doneTasksTotalPoints >=
    toDoTasksTotalPoints +
      inProgressTasksTotalPoints +
      codeReviewTasksTotalPoints
  ) {
    console.log("Sprint was successful!");
  }
  if (
    doneTasksTotalPoints <
    toDoTasksTotalPoints +
      inProgressTasksTotalPoints +
      codeReviewTasksTotalPoints
  ) {
    console.log("Sprint was unsuccessful...");
  }
}

sprintReview([
  "4",
  "Kiril:BOP-1213:Fix Typo:Done:1",
  "Peter:BOP-1214:New Products Page:In Progress:2",
  "Mariya:BOP-1215:Setup Routing:ToDo:8",
  "Georgi:BOP-1216:Add Business Card:Code Review:3",
  "Add New:Sam:BOP-1237:Testing Home Page:Done:3",
  "Change Status:Georgi:BOP-1216:Done",
  "Change Status:Will:BOP-1212:In Progress",
  "Remove Task:Georgi:3",
  "Change Status:Mariya:BOP-1215:Done",
]);
