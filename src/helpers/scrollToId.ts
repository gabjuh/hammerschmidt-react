const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const navHeight = document.querySelector('nav')?.clientHeight || 80;
  const offsetTop = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
};


export default scrollToId;
