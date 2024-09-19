let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
const carForm = document.getElementById('Us');
Us.addEventListener('submit', saveUsu);

function saveUsu (event){
   
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const work = document.getElementById('work').value;
    

    

const carData = {
    nome,
    email,
    work
};

if (nome){
    usuarios[nome] = carData;
} else {
    usuarios.push(carData);
}

localStorage.setItem('usuarios', JSON.stringify(usuarios));

Us.reset();
document.getElementById('name').value = '',
renderCarTable();
}

function renderCarTable(){
    carTableBody.innerHTML = '';
    usuarios.forEach((usuarios, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${usuarios.nome}</td>
        <td>${usuarios.email}</td>
        <td>${usuarios.work}</td>
        <td class="actions">
       <button class="edit" onclick="editCar(${index})">Editar</button>
       <button class="delete" onclick="deleteCar(${index})">Deletar</button>
        <td>
     `;
     carTableBody.appendChild(row);
    });
}

function editCar(index){
    const car = usuarios[index];
    document.getElementById ('name').value = index;
    document.getElementById ('email').value = car.marca;
    document.getElementById ('work').value = car.modelo;
    
}

function deleteCar(index) {
    usuarios.splice(index, 1);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    renderCarTable();
  }
  
  
  window.onload = renderCarTable;