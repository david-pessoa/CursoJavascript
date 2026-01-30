const root = document.documentElement //obtém variáveis em root

// DOM
const btn = document.getElementById("btnTema");
const ano = document.getElementById("ano");

// Preenchendo ano atual
ano.textContent = new Date().getFullYear()

//troca de tema claro / escuro
btn.addEventListener("click", () => {
  const dark = root.getAttribute("data-tema") === 'dark';
  console.log("oie")

  if(dark)
    root.removeAttribute('data-tema')
  else
    root.setAttribute('data-tema', 'dark');
    // root.toggleAttribute('data-tema')

})