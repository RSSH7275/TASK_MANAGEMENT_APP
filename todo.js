const titleInp = document.getElementById("titleId");
const descriptionInp = document.getElementById("description");
const taskUrgency = document.getElementById("taskUrgency");
const boxAssign = document.getElementById("assignBox");
const completeAllTask = document.getElementById("taskCompletedSection");
const myModal = document.getElementById("myModal");

let assignObj = {
  taskTitle: "",
  taskDescription: "",
  priority: "",
  isCompleted: false,
};

let assignModalObj = {
  taskTitle: "",
  taskDescription: "",
  priority: "",
  isCompleted: false,
};

function handleTitleChange(value) {
  // console.log("what will be the value ??",value);

  if (value.length > 0) {
    assignObj.taskTitle = value;
  }
}

function handleDescriptionChange(value) {
  // console.log("what will be the value1 ??",value);

  if (value.length) {
    assignObj.taskDescription = value;
  }
}

function taskPriority() {
  // console.log("what will be the taskUrgency?", taskUrgency.value);

  if (taskUrgency.value) {
    assignObj.priority = taskUrgency.value;
  }
}

function handleClick() {
  if (
    assignObj.taskTitle.length > 0 &&
    assignObj.taskDescription.length > 0 &&
    assignObj.priority.length > 0
  ) {
    if (localStorage.getItem("assignTask")) {
      let item = JSON.parse(localStorage.getItem("assignTask"));
      item.push(assignObj);
      localStorage.setItem("assignTask", JSON.stringify(item));
      assignObj = {
        taskTitle: "",
        taskDescription: "",
        priority: "",
        isCompleted: false,
      };
      window.location.reload();
    } else {
      let item = [assignObj];
      localStorage.setItem("assignTask", JSON.stringify(item));
      assignObj = {
        taskTitle: "",
        taskDescription: "",
        priority: "",
        isCompleted: false,
      };
      window.location.reload();
    }
  }
}

function taskComplete(event) {
  // console.log("TaskComplete", event.target.id);
  let taskcompleteArray = JSON.parse(localStorage.getItem("assignTask"));
  let srchIndex = event.target.id;
  const data = taskcompleteArray.filter((ele, indx) => ele.isCompleted != true);
  // console.log("taskComple arr",taskcompleteArray);
  // console.log("searchIndex",srchIndex);
  // if (taskcompleteArray != null) {
  let findData = data.find((ele, indx) => {
    if (indx == srchIndex) {
      // console.log("what is ele",ele);
      ele.isCompleted = true;
      return ele;
      // console.log("what is ele1",ele);
    }
  });

  // findData.isCompleted=true;

  // console.log("isCompleted", findData);
  // console.log("taskComple arr",taskcompleteArray);

  let newData = taskcompleteArray.map((ele, indx) => {
    if (
      ele.taskTitle.toLowerCase() == findData.taskTitle.toLowerCase() &&
      ele.taskDescription.toLowerCase() ==
        findData.taskDescription.toLowerCase() &&
      ele.priority.toLowerCase() == findData.priority.toLowerCase()
    ) {
      ele.taskTitle = findData.taskTitle;
      ele.taskDescription = findData.taskDescription;
      ele.priority = findData.priority;
      ele.isCompleted = findData.isCompleted;

      return ele;
    } else {
      return ele;
    }
  });

  // console.log("new Data",newData);

  localStorage.setItem("assignTask", JSON.stringify(newData));
  window.location.reload();
  // }
}

// handle Modal Change
function handleModalTile(value) {
  // console.log(value);
  if (value.length > 0) {
    assignModalObj.taskTitle = value;
  }
}

// handle Task Change

function handleModalDescript(value) {
  // console.log(value);
  if (value.length > 0) {
    assignModalObj.taskDescription = value;
  }
}

// handle Priority change

function taskModalPriority(value) {
  // console.log(value);

  if (value.length > 0) {
    assignModalObj.priority = value;
  }
}

