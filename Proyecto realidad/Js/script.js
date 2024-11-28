// Array de objetos con información de las tarjetas
const cardsData = [
  { title: 'San Antonio', description: 'Codigo:TR-0006', href: '', category: 'categoria4' },
  { title: 'Linea Universitaria', description: 'Codigo:TR-0006', href: 'LineaU.html', category: 'categoria4' },
  { title: 'Chasqui', description: 'Codigo:TR-0018', href: 'Chasqui B.html', category: 'categoria1' },
  { title: 'Ethisac', description: 'Codigo:TR-0036', href: 'Etihsac1.html', category: 'categoria1' },
  { title: 'Etsa', description: 'Codigo:TR-0012', href: 'Etsa.html', category: 'categoria2' },
  { title: 'Pio Pata', description: 'Codigo:TR-0074', href: 'Piopata.html', category: 'categoria4' },
  { title: 'Andorinha', description: 'Codigo:TR-0074', href: 'Andorinha.html', category: 'categoria4' },
  { title: 'Niño Jesus', description: 'Codigo:TR-0074', href: 'Niñojesus.html', category: 'categoria4' },
  { title: 'San Pedro', description: 'Codigo:TR-0021', href: 'SanPedro.html', category: 'categoria3' },
  { title: 'Saños Grande', description: 'Codigo:TR-0091', href: 'SañosGrande.html', category: 'categoria3' },
  { title: 'Sol de Oro', description: 'Codigo:TR-0036', href: 'SoldeOro.html', category: 'categoria1' },
  { title: 'Virgo', description: 'Codigo:TR-0036', href: 'Virgo.html', category: 'categoria1' },
  { title: 'Trans Alfa', description: 'Codigo:TR-0006', href: '', category: 'categoria4' },
  { title: 'San Juan', description: 'Codigo:TR-0006', href: 'Sanjuan.html', category: 'categoria4' },
  { title: 'Colectivo 6', description: 'Codigo:TR-0006', href: 'colectivo6.html', category: 'categoria4' },
  { title: 'Colectivo 16', description: 'Codigo:TR-0006', href: 'colectivo16.html', category: 'categoria4' },
  { title: 'Union Wanka', description: 'Codigo:TR-0126', href: 'Unionwanka.html', category: 'categoria2' },
  { title: 'Uñas', description: 'Codigo:TR-0126', href: 'Uñas.html', category: 'categoria2' },
  { title: 'Union Huayta', description: 'Codigo:TR-0126', href: 'Unionhuayta.html', category: 'categoria2' },
  { title: 'Corazon de Jesus', description: 'Codigo:TR-0126', href: 'Corazondejesus.html', category: 'categoria2' },
  { title: '20 de Marzo', description: 'Codigo:TR-0126', href: '20deMarzo.html', category: 'categoria2' },
  { title: 'Grupo Calot', description: 'Codigo:TR-0126', href: 'Grupocalot.html', category: 'categoria2' }
];

// Crear un contenedor para las tarjetas
const cardContainer = document.getElementById('card-container');

// Función para mostrar las tarjetas
function displayCards(cards) {
  // Limpiar el contenedor de tarjetas
  cardContainer.innerHTML = '';
  cards.forEach(cardData => {
      // Crear un elemento de tarjeta
      const card = document.createElement('div');
      card.className = 'card';

      // Crear un título para la tarjeta
      const title = document.createElement('h2');
      title.textContent = cardData.title;
      card.appendChild(title);

      // Crear un párrafo para la tarjeta
      const description = document.createElement('p');
      description.textContent = cardData.description;
      card.appendChild(description);

      // Crear un enlace
      const link = document.createElement('a');
      link.href = cardData.href; // URL a la que se dirigirá el enlace
      link.textContent = 'Ver ruta';
      
      // Agregar el enlace a la tarjeta
      card.appendChild(link);

      // Agregar la tarjeta al contenedor
      cardContainer.appendChild(card);
  });
}

// Llamar a la función para mostrar todas las tarjetas al cargar la página
displayCards(cardsData);

// Función para filtrar tarjetas por categoría
function filterCards(category) {
  if (category === 'all') {
      displayCards(cardsData);
  } else {
      const filteredCards = cardsData.filter(card => card.category === category);
      displayCards(filteredCards);
  }
}

// Agregar eventos a los botones de categoría
const categoryButtons = document.querySelectorAll('.category-button');
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      filterCards(category);
  });
});

// Función para buscar tarjetas
document.getElementById('search-input').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const filteredCards = cardsData.filter(card => 
      card.title.toLowerCase().includes(searchTerm) || 
      card.description.toLowerCase().includes(searchTerm)
  );
  displayCards(filteredCards);
});