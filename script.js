var today = dayjs();
var currentdayEl = $("#currentDay");
var mainContainerEl = $(".main-container");
var timeBlockEl = $(".time-block");
var rowIdEl = $("row-id");
var hourEl = $(".hour");
var descriptionEl = $(".description");
var savebtnEl = $(".btn");
var fasaveEl = $(".fa-save");
var hour = today.format("h");
var allhour = today.format("H");


//local storage
if (localStorage.getItem("sch_LS") === null) {
  localStorage.setItem("sch_LS", JSON.stringify([{}]));
}

var localStorageData = JSON.parse(localStorage.getItem("sch_LS"));



$(function daySchedulerMain() {
  var currday = currentdayEl.text(today.format("dddd,MMMM D") + "th");
  // console.log("current day = ", currday);


// check every 1 min
//   var toExactMinute = 60000 - (new Date().getTime() % 60000);
//   setTimeout(function() {
//     setInterval(pastPresentFuture, 60000);
//     pastPresentFuture();
//     location.reload();
// }, toExactMinute);

  pastPresentFuture()

  function pastPresentFuture() {
    //from current time
    var currentHour = allhour; //15
    // console.log("currentHour = ", currentHour);

    //9 = 9am
    //17 = 5 pm
    // console.log("len of boxes = ", descriptionEl.length);
    // console.log("timeBlockEl = ", timeBlockEl.length);
    
    for (var x=9;x<=17;x++){
        if (currentHour == x) {
          // console.log("x 24 hour=",x)
          // console.log("x 12 hour=",x-12)
          // console.log("element *** = ",document.querySelector(`#hour-${x}`).getAttribute('class'))
          document.querySelector(`#hour-${x}`).classList.remove('past')
          document.querySelector(`#hour-${x}`).classList.add('present')
          } 
          else if(x > currentHour){
            // console.log("FUTURE ##### = ",x)
            document.querySelector(`#hour-${x}`).classList.remove('past')
            document.querySelector(`#hour-${x}`).classList.add('future')
           }
           else{
            // console.log("PAST ##### = ",x)
            document.querySelector(`#hour-${x}`).classList.remove('past')
            document.querySelector(`#hour-${x}`).classList.add('past')
           }
    }
  }

//set values to Local storage
  $(".btn").on("click", function (event) {
    saveFunction(event) ;
  });

  function saveFunction(event) {
    // console.log(event.target);
    // console.log(event.target.value); //gives asd

    var textarea_val_from_btn = $(event.target).prev().val();
    // console.log("textarea_val_from_btn = ", textarea_val_from_btn);

    var textarea_val_from_btnimg = $(event.target).parent().prev().val();
    // console.log("textarea_val_from_btnimg = ", textarea_val_from_btnimg);
    // console.log("localStorageData = ", localStorageData);


    localStorageData[$(event.target).prev().prev().html()] = {
      hour_btn: $(event.target).prev().prev().html(),
      hour_btnimg: $(event.target).parent().prev().prev().html(),
      btn_attr: $(event.target).attr("btnimg-id"),
      btnimg_attr: $(event.target).attr("btn-id"),
      textarea_attr: $(event.target).prev().attr("class"),
      textval_btn: $(event.target).prev().val(),
      textval_btnimg: $(event.target).parent().prev().val(),
    };

    localStorage.setItem("sch_LS", JSON.stringify(localStorageData));

    var localStorageData_new = JSON.parse(localStorage.getItem("sch_LS"));
    // console.log("local StorageData_new = ", localStorageData_new);
  }


  

  setValuesFromLocalStorage()
  
  function setValuesFromLocalStorage() {
    console.log("hour = ", hour);
    console.log("len = ", timeBlockEl.length);
   
    var localStorageData1 = JSON.parse(localStorage.getItem("sch_LS"));
    // console.log("localStorageData.len = ", Object.keys(localStorageData1).length);
    // console.log("LS keys = ",Object.keys(localStorageData1))
    // console.log("LS values = ",Object.values(localStorageData1))

    Object.values(localStorageData1).map((a)=>{
      // console.log(a)
      // console.log('a.textval_btn =',a.textval_btn)
      // console.log('a.hour_btn =',a.hour_btn)

      var LS_hour =a.hour_btn
      console.log("LS_hour =======",LS_hour)
      var LS_text = a.textval_btn

      switch (LS_hour) {
        case "9AM":
                console.log("hi - 9AM----");
                console.log("9am text = ",LS_text)

                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        case "10AM":
                console.log("hi --10AM---");
                console.log("10am text = ",LS_text)
                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        case "11AM":
                console.log("hi --11AM---");
                console.log("11am text = ",LS_text)
                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        case "12PM":
                console.log("hi --12PM---");
                console.log("12am text = ",LS_text)
                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        case "1PM":
                console.log("hi --1PM---");
                console.log("1pm text = ",LS_text)
                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        case "2PM":
                console.log("hi --2PM---");
                console.log("10am text = ",LS_text)
                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        case "3PM":
                console.log("hi --3PM---");
                console.log("10am text = ",LS_text)
                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        case "4PM":
                console.log("hi --4PM---");
                console.log("10am text = ",LS_text)
                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        case "5PM":
                console.log("hi --5PM---");
                console.log("10am text = ",LS_text)
                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        default:
          return
        }
  })
}
})



  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


// dayScheduler()



    // console.log($(this).value)
    // console.log("btn-id = ", $(event.target).attr("btn-id"));
    // console.log("btn img-id = ", $(event.target).attr("btnimg-id"));
    // console.log("text area = ",$(event.target).prev().attr('class'))
    // console.log("text area val = ",$(event.target).prev().val())
    // console.log("text area val img = ",$(event.target).parent().prev().val())
    // var hourtime =
    // $(event.target).prev().prev().css({"color": "red", "border": "2px solid red"})
    // $(event.target).parent().prev().prev().css({"color": "red", "border": "2px solid red"})
    // console.log("hourtime = ",hourtime)
    // var btnimg_id = $(event.target).attr("btnimg-id");
    // var btn_id = $(event.target).attr("btn-id");
    // var text_area_class = $(event.target).prev().attr("class")
