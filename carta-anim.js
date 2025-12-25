(function(){
  const stage = document.querySelector(".stage");
  const skip = document.querySelector("#skipAnim");
  if(!stage) return;

  const finish = () => stage.classList.add("done");

  // start
  requestAnimationFrame(() => stage.classList.add("play"));

  // sheetOutZoom dura 1.35s y empieza a los 0.90s => ~2.25s total
  setTimeout(finish, 2350);

  if(skip){
    skip.addEventListener("click", () => {
      stage.classList.add("play","done");

      const dim = stage.querySelector(".dim");
      const flap = stage.querySelector(".envFlap");
      const seal = stage.querySelector(".seal");
      const sheet = stage.querySelector(".sheet");

      if(dim) dim.style.opacity = "1";
      if (flap) flap.style.transform = "rotateX(168deg)";
      if (seal) seal.style.opacity = "0";
      if (sheet){
        sheet.style.opacity = "1";
        sheet.style.transform = "translateY(-72px) scale(1.10)";
      }
    });
  }
})();
