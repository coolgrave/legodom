// Карта
//function initialize() {
//        
//var latlng = new google.maps.LatLng(59.93912, 30.3201);
//var settings = {
//    zoom: 17,
//    center: latlng,
//    panControl: false,
//    zoomControl: false,
//    scaleControl: false,
//    rotateControl: false,
//    mapTypeControl: false,
//    streetViewControl: false,
//    overviewMapControl: false,
//    mapTypeId: google.maps.MapTypeId.ROADMAP
//    };
//      
//var map = new google.maps.Map(document.getElementById("map-canvas"), settings);
//        
//var companyLogo = new google.maps.MarkerImage("img/map-marker.png",
//                                              new google.maps.Size(231,190),
//                                              new google.maps.Point(0,0),
//                                              new google.maps.Point(49,190)
//                                             );
//
//var companyPos = new google.maps.LatLng(59.93861, 30.32305);
//var companyMarker = new google.maps.Marker({
//        position: companyPos,
//        map: map,
//        icon: companyLogo,
//        title:"Nerds",
//      });
//      }
//
//document.addEventListener("load", initialize());


// Форма обратной связи
var f_link = document.querySelector(".contacts-btn");
var f_popup = document.querySelector(".modal-content");
var f_close = f_popup.querySelector(".modal-content-close");
var f_cancel = f_popup.querySelector(".btn-cancel");
var f_form = f_popup.querySelector("form");
var f_userName = f_popup.querySelector("[name='name-field']");
var f_userMail = f_popup.querySelector("[name='mail-field']");
var f_message = f_popup.querySelector("[name='message-field']");
var f_storageName = localStorage.getItem("f_userName");
var f_storageMail = localStorage.getItem("f_userMail");

f_link.addEventListener("click", function (event) {
  event.preventDefault();
  f_popup.classList.add("modal-content-show");
  if (f_storageName) {
    f_userName.value = f_storageName;
    f_userMail.value = f_storageMail;
    f_message.focus();
  } else {
    f_userName.focus();
  }
});

f_close.addEventListener("click", function (event) {
  event.preventDefault();
  if (f_popup.classList.contains("modal-content-show")) {
    f_popup.classList.remove("modal-content-show");
  }
});

f_cancel.addEventListener("click", function (event) {
  if (f_popup.classList.contains("modal-content-show")) {
    f_popup.classList.remove("modal-content-show");
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (f_popup.classList.contains("modal-content-show")) {
      f_popup.classList.remove("modal-content-show");
    }
  }
});

f_form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!(f_userName.value)) {
    f_userName.classList.add("modal-error-s");
    alert("Укажите ваше имя, пожалуйста");
    f_userName.classList.remove("modal-error-s");
    f_userName.focus();
  } else if (!(f_userMail.value)) {
    f_userMail.classList.add("modal-error-s");
    alert("Укажите адрес вашей электронной почты");
    f_userMail.classList.remove("modal-error-s");
    f_userMail.focus();
  } else if (!(f_message.value)) {
    f_message.classList.add("modal-error-b");
    alert("Не забудьте написать нам сообщение");
    f_message.classList.remove("modal-error-b");
    f_message.focus();
  } else {
    localStorage.setItem("f_userName", f_userName.value);
    localStorage.setItem("f_userMail", f_userMail.value);
    
    
    f_popup.classList.add("modal-content-hide");
    setTimeout(function() {
      if (f_popup.classList.contains("modal-content-show")) {
      f_popup.classList.remove("modal-content-show");
      }
      if (f_popup.classList.contains("modal-content-hide")) {
      f_popup.classList.remove("modal-content-hide");
      }
      f_message.value = "";
    }, 900);
  }
});

