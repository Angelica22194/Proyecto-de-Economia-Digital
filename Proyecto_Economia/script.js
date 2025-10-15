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

const productDetails = {
  1: {
    description:
      "El iPhone 15 Pro redefine lo que un smartphone puede hacer. Con el revolucionario chip A17 Pro, cámara de 48MP y diseño en titanio, experimenta el futuro de la tecnología móvil.",
    features: [
      "Chip A17 Pro de última generación",
      "Cámara principal de 48MP con zoom óptico 5x",
      "Pantalla Super Retina XDR de 6.1 pulgadas",
      "Diseño en titanio aeroespacial",
      "Batería de larga duración con carga rápida",
      "iOS 17 con nuevas funcionalidades de IA",
    ],
    images: ["/iphone-15-pro-smartphone.jpg", "Proyecto_Economia/img/Iphone15V3.png", "/iphone-15-pro-smartphone.jpg"],
  },
  2: {
    description:
      "El Samsung Galaxy S24 combina innovación y elegancia. Con su pantalla Dynamic AMOLED 2X y cámara con IA, captura cada momento con claridad excepcional.",
    features: [
      "Procesador Snapdragon 8 Gen 3",
      "Pantalla Dynamic AMOLED 2X de 6.2 pulgadas",
      "Cámara triple con IA de 50MP",
      "Batería de 4000mAh con carga ultrarrápida",
      "Resistencia al agua IP68",
      "One UI 6 basado en Android 14",
    ],
    images: ["/samsung-galaxy-smartphone.png", "/samsung-galaxy-smartphone.png", "/samsung-galaxy-smartphone.png"],
  },
  3: {
    description:
      "La MacBook Pro de 16 pulgadas es la laptop definitiva para profesionales creativos. Con el chip M3 Pro, rendimiento sin precedentes para tus proyectos más exigentes.",
    features: [
      "Chip Apple M3 Pro o M3 Max",
      "Pantalla Liquid Retina XDR de 16.2 pulgadas",
      "Hasta 36 horas de batería",
      "Hasta 128GB de memoria unificada",
      "Sistema de sonido de seis altavoces",
      "Tres puertos Thunderbolt 4",
    ],
    images: ["/macbook-pro-laptop.png", "/macbook-pro-laptop.png", "/macbook-pro-laptop.png"],
  },
  4: {
    description:
      "El Dell XPS 15 ofrece potencia y portabilidad en un diseño premium. Perfecto para profesionales que necesitan rendimiento sin compromisos.",
    features: [
      "Procesador Intel Core i7 de 13ª generación",
      "Pantalla InfinityEdge 4K OLED de 15.6 pulgadas",
      "NVIDIA GeForce RTX 4050",
      "Hasta 32GB de RAM DDR5",
      "SSD de 1TB PCIe NVMe",
      "Diseño en aluminio mecanizado CNC",
    ],
    images: ["/dell-xps-laptop.png", "/dell-xps-laptop.png", "/dell-xps-laptop.png"],
  },
  5: {
    description:
      "La Estufa Mabe de 6 quemadores es perfecta para cocinar como un profesional. Con quemadores de alta eficiencia y horno espacioso.",
    features: [
      "6 quemadores de gas de alto rendimiento",
      "Horno de 5.8 pies cúbicos",
      "Parrillas de hierro fundido",
      "Encendido electrónico",
      "Acabado en acero inoxidable",
      "Garantía de 1 año",
    ],
    images: ["/modern-gas-stove.jpg", "/modern-gas-stove.jpg", "/modern-gas-stove.jpg"],
  },
  6: {
    description:
      "La Estufa Eléctrica Whirlpool combina tecnología y diseño. Con superficie de vitrocerámica y controles digitales para cocción precisa.",
    features: [
      "4 elementos de calentamiento rápido",
      "Superficie de vitrocerámica fácil de limpiar",
      "Horno de convección verdadera",
      "Controles digitales táctiles",
      "Función de autolimpieza",
      "Eficiencia energética certificada",
    ],
    images: ["/electric-stove-modern.jpg", "/electric-stove-modern.jpg", "/electric-stove-modern.jpg"],
  },
  7: {
    description:
      "El Refrigerador LG de 25 pies cúbicos ofrece espacio y tecnología de conservación avanzada. Mantén tus alimentos frescos por más tiempo.",
    features: [
      "Capacidad de 25 pies cúbicos",
      "Tecnología Door-in-Door",
      "Compresor Inverter Linear",
      "Dispensador de agua y hielo",
      "Acabado en acero inoxidable resistente a huellas",
      "Garantía de 10 años en compresor",
    ],
    images: [
      "/modern-refrigerator-stainless-steel.jpg",
      "/modern-refrigerator-stainless-steel.jpg",
      "/modern-refrigerator-stainless-steel.jpg",
    ],
  },
  8: {
    description:
      "El Refrigerador Samsung French Door combina elegancia y funcionalidad. Con tecnología FlexZone y pantalla táctil inteligente.",
    features: [
      "Diseño French Door de 28 pies cúbicos",
      "Cajón FlexZone con 4 temperaturas",
      "Pantalla táctil Family Hub",
      "Sistema de filtración de agua triple",
      "Iluminación LED completa",
      "Tecnología Twin Cooling Plus",
    ],
    images: ["/french-door-refrigerator.jpg", "/french-door-refrigerator.jpg", "/french-door-refrigerator.jpg"],
  },
  9: {
    description:
      "La Licuadora Oster Pro es tu aliada en la cocina. Con motor potente y cuchillas de acero inoxidable para resultados perfectos.",
    features: [
      "Motor de 1200 watts",
      "Cuchillas de acero inoxidable de 6 puntas",
      "Jarra de vidrio de 6 tazas",
      "7 velocidades + función pulso",
      "Base de metal resistente",
      "Garantía de 3 años",
    ],
    images: [
      "/modern-blender-kitchen-appliance.jpg",
      "/modern-blender-kitchen-appliance.jpg",
      "/modern-blender-kitchen-appliance.jpg",
    ],
  },
  10: {
    description:
      "La Cafetera Nespresso te permite disfrutar de café de calidad barista en casa. Sistema de cápsulas para café perfecto cada vez.",
    features: [
      "Sistema de cápsulas Nespresso",
      "Presión de 19 bares",
      "Calentamiento rápido en 25 segundos",
      "Depósito de agua de 1 litro",
      "Modo de ahorro de energía automático",
      "Incluye kit de bienvenida con cápsulas",
    ],
    images: ["/espresso-coffee-machine.png", "/espresso-coffee-machine.png", "/espresso-coffee-machine.png"],
  },
  11: {
    description:
      "La Tostadora Cuisinart ofrece tostado uniforme y preciso. Con ranuras extra anchas y múltiples funciones para el desayuno perfecto.",
    features: [
      "2 ranuras extra anchas",
      "7 niveles de tostado",
      "Funciones: bagel, descongelar, recalentar",
      "Bandeja para migas extraíble",
      "Acabado en acero inoxidable cepillado",
      "Garantía de 3 años",
    ],
    images: [
      "/modern-toaster-stainless-steel.jpg",
      "/modern-toaster-stainless-steel.jpg",
      "/modern-toaster-stainless-steel.jpg",
    ],
  },
  12: {
    description:
      "La Impresora HP LaserJet es ideal para oficinas productivas. Impresión rápida y económica con calidad profesional.",
    features: [
      "Velocidad de impresión: 40 ppm",
      "Resolución de 1200 x 1200 dpi",
      "Impresión dúplex automática",
      "Conectividad WiFi y Ethernet",
      "Pantalla táctil a color",
      "Capacidad de 550 hojas",
    ],
    images: ["/office-laser-printer.jpg", "/office-laser-printer.jpg", "/office-laser-printer.jpg"],
  },
  13: {
    description:
      "El Monitor Dell de 27 pulgadas ofrece imágenes nítidas y colores vibrantes. Perfecto para trabajo profesional y entretenimiento.",
    features: [
      "Pantalla IPS de 27 pulgadas",
      "Resolución 4K UHD (3840 x 2160)",
      "Cobertura de color sRGB del 99%",
      "Frecuencia de actualización de 60Hz",
      "Puertos HDMI, DisplayPort y USB-C",
      "Soporte ajustable en altura y rotación",
    ],
    images: [
      "/computer-monitor-display-screen.jpg",
      "/computer-monitor-display-screen.jpg",
      "/computer-monitor-display-screen.jpg",
    ],
  },
  14: {
    description:
      "La Silla Ergonómica Herman Miller es la inversión en tu salud y productividad. Diseño icónico con soporte lumbar ajustable.",
    features: [
      "Soporte lumbar PostureFit ajustable",
      "Brazos ajustables en 8 direcciones",
      "Malla Pellicle transpirable",
      "Inclinación y tensión personalizables",
      "Base de aluminio pulido",
      "Garantía de 12 años",
    ],
    images: ["/ergonomic-office-chair.png", "/ergonomic-office-chair.png", "/ergonomic-office-chair.png"],
  },
}

