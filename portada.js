(() => {
  const ENVELOPE_DELAY_MS = 10000;
  const ARRIVAL_DURATION_MS = 2600;
  const OPEN_DURATION_MS = 2100;

  const experience = document.querySelector("#experience");
  const envelopeButton = document.querySelector("#openEnvelope");
  const letter = document.querySelector("#letter");
  const letterContent = document.querySelector("#letterContent");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!experience || !envelopeButton || !letter || !letterContent) return;

  const motionDuration = (regular, reduced = 200) => reducedMotion.matches ? reduced : regular;

  const finishArrival = () => {
    experience.classList.remove("is-arriving");
    experience.classList.add("is-arrived");
    envelopeButton.disabled = false;
  };

  const revealEnvelope = () => {
    experience.classList.add("is-arriving");
    window.setTimeout(
      finishArrival,
      motionDuration(ARRIVAL_DURATION_MS)
    );
  };

  const finishOpening = () => {
    experience.classList.add("is-open");
    letter.setAttribute("aria-hidden", "false");
    letterContent.focus({ preventScroll: true });
  };

  const openLetter = () => {
    if (envelopeButton.disabled || experience.classList.contains("is-opening")) return;

    envelopeButton.disabled = true;
    experience.classList.add("is-opening");
    window.setTimeout(
      finishOpening,
      motionDuration(OPEN_DURATION_MS, 400)
    );
  };

  envelopeButton.addEventListener("click", openLetter);

  // El retraso se conserva aunque la usuaria prefiera movimiento reducido.
  window.setTimeout(revealEnvelope, ENVELOPE_DELAY_MS);
})();
