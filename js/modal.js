(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelectorAll("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.forEach(function (item) {
    item.addEventListener("click", toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();