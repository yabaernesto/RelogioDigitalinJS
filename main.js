const hour = document.getElementById('hour');
const min = document.getElementById('min');
const second = document.getElementById('second');

function showHours() {
  // Cria um novo objeto Date a cada chamada
  const data = new Date();

  // padStart(): Adiciona zero à esquerda se necessário
  hour.innerText = data.getHours().toString().padStart(2, '0');
  min.innerText = data.getMinutes().toString().padStart(2, '0');
  second.innerText = data.getSeconds().toString().padStart(2, '0');
}

setInterval(showHours, 1000);
