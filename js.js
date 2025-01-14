function showProjectDetails() {
  const projectDetails = document.getElementById('detalhesProjeto');
  projectDetails.classList.toggle('hidden');
}
function mostrarDetalhesProjeto() {
  const detalhes = document.getElementById('detalhesProjeto');
  if (detalhes.classList.contains('oculto')) {
    detalhes.classList.remove('oculto');
  } else {
    detalhes.classList.add('oculto');
  }
}

function toggleFoto(fotoId) {
  const foto = document.getElementById(`foto${fotoId}`);
  if (foto.classList.contains('oculto')) {
    foto.classList.remove('oculto');
  } else {
    foto.classList.add('oculto');
  }
}
