document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    // Verifica se as caixas foram encontradas
    if (boxes.length > 0) {
        boxes.forEach((box, index) => {
            setTimeout(() => {
                box.style.opacity = "1"; // Torna visível
                box.style.transform = "translateY(0)"; // Remove o deslocamento
            }, index * 200); // Aplica um atraso sequencial
        });
    } else {
        console.error("Nenhuma .box foi encontrada no DOM!");
    }
});
