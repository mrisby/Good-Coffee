fetch("/headTags.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("headTags").innerHTML = data
  })

  $(document).ready(function() {
  $.get("navbar.html", function(data) {
    $("#navbar").html(data)
  })
})

$(".animated").addClass("delay-2s")