function saveModalData(taskTitle, taskDescription, priority, index) {
  // console.log("what is index??", taskTitle, taskDescription, priority, index);
  let data=JSON.parse(localStorage.getItem("assignTask"));
  console.log("what is dat?",data);
  console.log("assignOmodal", assignModalObj);

   if(assignModalObj.taskTitle=='' && assignModalObj.taskDescription==''&& assignModalObj.priority==''){
    
    // let assignModalObj = {
    //   taskTitle: "",
    //   taskDescription: "",
    //   priority: "",
    //   isCompleted: false,
    // };

    let newData=data.filter((ele, indx) => ele.isCompleted != true);
    
    let findedData = newData.find((ele,indx)=>{
      
     if(indx==index){
      return ele;
     }

    });

     localStorage.setItem("assignTask",data);
     window.location.reload();
   }

   else if(assignModalObj.taskTitle !='' && assignModalObj.taskDescription=='' && assignModalObj.priority==''){
    
    let newData=data.filter((ele, indx) => ele.isCompleted != true);
    console.log("what is newDat",newData);
    let findedData = newData.find((ele,indx)=>{
      
     if(indx==index){
      return ele;
     }

    });

    // console.log("what is finded data",findedData);

    findedData.taskTitle=assignModalObj.taskTitle;

  

     localStorage.setItem("assignTask",JSON.stringify(data));
     window.location.reload();

   }

   else if(assignModalObj.taskTitle !='' && assignModalObj.taskDescription !='' && assignModalObj.priority==''){
    
    let newData=data.filter((ele, indx) => ele.isCompleted != true);
    // console.log("what is newDat",newData);
    let findedData = newData.find((ele,indx)=>{
      
     if(indx==index){
      return ele;
     }

    });

    // console.log("what is finded data",findedData);

    findedData.taskTitle=assignModalObj.taskTitle;
    findedData.taskDescription=assignModalObj.taskDescription;

  

     localStorage.setItem("assignTask",JSON.stringify(data));
     window.location.reload();



   }

   else if(assignModalObj.taskTitle !='' && assignModalObj.taskDescription !='' && assignModalObj.priority !=''){
    let newData=data.filter((ele, indx) => ele.isCompleted != true);
    // console.log("what is newDat",newData);
    let findedData = newData.find((ele,indx)=>{
      
     if(indx==index){
      return ele;
     }

    });

    // console.log("what is finded data",findedData);

    findedData.taskTitle=assignModalObj.taskTitle;
    findedData.taskDescription=assignModalObj.taskDescription;
    findedData.priority=assignModalObj.priority;

  

     localStorage.setItem("assignTask",JSON.stringify(data));
     window.location.reload();
   }

   else if(assignModalObj.taskTitle ='' && assignModalObj.taskDescription !='' && assignModalObj.priority ==''){
    let newData=data.filter((ele, indx) => ele.isCompleted != true);
    // console.log("what is newDat",newData);
    let findedData = newData.find((ele,indx)=>{
      
     if(indx==index){
      return ele;
     }

    });

    // console.log("what is finded data",findedData);

    // findedData.taskTitle=assignModalObj.taskTitle;
    findedData.taskDescription=assignModalObj.taskDescription;
    // findedData.priority=assignModalObj.priority;

  

     localStorage.setItem("assignTask",JSON.stringify(data));
     window.location.reload();
   }

   else if(assignModalObj.taskTitle ='' && assignModalObj.taskDescription !='' && assignModalObj.priority !=''){

    let newData=data.filter((ele, indx) => ele.isCompleted != true);
    // console.log("what is newDat",newData);
    let findedData = newData.find((ele,indx)=>{
      
     if(indx==index){
      return ele;
     }

    });

    // console.log("what is finded data",findedData);

    // findedData.taskTitle=assignModalObj.taskTitle;
    findedData.taskDescription=assignModalObj.taskDescription;
    findedData.priority=assignModalObj.priority;

  

     localStorage.setItem("assignTask",JSON.stringify(data));
     window.location.reload();

   }
   else if(assignModalObj.taskTitle !='' && assignModalObj.taskDescription !='' && assignModalObj.priority ==''){
    let newData=data.filter((ele, indx) => ele.isCompleted != true);
    // console.log("what is newDat",newData);
    let findedData = newData.find((ele,indx)=>{
      
     if(indx==index){
      return ele;
     }

    });

    // console.log("what is finded data",findedData);

    findedData.taskTitle=assignModalObj.taskTitle;
    findedData.taskDescription=assignModalObj.taskDescription;
    // findedData.priority=assignModalObj.priority;

  

     localStorage.setItem("assignTask",JSON.stringify(data));
     window.location.reload();
   }

   else if(assignModalObj.taskTitle =='' && assignModalObj.taskDescription =='' && assignModalObj.priority !=''){
    let newData=data.filter((ele, indx) => ele.isCompleted != true);
    // console.log("what is newDat",newData);
    let findedData = newData.find((ele,indx)=>{
      
     if(indx==index){
      return ele;
     }

    });

    // console.log("what is finded data",findedData);

    // findedData.taskTitle=assignModalObj.taskTitle;
    // findedData.taskDescription=assignModalObj.taskDescription;
    findedData.priority=assignModalObj.priority;

  

     localStorage.setItem("assignTask",JSON.stringify(data));
     window.location.reload();
   }
   else if(assignModalObj.taskTitle !='' && assignModalObj.taskDescription =='' && assignModalObj.priority !=''){
    let newData=data.filter((ele, indx) => ele.isCompleted != true);
    // console.log("what is newDat",newData);
    let findedData = newData.find((ele,indx)=>{
      
     if(indx==index){
      return ele;
     }

    });

    // console.log("what is finded data",findedData);

    findedData.taskTitle=assignModalObj.taskTitle;
    // findedData.taskDescription=assignModalObj.taskDescription;
    findedData.priority=assignModalObj.priority;

  

     localStorage.setItem("assignTask",JSON.stringify(data));
     window.location.reload();
   }
   else if(assignModalObj.taskTitle =='' && assignModalObj.taskDescription !='' && assignModalObj.priority !=''){
    let newData=data.filter((ele, indx) => ele.isCompleted != true);
    // console.log("what is newDat",newData);
    let findedData = newData.find((ele,indx)=>{
      
     if(indx==index){
      return ele;
     }

    });

    // console.log("what is finded data",findedData);

    // findedData.taskTitle=assignModalObj.taskTitle;
    findedData.taskDescription=assignModalObj.taskDescription;
    findedData.priority=assignModalObj.priority;

  

     localStorage.setItem("assignTask",JSON.stringify(data));
     window.location.reload();
   }

   document.getElementById("myModal").style.display = "none";
  //  window.location.reload();
}

