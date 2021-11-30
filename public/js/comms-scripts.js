window.onload = () => {
  const tosBtn = document.getElementById("tos-btn");
  const closeBtn = document.getElementById("close-btn");
  const expandDong = document.getElementById("card-expand");

  const tosModal = document.getElementById("tos-modal");
  const commsBlur = document.getElementById("blur-comms");
  const aboutBlur = document.getElementById("blur-about");

  tosBtn.onclick = () => {
    commsBlur.classList.remove("card-comms");
    commsBlur.classList.add("card-comms_modal");
    aboutBlur.classList.remove("card-about-wrap");
    aboutBlur.classList.add("card-about-wrap_modal");
    expandDong.style.height = "50rem";
    setTimeout(() => {
      tosModal.classList.remove("overlay-hidden");
      tosModal.classList.add("overlay");
    }, 170);
  };

  closeBtn.onclick = () => {
    tosModal.classList.remove("overlay");
    tosModal.classList.add("overlay-hidden");
    setTimeout(() => {
      commsBlur.classList.remove("card-comms_modal");
      commsBlur.classList.add("card-comms");
      aboutBlur.classList.remove("card-about-wrap_modal");
      aboutBlur.classList.add("card-about-wrap");
      expandDong.style.height = "40rem";
    }, 50);
  };
};
