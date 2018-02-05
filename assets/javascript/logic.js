  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  event.preventDefault()
    document.getElementById("myDropdown").classList.toggle("show");
    $(function(){
    $(".dropdown a").click(function(){
      $("#whatif-dropbtn").text($(this).text());
      $("#whatif-dropbtn").val($(this).text());
    });
  });
}

function myFunction2() {
  event.preventDefault()
    document.getElementById("myDropdown2").classList.toggle("show");
    $(function(){
    $(".dropdown2 a").click(function(){
      $("#guess-dropbtn").text($(this).text());
      $("#guess-dropbtn").val($(this).text());
    });
  });
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  event.preventDefault()
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}