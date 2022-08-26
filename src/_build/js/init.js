document.addEventListener('DOMContentLoaded', function () {
  const sel = document.querySelector('#lang-select');
  sel.addEventListener('change', (ev) => {
    window.location.href = ev.target.value;
  });

  if (window.netlifyIdentity) {
    window.netlifyIdentity.on('init', (user) => {
      if (!user) {
        window.netlifyIdentity.on('login', () => {
          document.location.href = '/admin/';
        });
      }
    });
  }
});