function editTask(taskTitle, taskDescription, priority, index) {
  // console.log("bdsbsdkcbkjdb", index);

  // Display Modal

  document.getElementById("myModal").style.display = "block";

  // set The Default values
  // document.getElementById('titleId').=taskTitle;
  // document.getElementById('description').=taskDescription;

  const ele = document.createElement("div");
  ele.className = "modal-content";
  ele.innerHTML = `
            <span class="close" onclick="closeModal()">&times;</span>
            <label for="Title" class="labelStyle">Title :</label>
        <input
          type="text"
          id="titleId"
          value="${taskTitle}"
          onchange="handleModalTile(this.value)"
          placeholder="Enter Title"
        />
        <label for="Title" class="labelStyle">Description :</label>
        <input
          type="text"
          id="description"
          value="${taskDescription}"
          onchange="handleModalDescript(this.value)"
          placeholder="Enter Description"
        />
       
        <select id="taskUrgency" onchange="taskModalPriority(this.value)" value="${priority}">
          <option value="" disabled selected hidden>Choose  Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
      </select>
            <!-- <input id="modalTitle">
            <p id="modalDescription"></p> -->
          
            <div class="buttonBox">
              <button id="save" onclick="saveModalData('${taskTitle}','${taskDescription}','${priority}','${index}')">Save</button>
              <button id="cancel" onclick="closeModal()">Cancel</button>
  `;

  document.getElementById("myModal").appendChild(ele);
}

// Function to close the modal
function closeModal() {
  // Hide the modal

  document.getElementById("myModal").style.display = "none";
  window.location.reload();
}

