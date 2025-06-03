//Getting dynamic date on footer
const yearElement=document.getElementById("currentyear")
const year= new Date();
yearElement.innerText= year.getFullYear();

//
document.getElementById('hamburger').addEventListener('click', function () {document.getElementById('navmenu').claalist.toggle('active');
})
document.getElementById('menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
  });
  function book() {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const confirmation = document.getElementById("confirmation");
  
    if (date && time) {
      confirmation.textContent = `🎉 Booking confirmed for ${date} at ${time}`;
    } else {
      confirmation.textContent = "⚠️ Please select both a date and time.";
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("date").setAttribute("min", today);
  });