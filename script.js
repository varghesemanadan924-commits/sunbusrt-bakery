// Menu Category Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button style
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.getAttribute('data-filter');

    menuItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Modal Controls
const modal = document.getElementById('inquiryModal');
const openModalBtn = document.getElementById('openModalBtn');
const footerModalBtn = document.getElementById('footerModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const inquiryForm = document.getElementById('inquiryForm');
const formSuccess = document.getElementById('formSuccess');

function openModal() {
  modal.classList.add('show');
  formSuccess.classList.add('hidden');
  inquiryForm.reset();
}

function closeModal() {
  modal.classList.remove('show');
}

openModalBtn.addEventListener('click', openModal);
footerModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the box
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Handle Form Submission
inquiryForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formSuccess.classList.remove('hidden');
  setTimeout(() => {
    closeModal();
  }, 2000);
});