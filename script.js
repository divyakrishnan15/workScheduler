var today = dayjs();
var currentdayEl = $('#currentDay')
var mainContainerEl = $('.main-container')
var timeBlockEl = $('.time-block')
var rowIdEl = $('.row-id')

var hourEl = $('.hour')
var descriptionEl = $('.description')
var savebtnEl = $('.btn')
var fasaveEl = $('.fa-save')



var hour = today.format('h')


// //working
// //assign to all
// $('.description').val("hii")

// //assign to single
// descriptionEl.eq(1).val("hii div")
// var a = descriptionEl.eq(1).val()
// console.log("a",a)


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function daySchedulerMain() {
  
 var currday =  currentdayEl.text(today.format('dddd,MMMM D t'))
 console.log("current day = ",currday)


  mainContainerEl.on('click',function(event){
    saveFunction(event)
  });

  function saveFunction(event){
    console.log(event.target) 
    console.log(event.target.value)  //gives asd
    // console.log($(this).value)
    console.log('btn-id = ',$(event.target).attr('btn-id'))
    console.log('btn img-id = ',$(event.target).attr('btnimg-id'))

    // console.log("text area = ",$(event.target).prev().attr('class'))
    // console.log("text area val = ",$(event.target).prev().val())
    // console.log("text area val img = ",$(event.target).parent().prev().val())
    
    // var hourtime = 
    // $(event.target).prev().prev().css({"color": "red", "border": "2px solid red"})

    // $(event.target).parent().prev().prev().css({"color": "red", "border": "2px solid red"})

    // console.log("hourtime = ",hourtime)

    var btnimg_id = $(event.target).attr('btnimg-id')

    var btn_id = $(event.target).attr('btn-id')

    var text_area_class = $(event.target).prev().attr('class')

    var textarea_val_from_btn = $(event.target).prev().val()
    console.log("textarea_val_from_btn = ",textarea_val_from_btn)
    
    var textarea_val_from_btnimg = $(event.target).parent().prev().val()
    console.log("textarea_val_from_btnimg = ",textarea_val_from_btnimg)

    
    if (localStorage.getItem('sch_LS') === null){
      localStorage.setItem('sch_LS',JSON.stringify([]))
    }

    var localStorageData = JSON.parse(localStorage.getItem('sch_LS'))

    console.log("localStorageData = ",localStorageData)

    localStorageData.push({
      "hour_btn":$(event.target).prev().prev().html(),
      "hour_btnimg":$(event.target).parent().prev().prev().html(),
      "btn_attr":$(event.target).attr('btnimg-id'),
      "btnimg_attr":$(event.target).attr('btn-id'),
      "textarea_attr":$(event.target).prev().attr('class'),
      "textval_btn":$(event.target).prev().val(),
      "textval_btnimg":$(event.target).parent().prev().val(),
    })

    localStorage.setItem("sch_LS",JSON.stringify(localStorageData))
    // var a = descriptionEl.eq(1).val()
    // console.log("a = ",a)  //gives asd

    var localStorageData_new = JSON.parse(localStorage.getItem('sch_LS'))
    console.log("localStorageData_new = ",localStorageData_new)

  }


  // $(document).ready(function(){
  //   $("p").on({
  //     mouseenter: function(){
  //       $(this).css("background-color", "lightgray");
  //     },  
  //     mouseleave: function(){
  //       $(this).css("background-color", "lightblue");
  //     }, 
  //     click: function(){
  //       $(this).css("background-color", "yellow");
  //     }  
  //   });
  // });



  
$(function pastPresentFuture(event){
  console.log("hour = ",hour)

  console.log("len = ",timeBlockEl.length)

  // for (let i=1;i<=timeBlockEl.length;i++){
    // console.log("i = ",i)

      switch (hour){
          case "1":
            console.log('hi')
            console.log('rowIdEl.text() = ',rowIdEl.text())
            console.log('event ',event.target.rowIdEl)
            console.log('hour = ',hour)
                if(hour === rowIdEl.text()){
                    console.log('event ',event.target.rowIdEl)
                }
          case "2":

          case "3":

          case "4":

          case "5":

          case "6":

          case "7":

          case "8":

          case "9":

          default:
      }
  // }
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
});

// dayScheduler()
