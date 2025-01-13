function showProjectDetails() {
  // Esconde a div de projetos
  document.querySelector('.projetos').classList.add('hidden');
  
  // Exibe a div de detalhes do projeto
  document.getElementById('detalhesProjeto').classList.remove('hidden');
  
  // Exibe a imagem do corpo do projeto
  document.querySelector('.foto-corpo').classList.remove('hidden');
}

function goBack() {
  // Exibe a div de projetos
  document.querySelector('.projetos').classList.remove('hidden');
  
  // Esconde a div de detalhes do projeto
  document.getElementById('detalhesProjeto').classList.add('hidden');
  
  // Esconde a imagem do corpo do projeto
  document.querySelector('.foto-corpo').classList.add('hidden');
}
