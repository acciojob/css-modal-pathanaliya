//your JS code here. If required.
const modal = document.getElementById("myModal");
    const btn = document.getElementById("openModal");
    const closeBtn = document.querySelector(".close-modal");

    // Open modal
    btn.onclick = () => {
      modal.style.display = "block";
    };

    // Close modal with X
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };

    // Close modal on outside click
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };