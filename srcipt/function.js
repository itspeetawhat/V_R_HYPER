function startHomeVideo(){
    const video = document.getElementById("home-video")
    video.play();
}

function openService(evt, serviceName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(serviceName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function selectTab(){
      document.getElementById("tab-active-item").click();
  }

function important(){
	alert("i love hot and spicy chicken wings with raspberry jam");

}