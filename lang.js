// Langue : choix de l'utilisateur, sinon langue du navigateur. Même mémoire sur toutes les pages.
(function () {
  var html = document.documentElement;
  function set(l) {
    html.lang = l;
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.set === l ? 'true' : 'false');
    });
  }
  var saved = null;
  try { saved = localStorage.getItem('pt-lang'); } catch (e) {}
  set(saved || ((navigator.language || 'fr').slice(0, 2) === 'fr' ? 'fr' : 'en'));
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      set(b.dataset.set);
      try { localStorage.setItem('pt-lang', b.dataset.set); } catch (e) {}
    });
  });
})();
