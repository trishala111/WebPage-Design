let swiperContact = new Swiper('.Contact_container',{
    loop: true,
    grabCursor: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}
);
function formvalidation(){
    var mail = document.forms["messageform"]["emails"].value;
    if(mail ==""){
      window.alert("Please enter your Email");
      return false;
    }
    else{
      window.alert("Thank you, you will be updated soon.");
    }
  }