function deleteTask(event) {
  // console.log("deleted Task", event.target.id);

  let taskArray = JSON.parse(localStorage.getItem("assignTask"));
  let srchIndex = event.target.id;
  let arrSplit = srchIndex.split("-");

  // console.log("task",taskArray);

  const filterFalseData = taskArray.filter(
    (ele, indx) => ele.isCompleted != true
  );
  const filterTrueData = taskArray.filter(
    (ele, indx) => ele.isCompleted != false
  );

  // console.log("filter falsy",filterFalseData);

  if (arrSplit[0] == "assiDelete") {
    const findedData = filterFalseData.find((ele, indx) => {
      if (indx == arrSplit[1]) {
        // console.log("what is ele",ele);
        return ele;
        // console.log("what is ele1",ele);
      }
    });

    // console.log("finded data",findedData.taskTitle);

    let newData = [];

    for (let i = 0; i < taskArray.length; i++) {
      if (
        taskArray[i].taskTitle.toLowerCase() ==
          findedData.taskTitle.toLowerCase() &&
        taskArray[i].taskDescription.toLowerCase() ==
          findedData.taskDescription.toLowerCase() &&
        taskArray[i].priority.toLowerCase() == findedData.priority.toLowerCase()
      ) {
        // console.log("ele",ele);
        continue;
      } else {
        newData.push(taskArray[i]);
      }
    }

    if (newData.length > 0) {
      localStorage.setItem("assignTask", JSON.stringify(newData));
      window.location.reload();
    } else {
      localStorage.removeItem("assignTask");
      window.location.reload();
    }

    // console.log("wejhgeg",newData);
  }

  if (arrSplit[0] == "compleDelete") {
    const findedData = filterTrueData.find((ele, indx) => {
      if (indx == arrSplit[1]) {
        // console.log("what is ele",ele);
        return ele;
        // console.log("what is ele1",ele);
      }
    });

    // console.log("finded data",findedData.taskTitle);

    let newitem = [];

    for (let i = 0; i < taskArray.length; i++) {
      if (
        taskArray[i].taskTitle.toLowerCase() ==
          findedData.taskTitle.toLowerCase() &&
        taskArray[i].taskDescription.toLowerCase() ==
          findedData.taskDescription.toLowerCase() &&
        taskArray[i].priority.toLowerCase() == findedData.priority.toLowerCase()
      ) {
        // console.log("ele",ele);
        continue;
      } else {
        newitem.push(taskArray[i]);
      }
    }

    if (newitem.length > 0) {
      localStorage.setItem("assignTask", JSON.stringify(newitem));
      window.location.reload();
    } else {
      localStorage.removeItem("assignTask");
      window.location.reload();
    }
  }
}

