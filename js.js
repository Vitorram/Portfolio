document.querySelectorAll('.verMais').forEach((button) => {
  button.addEventListener('click', () => {
     
    
      document.querySelectorAll('#projetos').forEach((projeto) => {
          projeto.style.display = 'none';
      });

      
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
