import { Award, Clock, Heart, Users } from "lucide-react";

export const menuItems = [
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Tortas Personalizadas', href: '#personalizadas' },
    { name: 'Sobre Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

export const mapLinkLocation = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9741.95423283405!2d-73.62713402394917!3d4.144882349018321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2dd8efa16017%3A0x8ff16219e6d31841!2sCra.%2020%20%23%2025C-36%2C%20Villavicencio%2C%20Meta%2C%20Colombia!5e0!3m2!1ses-419!2sar!4v1767208713473!5m2!1ses-419!2sar";

export const quickFilters = ['Hoy', 'Cumpleaños', 'Regalo', 'Sin TACC', 'Vegano'];

export const products = [
  {
    id: 1,
    name: 'Torta Red Velvet',
    price: '$45.000',
    image: '/beauty_cake.jpg',
    tags: ['Más vendido', 'Nuevo'],
  },
  {
    id: 2,
    name: 'Cupcakes Vainilla',
    price: '$3.500',
    image: '/beers_cake.jpg',
    tags: ['Más vendido'],
  },
  {
    id: 3,
    name: 'Croissants Artesanales',
    price: '$2.800',
    image: '/car_cake.jpg',
    tags: [],
  },
  {
    id: 4,
    name: 'Macarons Franceses',
    price: '$2.200',
    image: '/coronabeer_cake.jpg',
    tags: ['Nuevo'],
  },
  {
    id: 5,
    name: 'Cookies Doble Chocolate',
    price: '$1.800',
    image: '/flowers_cake.jpg',
    tags: ['Más vendido'],
  },
  {
    id: 6,
    name: 'Donuts Glaseadas',
    price: '$2.500',
    image: '/heart_cake.jpg',
    tags: [],
  },
    {
    id: 7,
    name: 'Donuts Glaseadas',
    price: '$2.500',
    image: '/makeup_cake.jpg',
    tags: [],
  },
];


export const stats = [
  { icon: Heart, value: '500+', label: 'Clientes felices' },
  { icon: Award, value: '4 años', label: 'De experiencia' },
  { icon: Users, value: '1000+', label: 'Tortas creadas' },
  { icon: Clock, value: '24/7', label: 'Atención online' },
];

export const SERVINGS_OPTIONS = [
  { value: "10", label: "10 porciones" },
  { value: "15", label: "15 porciones" },
  { value: "20", label: "20 porciones" },
  { value: "30", label: "30 porciones" },
  { value: "40", label: "40 porciones" },
  { value: "50+", label: "50+ porciones" },
];

export const FLAVOR_OPTIONS = [
  { value: "", label: "Selecciona un sabor" },
  { value: "Vainilla", label: "Vainilla" },
  { value: "Chocolate", label: "Chocolate" },
  { value: "Red Velvet", label: "Red Velvet" },
  { value: "Limón", label: "Limón" },
  { value: "Zanahoria", label: "Zanahoria" },
  { value: "Café", label: "Café" },
];

export const FILLING_OPTIONS = [
  { value: "", label: "Selecciona un relleno" },
  { value: "Dulce de Leche", label: "Dulce de Leche" },
  { value: "Crema Chantilly", label: "Crema Chantilly" },
  { value: "Mousse de Chocolate", label: "Mousse de Chocolate" },
  { value: "Frutas Frescas", label: "Frutas Frescas" },
  { value: "Crema Pastelera", label: "Crema Pastelera" },
  { value: "Nutella", label: "Nutella" },
];

export const GALLERY_IMAGES_INFO = [
  "/beauty_cake.jpg",
  "/beers_cake.jpg",
  "/car_cake.jpg",
  "/coronabeer_cake.jpg",
];

export const WHY_CHOOSE_OPTIONS = [
  'Ingredientes de primera calidad',
  'Diseños 100% personalizados',
  'Entrega puntual garantizada',
  'Más de 500 clientes satisfechos',
  'Opciones sin TACC y veganas',
];