function loadTasks() {
  // boxAssign

  if (localStorage.getItem("assignTask")) {
    let data = JSON.parse(localStorage.getItem("assignTask"));

    const filterFalseData = data.filter((ele, indx) => ele.isCompleted != true);
    const filterTrueData = data.filter((ele, indx) => ele.isCompleted != false);

    // console.log("filter ka data", filterFalseData);
    // console.log("filter ka data1", filterTrueData);

    // console.log("data",data);

    let headerDiv = document.createElement("div");
    headerDiv.className = "headerBox";

    headerDiv.innerHTML = `<h3>Assigned Task (Pending)</h3>`;

    document.getElementById("assignBox").appendChild(headerDiv);
    // console.log(index);

    filterFalseData.forEach((ele, index) => {
      let element = document.createElement("div");
      if (ele.priority == "High") {
        element.innerHTML = `
<div class="taskAllBox" id=${index}>
 <div class="titleDescriptBox">
 <p>${ele.taskTitle}</p>
 <p>${ele.taskDescription}</p>
 </div>

 <div class="prorityHigh">
 <p>${ele.priority}</p>
 </div> 

<div class="editDeleteBox">
 <p  onclick="taskComplete(event)" id=${index} value="complete" style="font-size:24px">&#10004</p>
 <p  onclick="editTask('${ele.taskTitle}','${ele.taskDescription}','${ele.priority}','${index}')"  value="edit" ><i class="material-icons" id=${index} style="font-size:24px">edit</i></p>
 <p  onclick="deleteTask(event)" ><i class="material-icons" id="assiDelete-${index}"  style="font-size:24px">delete</i></p>
</div>
</div>
`;
      } else if (ele.priority == "Medium") {
        element.innerHTML = `
  <div class="taskAllBox" id=${index}>
   <div class="titleDescriptBox">
   <p>${ele.taskTitle}</p>
   <p>${ele.taskDescription}</p>
   </div>

   <div class="prorityMedium">
   <p>${ele.priority}</p>
   </div> 
  
  <div class="editDeleteBox">
  <p  onclick="taskComplete(event)" id=${index} value="complete" style="font-size:24px">&#10004</p>
 <p  onclick="editTask('${ele.taskTitle}','${ele.taskDescription}','${ele.priority}','${index}')"  value="edit" ><i class="material-icons" id=${index} style="font-size:24px">edit</i></p>
 <p  onclick="deleteTask(event)"><i class="material-icons" id="assiDelete-${index}"  style="font-size:24px">delete</i></p>
  </div>
  </div>
  `;
      } else {
        element.innerHTML = `
  <div class="taskAllBox" id=${index}>
   <div class="titleDescriptBox">
   <p>${ele.taskTitle}</p>
 <p>${ele.taskDescription}</p>
   </div>

   <div class="prorityLow">
   <p>${ele.priority}</p>
   </div> 
  
  <div class="editDeleteBox">
  <p  onclick="taskComplete(event)" id=${index} value="complete" style="font-size:24px">&#10004</p>
 <p  onclick="editTask('${ele.taskTitle}','${ele.taskDescription}','${ele.priority}','${index}')"  value="edit" ><i class="material-icons" id=${index} style="font-size:24px">edit</i></p>
 <p  onclick="deleteTask(event)"><i class="material-icons" id="assiDelete-${index}"  value="assiDelete" style="font-size:24px">delete</i></p>
  </div>
  </div>
  `;
      }
      document.getElementById("assignBox").appendChild(element);
    });

    let headersDiv = document.createElement("div");
    headersDiv.className = "headerBox";

    headersDiv.innerHTML = `<h3>Completed Task (Completed)</h3>`;

    document.getElementById("taskCompletedSection").appendChild(headersDiv);

    filterTrueData.forEach((ele, index) => {
      let element = document.createElement("div");
      if (ele.priority == "High") {
        element.innerHTML = `
<div class="taskAllBox" id=${index}>
 <div class="titleDescriptBox">
 <p>${ele.taskTitle}</p>
 <p>${ele.taskDescription}</p>
 </div>

 <div class="prorityHigh">
 <p>${ele.priority}</p>
 </div> 

<div class="editDeleteBox"> 
 <p  onclick="deleteTask(event)"><i class="material-icons" id= "compleDelete-${index}"  style="font-size:24px">delete</i></p>
</div>
</div>
`;
      } else if (ele.priority == "Medium") {
        element.innerHTML = `
  <div class="taskAllBox" id=${index}>
   <div class="titleDescriptBox">
   <p>${ele.taskTitle}</p>
   <p>${ele.taskDescription}</p>
   </div>

   <div class="prorityMedium">
   <p>${ele.priority}</p>
   </div> 
  
  <div class="editDeleteBox">
 <p  onclick="deleteTask(event)"  ><i class="material-icons" id= "compleDelete-${index}"  style="font-size:24px">delete</i></p>
  </div>
  </div>
  `;
      } else {
        element.innerHTML = `
  <div class="taskAllBox" id=${index}>
   <div class="titleDescriptBox">
   <p>${ele.taskTitle}</p>
 <p>${ele.taskDescription}</p>
   </div>

   <div class="prorityLow">
   <p>${ele.priority}</p>
   </div> 
  
  <div class="editDeleteBox">
 <p  onclick="deleteTask(event)"  ><i class="material-icons" id= "compleDelete-${index}"  style="font-size:24px">delete</i></p>
  </div>
  </div>
  `;
      }
      document.getElementById("taskCompletedSection").appendChild(element);
    });
  } else {
    boxAssign.innerHTML = `
  
  <div class="noTaskBox">
  No Task Assigned Yet
  </div>

  `;

    completeAllTask.innerHTML = `
  
  <div class="noTaskBox">
  No Task Completed Yet
  </div>

  `;
  }
}

loadTasks();
