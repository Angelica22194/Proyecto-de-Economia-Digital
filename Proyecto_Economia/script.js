// Estado de la aplicación
let cart = []
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "electronica",
    price: 999,
    discount: 15,
    image: "/iphone-15-pro-smartphone.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    category: "electronica",
    price: 899,
    discount: 10,
    image: "/samsung-galaxy-smartphone.png",
  },
  {
    id: 3,
    name: 'MacBook Pro 16"',
    category: "electronica",
    price: 2499,
    discount: 0,
    image: "/macbook-pro-laptop.png",
  },
  {
    id: 4,
    name: "Dell XPS 15",
    category: "electronica",
    price: 1799,
    discount: 20,
    image: "/dell-xps-laptop.png",
  },
  {
    id: 5,
    name: "Estufa Mabe 6 Quemadores",
    category: "lineaBlanca",
    price: 599,
    discount: 0,
    image: "/modern-gas-stove.jpg",
  },
  {
    id: 6,
    name: "Estufa Whirlpool Eléctrica",
    category: "lineaBlanca",
    price: 699,
    discount: 25,
    image: "/electric-stove-modern.jpg",
  },
  {
    id: 7,
    name: "Refrigerador LG 25 pies",
    category: "lineaBlanca",
    price: 1299,
    discount: 30,
    image: "/modern-refrigerator-stainless-steel.jpg",
  },
  {
    id: 8,
    name: "Refrigerador Samsung French Door",
    category: "lineaBlanca",
    price: 1499,
    discount: 0,
    image: "/french-door-refrigerator.jpg",
  },
  {
    id: 9,
    name: "Licuadora Oster Pro",
    category: "pequeñosElectrodomesticos",
    price: 89,
    discount: 15,
    image: "/modern-blender-kitchen-appliance.jpg",
  },
  {
    id: 10,
    name: "Cafetera Nespresso",
    category: "pequeñosElectrodomesticos",
    price: 199,
    discount: 0,
    image: "/espresso-coffee-machine.png",
  },
  {
    id: 11,
    name: "Tostadora Cuisinart",
    category: "pequeñosElectrodomesticos",
    price: 59,
    discount: 20,
    image: "/modern-toaster-stainless-steel.jpg",
  },
  {
    id: 12,
    name: "Impresora HP LaserJet",
    category: "oficina",
    price: 299,
    discount: 10,
    image: "/office-laser-printer.jpg",
  },
  {
    id: 13,
    name: "Monitor Dell 27 pulgadas",
    category: "oficina",
    price: 349,
    discount: 0,
    image: "/computer-monitor-display-screen.jpg",
  },
  {
    id: 14,
    name: "Silla Ergonómica Herman Miller",
    category: "oficina",
    price: 899,
    discount: 15,
    image: "/ergonomic-office-chair.png",
  },
]

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", () => {
  loadProducts()
  updateCartCount()
})

function showHome() {
  document.getElementById("homeView").style.display = "block"
  document.getElementById("categoryView").style.display = "none"
  document.getElementById("offersView").style.display = "none"
  window.scrollTo({ top: 0, behavior: "smooth" })

  // Cerrar menú móvil si está abierto
  const nav = document.getElementById("mainNav")
  if (nav.classList.contains("active")) {
    nav.classList.remove("active")
  }
}

function showCategoryPage(category) {
  document.getElementById("homeView").style.display = "none"
  document.getElementById("categoryView").style.display = "block"
  document.getElementById("offersView").style.display = "none"

  const categoryTitle = document.getElementById("categoryTitle")
  const categorySubtitle = document.getElementById("categorySubtitle")
  const categoryProductsGrid = document.getElementById("categoryProductsGrid")

  // Set category title
  categoryTitle.textContent = getCategoryName(category)

  // Count products in category
  const categoryProducts = products.filter((p) => p.category === category)
  categorySubtitle.textContent = `${categoryProducts.length} productos disponibles`

  // Load products
  categoryProductsGrid.innerHTML = ""
  categoryProducts.forEach((product) => {
    const productCard = createProductCard(product)
    categoryProductsGrid.appendChild(productCard)
  })

  window.scrollTo({ top: 0, behavior: "smooth" })

  // Cerrar menú móvil si está abierto
  const nav = document.getElementById("mainNav")
  if (nav.classList.contains("active")) {
    nav.classList.remove("active")
  }
}

function showOffersPage() {
  document.getElementById("homeView").style.display = "none"
  document.getElementById("categoryView").style.display = "none"
  document.getElementById("offersView").style.display = "block"

  const offersProductsGrid = document.getElementById("offersProductsGrid")

  // Filter products with discount
  const offerProducts = products.filter((p) => p.discount > 0)

  // Load products
  offersProductsGrid.innerHTML = ""
  offerProducts.forEach((product) => {
    const productCard = createProductCard(product)
    offersProductsGrid.appendChild(productCard)
  })

  window.scrollTo({ top: 0, behavior: "smooth" })

  // Cerrar menú móvil si está abierto
  const nav = document.getElementById("mainNav")
  if (nav.classList.contains("active")) {
    nav.classList.remove("active")
  }
}

