document.querySelectorAll('.verMais').forEach((button) => {
  button.addEventListener('click', () => {
      // Esconder as divs de projetos
      document.querySelectorAll('#projetos').forEach((projeto) => {
          projeto.style.display = 'none';
      });

      // Mostrar as divs box2 e fazê-las ocupar a tela
      const descricao = document.querySelector('.descriçao');
      descricao.style.display = 'flex';
      descricao.style.justifyContent = 'center';
      descricao.style.alignItems = 'center';
      

      descricao.querySelectorAll('.box2').forEach((box) => {
          box.style.display = 'block';
      });
      const voltarButton = document.querySelector('.voltar');
      if (voltarButton) {
          voltarButton.style.display = 'block';
      }
  });
});

// Lógica para o botão de voltar
const voltarButton = document.querySelector('.voltar');
if (voltarButton) {
  voltarButton.addEventListener('click', () => {
      
      document.querySelectorAll('#projetos').forEach((projeto) => {
          projeto.style.display = 'block';
      });

    
      const descricao = document.querySelector('.descriçao');
      descricao.style.display = 'none';

      descricao.querySelectorAll('.box2').forEach((box) => {
          box.style.display = 'none';
      });

      
      voltarButton.style.display = 'none';
  });
}