let currentProductId = null

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", () => {
  loadProducts()
  updateCartCount()
})

function showHome() {
  document.getElementById("homeView").style.display = "block"
  document.getElementById("categoryView").style.display = "none"
  document.getElementById("offersView").style.display = "none"
  document.getElementById("productDetailView").style.display = "none"
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
  document.getElementById("productDetailView").style.display = "none"

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
  document.getElementById("productDetailView").style.display = "none"

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
  card.onclick = () => showProductDetail(product.id)

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
                <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
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

  cartItemsContainer.innerHTML = cart.map((item) => ``).join("")
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
  notification.style.cssText = ``
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
style.textContent = ``
document.head.appendChild(style)

// Cerrar modal al hacer clic fuera
document.addEventListener("click", (event) => {
  const modal = document.getElementById("cartModal")
  if (event.target === modal) {
    closeCart()
  }
})

function showProductDetail(productId) {
  currentProductId = productId
  const product = products.find((p) => p.id === productId)
  const details = productDetails[productId]

  if (!product || !details) return

  // Hide other views
  document.getElementById("homeView").style.display = "none"
  document.getElementById("categoryView").style.display = "none"
  document.getElementById("offersView").style.display = "none"
  document.getElementById("productDetailView").style.display = "block"

  // Set product information
  document.getElementById("detailCategory").textContent = getCategoryName(product.category)
  document.getElementById("detailTitle").textContent = product.name
  document.getElementById("detailDescription").textContent = details.description

  // Set price
  const priceContainer = document.getElementById("detailPrice")
  const discountedPrice = product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price

  if (product.discount > 0) {
    priceContainer.innerHTML = `
      <span class="original-price">$${product.price.toLocaleString()}</span>
      <span class="discounted-price">$${Math.round(discountedPrice).toLocaleString()}</span>
      <span class="discount-badge">-${product.discount}%</span>
    `
  } else {
    priceContainer.innerHTML = `$${product.price.toLocaleString()}`
  }

  // Set features
  const featuresList = document.getElementById("detailFeatures")
  featuresList.innerHTML = details.features.map((feature) => `<li>${feature}</li>`).join("")

  // Set images
  const mainImage = document.getElementById("mainProductImage")
  mainImage.src = details.images[0]
  mainImage.alt = product.name

  const thumbnailsContainer = document.getElementById("galleryThumbnails")
  thumbnailsContainer.innerHTML = details.images
    .map(
      (img, index) => `
    <div class="gallery-thumbnail ${index === 0 ? "active" : ""}" onclick="changeMainImage('${img}', ${index})">
      <img src="${img}" alt="${product.name} - imagen ${index + 1}">
    </div>
  `,
    )
    .join("")

  window.scrollTo({ top: 0, behavior: "smooth" })
}

function changeMainImage(imageSrc, index) {
  const mainImage = document.getElementById("mainProductImage")
  mainImage.src = imageSrc

  // Update active thumbnail
  const thumbnails = document.querySelectorAll(".gallery-thumbnail")
  thumbnails.forEach((thumb, i) => {
    if (i === index) {
      thumb.classList.add("active")
    } else {
      thumb.classList.remove("active")
    }
  })
}

function closeProductDetail() {
  document.getElementById("productDetailView").style.display = "none"
  document.getElementById("homeView").style.display = "block"
  window.scrollTo({ top: 0, behavior: "smooth" })
}

function addToCartFromDetail() {
  if (currentProductId) {
    addToCart(currentProductId)
  }
}
