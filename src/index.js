document.addEventListener("DOMContentLoaded", () => {

	const openModalBtn = document.querySelectorAll('[data-modal-target]');
	const closeModalBtn = document.querySelectorAll('[data-close-button]');
	const modalConfirmBtn = document.querySelectorAll('[data-confirm-button]');

	const overlay = document.querySelector('#overlay');

	function openModal(modal) {
		if (modal == null) return
		modal.classList.add('active')
		overlay.classList.add('active')
	}

	function closeModal(modal) {
		if (modal == null) return
		modal.classList.remove('active')
		overlay.classList.remove('active')
	}

	function modalConfirm(confirm) {
		if (confirm == null) return
		alert('To close the window, press "x" or "Cancel"');
	}

	openModalBtn.forEach(button => {
		button.addEventListener('click', () => {
			const modal = document.querySelector(button.dataset.modalTarget);
			openModal(modal)
			document.body.style.overflow = "hidden";
		})
	})

	closeModalBtn.forEach(button => {
		button.addEventListener('click', () => {
			const modal = button.closest('.modal');
			closeModal(modal)
			document.body.style.overflow = "visible";
		})
	})

	modalConfirmBtn.forEach(button => {
		button.addEventListener('click', () => {
			modalConfirm(confirm)
		})
	})

	overlay.addEventListener('click', () => {
		const modals = document.querySelectorAll('.modal.active')
		modals.forEach(modal => {
			closeModal(modal)
		})
	})
	///////////////////////////////////////////////


	//const body = document.querySelector('body');
	//const modalBtn = document.querySelectorAll('.modal-btn__link');
	//const modalOverlay = document.querySelector('.modal-overlay');
	//const modal = document.querySelectorAll('.modal');

	//modalBtn.forEach((el) => {
	//el.addEventListener('click', (e) => {
	//let path = e.currentTarget.getAttribute('data-path');
	//console.log(path);

	//modal.forEach((el) => {
	//el.classList.remove('.modal-overlay--visible')
	//});

	//document.querySelector(`[data-target="${path}"]`).classList.add('.modal-body--visible');
	//modalOverlay.classList.add('.modal-overlay--visible');
	//});
	//});


})