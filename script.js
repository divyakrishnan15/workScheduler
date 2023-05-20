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

var hourMain = $(".hour").text()
// console.log("hourMain = ",hourMain)

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
    var currentHour = allhour; //15
    var starttime = 9
    var endtime =17
    // console.log("currentHour = ", currentHour);

    
    for (var x=starttime;x<=endtime;x++){
        if (currentHour == x) {
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
    saveToLocalStorage(event) ;
  });

  function saveToLocalStorage(event) {
    var btn_IDEl = $(event.target).attr('btn-id')
    console.log("btn_IDEl = ",btn_IDEl)

    var textDescVal = $(`[row-id=${btn_IDEl}]`).val()
    console.log("textDescVal= ",textDescVal)


  var localStorageData = JSON.parse(localStorage.getItem("sch_LS")) || {};
  localStorageData[btn_IDEl]={
    hour_btn:btn_IDEl,
    textval_btn:textDescVal,
  }
    localStorage.setItem('sch_LS', JSON.stringify(localStorageData));

  }

  

  setValuesFromLocalStorage()
  
  function setValuesFromLocalStorage() {
    // console.log("hour = ", hour);
    // console.log("len = ", timeBlockEl.length);
   
    var localStorageData1 = JSON.parse(localStorage.getItem("sch_LS"));

    Object.values(localStorageData1).map((a)=>{

      var LS_hour =a.hour_btn
      var LS_text = a.textval_btn

      switch (LS_hour) {
        case "9AM":
                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        case "10AM":
                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        case "11AM":
                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        case "12PM":
                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        case "1PM":
                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        case "2PM":
                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        case "3PM":
                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        case "4PM":
                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        case "5PM":
                $(`[row-id=${LS_hour}]`).html(LS_text)
                break;
        default:
          return
        }
  })
}
})



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
    // hour_btn:$(event.target).prev().prev().html(),
    // hour_btnimg:$(event.target).parent().prev().prev().html(),
    // textval_btn:$(event.target).prev().val(),
    // textval_btnimg:$(event.target).parent().prev().val(),
