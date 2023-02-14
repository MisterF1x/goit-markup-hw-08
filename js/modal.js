const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  formEl: document.querySelectorAll('.js-speaker-form'),
};

refs.openModalBtn?.addEventListener('click', toggleModal);
refs.closeModalBtn?.addEventListener('click', toggleModal);
refs.modal?.addEventListener('click', onBakcdropClick);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}
function onBakcdropClick(e) {
  if (e.currentTarget === e.target) {
    toggleModal();
  }
}

refs.formEl.forEach(el => {
  el.addEventListener('submit', onSubmitForm);
});
function onSubmitForm(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  formData.forEach((value, name) => console.log(`${name}: ${value}`));

  e.currentTarget.reset();
  refs.modal.classList.add('is-hidden');
}