// Navegación
function navigateTo(section) {
  const element = document.getElementById(section)
  if (element) {
    const headerHeight = document.querySelector(".header").offsetHeight
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerHeight - 20

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }

  // Cerrar menú móvil si está abierto
  const nav = document.getElementById("mainNav")
  if (nav.classList.contains("active")) {
    nav.classList.remove("active")
  }
}

// Toggle menú móvil
function toggleMenu() {
  const nav = document.getElementById("mainNav")
  nav.classList.toggle("active")
}

// Cargar productos
function loadProducts(filter = null) {
  const productsGrid = document.getElementById("productsGrid")
  productsGrid.innerHTML = ""

  const filteredProducts = filter ? products.filter((p) => p.category === filter) : products.slice(0, 8)

  filteredProducts.forEach((product) => {
    const productCard = createProductCard(product)
    productsGrid.appendChild(productCard)
  })
}

function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"

  const discountedPrice = product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price

  const priceHTML =
    product.discount > 0
      ? `<p class="product-price">
         <span class="original-price">$${product.price.toLocaleString()}</span>
         <span class="discounted-price">$${Math.round(discountedPrice).toLocaleString()}</span>
       </p>`
      : `<p class="product-price">$${product.price.toLocaleString()}</p>`

  const discountBadge = product.discount > 0 ? `<span class="discount-badge">-${product.discount}%</span>` : ""

  card.innerHTML = `
        <div class="product-image">
            ${discountBadge}
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <p class="product-category">${getCategoryName(product.category)}</p>
            <h3 class="product-name">${product.name}</h3>
            ${priceHTML}
            <div class="product-actions">
                <button class="btn-add-cart" onclick="addToCart(${product.id})">
                    Agregar al carrito
                </button>
            </div>
        </div>
    `

  return card
}

// Obtener nombre de categoría
function getCategoryName(category) {
  const names = {
    electronica: "Electrónica y Tecnología Personal",
    lineaBlanca: "Línea Blanca",
    pequeñosElectrodomesticos: "Pequeños Electrodomésticos",
    oficina: "Oficina y Productividad",
  }
  return names[category] || category
}

// Filtrar productos por categoría
function filterProducts(category) {
  loadProducts(category)
  navigateTo("productos")
}

// Agregar al carrito
function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  if (product) {
    const existingItem = cart.find((item) => item.id === productId)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({
        ...product,
        quantity: 1,
      })
    }

    updateCartCount()
    showNotification("Producto agregado al carrito")
  }
}

// Remover del carrito
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  updateCartCount()
  renderCartItems()
}

// Actualizar contador del carrito
function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0)
  document.getElementById("cartCount").textContent = count
}

// Abrir carrito
function openCart() {
  const modal = document.getElementById("cartModal")
  modal.classList.add("active")
  renderCartItems()
}

// Cerrar carrito
function closeCart() {
  const modal = document.getElementById("cartModal")
  modal.classList.remove("active")
}

// Renderizar items del carrito
function renderCartItems() {
  const cartItemsContainer = document.getElementById("cartItems")

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>'
    return
  }

  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-price">$${item.price.toLocaleString()} x ${item.quantity}</p>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    Eliminar
                </button>
            </div>
        </div>
    `,
    )
    .join("")
}

// Finalizar compra
function checkout() {
  if (cart.length === 0) {
    showNotification("Tu carrito está vacío")
    return
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  showNotification(`Total a pagar: $${total.toLocaleString()}. Procesando compra...`)

  // Simular proceso de compra
  setTimeout(() => {
    cart = []
    updateCartCount()
    closeCart()
    showNotification("¡Compra realizada con éxito!")
  }, 2000)
}

// Mostrar ofertas
function showOffers() {
  showOffersPage()
}

// Manejar suscripción al newsletter
function handleNewsletter(event) {
  event.preventDefault()
  const input = event.target.querySelector('input[type="email"]')
  const email = input.value

  if (email) {
    showNotification("¡Gracias por suscribirte! Recibirás nuestras ofertas en " + email)
    input.value = ""
  }
}

// Mostrar información
function showInfo(type) {
  const messages = {
    garantia: "Todos nuestros productos cuentan con garantía de 1 año.",
    envios: "Envíos gratis en compras mayores a $500.",
    devoluciones: "Aceptamos devoluciones dentro de los primeros 30 días.",
    contacto: "Contáctanos: info@techhome.com | Tel: (555) 123-4567",
    privacidad: "Respetamos tu privacidad y protegemos tus datos.",
    terminos: "Consulta nuestros términos y condiciones completos.",
    cookies: "Usamos cookies para mejorar tu experiencia.",
  }

  showNotification(messages[type] || "Información no disponible")
}

// Mostrar notificación
function showNotification(message) {
  // Crear elemento de notificación
  const notification = document.createElement("div")
  notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #2c2c2c;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `
  notification.textContent = message

  document.body.appendChild(notification)

  // Remover después de 3 segundos
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Agregar estilos de animación
const style = document.createElement("style")
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Cerrar modal al hacer clic fuera
document.addEventListener("click", (event) => {
  const modal = document.getElementById("cartModal")
  if (event.target === modal) {
    closeCart()
  }
})
