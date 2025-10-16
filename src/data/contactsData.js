const contacts = [

{
  id: 1,
  type: 'contact',
  name: 'Agustina Gómez',
  profileImg: 'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
  unreadCount: 0,
  isOnline: true,
  lastSeen: '14:10',
  lastMessage: 'Tú: Ahí lo corrijo y subo de nuevo',
  timestamp: '13:55',
  messageStatus: 'read',
  messages: [
    { id: 1, author: 'Agustina', content: 'Valen, subí el guion al drive?', timestamp: '13:30', messageStatus: 'none' },
    { id: 2, author: 'Yo', content: 'Sí, ya está subido', timestamp: '13:35', messageStatus: 'read' },
    { id: 3, author: 'Agustina', content: 'Perfecto, lo reviso ahora', timestamp: '13:40', messageStatus: 'none' },
    { id: 4, author: 'Yo', content: 'Avísame si ves algo que cambiar', timestamp: '13:45', messageStatus: 'read' },
    { id: 5, author: 'Agustina', content: 'Encontré un error en la parte de entrevistas', timestamp: '13:50', messageStatus: 'none' },
    { id: 6, author: 'Yo', content: 'Ahí lo corrijo y subo de nuevo', timestamp: '13:55', messageStatus: 'delivered' },
  ]
},

{
  id: 2,
  type: 'contact',
  name: 'Maia',
  profileImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=761',
  unreadCount: 1,
  isOnline: false,
  lastSeen: '12:50',
  lastMessage: 'Maia: Buenísimo! ☕ Así hacemos mate tranquila',
  timestamp: '12:50',
  messageStatus: 'none',
  messages: [
    { id: 1, author: 'Maia', content: 'Valen, te acordaste de sacar la basura?', timestamp: '08:30', messageStatus: 'none' },
    { id: 2, author: 'Yo', content: 'Sí, la saqué hace un rato', timestamp: '08:35', messageStatus: 'read' },
    { id: 3, author: 'Maia', content: 'Perfecto! Gracias 😊', timestamp: '08:40', messageStatus: 'none' },
    { id: 4, author: 'Yo', content: 'Pasé por el kiosco también, traje leche y pan', timestamp: '08:50', messageStatus: 'read' },
    { id: 5, author: 'Maia', content: 'Buenísimo! ☕ Así hacemos mate tranquila', timestamp: '08:55', messageStatus: 'none' },
  ]
},

{
  id: 3,
  type: 'contact',
  name: 'Lucas Pereyra',
  profileImg: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&q=60&w=1000',
  unreadCount: 0,
  isOnline: true,
  lastSeen: '16:15',
  lastMessage: 'Tú: Adjunto la nota con los cambios solicitados',
  timestamp: '16:15',
  messageStatus: 'delivered',
  messages: [
    { id: 1, author: 'Yo', content: 'Adjunto la nota con los cambios solicitados', timestamp: '16:15', messageStatus: 'sent' }
  ]
},

{
  id: 4,
  type: 'group',
  name: 'Radio Uni 🎙️',
  profileImg: 'https://i.pravatar.cc/150?img=38',
  unreadCount: 6,
  lastMessage: 'Juan: Gracias! Este sábado hacemos prueba de sonido',
  timestamp: '16:40',
  messageStatus: 'none',
  participants: [
    { id: 1, name: 'Juan', color: '#DFB7FF', profileImg: 'https://i.pravatar.cc/150?img=34' },
    { id: 2, name: 'Sofía', color: '#FFB7B8', profileImg: 'https://i.pravatar.cc/150?img=35' },
  ],
  messages: [
    { id: 1, author: 'Juan', content: 'Subí el audio nuevo al drive!', timestamp: '16:00', messageStatus: 'none' },
    { id: 2, author: 'Yo', content: 'Perfecto, lo reviso ahora', timestamp: '16:05', messageStatus: 'read' },
    { id: 3, author: 'Sofía', content: 'Che, lo escuché y suena genial 🎧', timestamp: '16:10', messageStatus: 'none' },
    { id: 4, author: 'Juan', content: 'Gracias! Este sábado hacemos prueba de sonido', timestamp: '16:15', messageStatus: 'none' },
  ]
},

{
  id: 5,
  type: 'contact',
  name: 'Tía Marta',
  profileImg: 'https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
  unreadCount: 1,
  isOnline: false,
  lastSeen: '08:30',
  lastMessage: 'Tía Marta: Te mandé unas fotos 😊',
  timestamp: '08:30',
  messageStatus: 'none',
  messages: [
    { id: 1, author: 'Yo', content: 'Hola tía! Cómo estás?', timestamp: '08:00', messageStatus: 'read' },
    { id: 2, author: 'Tía Marta', content: 'Bien! Te mandé unas fotos 😊', timestamp: '08:30', messageStatus: 'none' }
  ]
},

{
  id: 6,
  type: 'group',
  name: 'Familia 👨‍👩‍👧‍👦',
  profileImg: 'https://plus.unsplash.com/premium_photo-1681844191166-313e89801bd0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172',
  unreadCount: 4,
  lastMessage: 'Mamá: No olviden la videollamada del domingo!',
  timestamp: '19:00',
  messageStatus: 'none',
  participants: [
    { id: 1, name: 'Mamá', color: '#FFB7B8', profileImg: 'https://i.pravatar.cc/150?img=51' },
    { id: 2, name: 'Papá', color: '#B7FFBE', profileImg: 'https://i.pravatar.cc/150?img=52' },
    { id: 3, name: 'Hermana', color: '#FFB7E0', profileImg: 'https://i.pravatar.cc/150?img=53' },
    { id: 4, name: 'Tío Juan', color: '#DFB7FF', profileImg: 'https://i.pravatar.cc/150?img=54' }
  ],
  messages: [
    { id: 1, author: 'Mamá', content: 'Buenos días familia! ☀️', timestamp: '08:00', messageStatus: 'none' },
    { id: 2, author: 'Papá', content: 'Buen día! 😊', timestamp: '08:15', messageStatus: 'none' },
    { id: 3, author: 'Hermana', content: 'Hola! Listos para el finde?', timestamp: '08:45', messageStatus: 'none' },
    { id: 4, author: 'Tío Juan', content: '¡Sí! Traigo las empanadas 😋', timestamp: '09:00', messageStatus: 'none' },
    { id: 5, author: 'Mamá', content: 'No olviden la videollamada del domingo!', timestamp: '19:00', messageStatus: 'none' },
  ]
},

{
  id: 7,
  type: 'contact',
  name: 'Sofía López',
  profileImg: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715',
  unreadCount: 0,
  isOnline: true,
  lastSeen: '19:30',
  lastMessage: 'Tú: Genial, nos vemos en la radio!',
  timestamp: '19:30',
  messageStatus: 'read',
  messages: [
    { id: 1, author: 'Sofía', content: 'Che, hoy vamos a la radio?', timestamp: '18:50', messageStatus: 'none' },
    { id: 2, author: 'Yo', content: 'Sí! A qué hora?', timestamp: '19:00', messageStatus: 'read' },
    { id: 3, author: 'Sofía', content: '19:30 como siempre', timestamp: '19:20', messageStatus: 'none' },
    { id: 4, author: 'Yo', content: 'Genial, nos vemos en la radio!', timestamp: '19:30', messageStatus: 'read' }
  ]
},

{
  id: 8,
  type: 'contact',
  name: 'Carla Díaz',
  profileImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764',
  unreadCount: 1,
  isOnline: false,
  lastSeen: '11:15',
  lastMessage: 'Carla: Necesito tu ayuda con el trabajo práctico',
  timestamp: '11:15',
  messageStatus: 'none',
  messages: [
    { id: 1, author: 'Yo', content: 'Hola Carla, cómo va?', timestamp: '10:45', messageStatus: 'read' },
    { id: 2, author: 'Carla', content: 'Necesito tu ayuda con el trabajo práctico', timestamp: '11:15', messageStatus: 'none' }
  ]
},

{
  id: 9,
  type: 'contact',
  name: 'Santiago Gómez',
  profileImg: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627',
  unreadCount: 0,
  isOnline: true,
  lastSeen: '17:50',
  lastMessage: 'Tú: Perfecto, nos vemos en la plaza a las 18',
  timestamp: '17:50',
  messageStatus: 'read',
  messages: [
    { id: 1, author: 'Santiago', content: 'Vamos a practicar fotografía en la plaza?', timestamp: '17:30', messageStatus: 'none' },
    { id: 2, author: 'Yo', content: 'Perfecto, nos vemos en la plaza a las 18', timestamp: '17:50', messageStatus: 'read' }
  ]
},

{
  id: 10,
  type: 'contact',
  name: 'Flor Martínez',
  profileImg: 'https://i.pravatar.cc/150?img=32',
  unreadCount: 0,
  isOnline: true,
  lastSeen: '21:20',
  lastMessage: 'Yo: Confirmado para el cine mañana!',
  timestamp: '21:20',
  messageStatus: 'read',
  messages: [
    { id: 1, author: 'Flor', content: '¿Vamos al cine mañana?', timestamp: '20:45', messageStatus: 'none' },
    { id: 2, author: 'Yo', content: 'Sí! A qué hora?', timestamp: '21:00', messageStatus: 'read' },
    { id: 3, author: 'Flor', content: '21:30 en la entrada', timestamp: '21:10', messageStatus: 'none' },
    { id: 4, author: 'Yo', content: 'Confirmado para el cine mañana!', timestamp: '21:20', messageStatus: 'read' }
  ]
},

{
  id: 11,
  type: 'contact',
  name: 'Juan Pérez',
  profileImg: 'https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  unreadCount: 0,
  isOnline: true,
  lastSeen: '15:00',
  lastMessage: 'Tú: Perfecto, te paso el link del audio',
  timestamp: '15:00',
  messageStatus: 'sent',
  messages: [
    { id: 1, author: 'Juan', content: 'Valen, me pasás el audio del programa?', timestamp: '14:45', messageStatus: 'none' },
    { id: 2, author: 'Yo', content: 'Perfecto, te paso el link del audio', timestamp: '15:00', messageStatus: 'sent' }
  ]
},

{
  id: 12,
  type: 'group',
  name: 'Amigxs — finde',
  profileImg: 'https://media.istockphoto.com/id/1479798765/es/foto/vertical-grupo-de-amigos-felices-posando-para-una-selfie-en-un-d%C3%ADa-de-primavera-mientras.jpg?s=612x612&w=0&k=20&c=m5zatwQjOAkQ3uzxhmDEUZ_kg_Mu__jMRDaNnyN8P48=',
  unreadCount: 0,
  lastMessage: 'Tú: Sí! Traigo las galletitas 🍪',
  timestamp: '17:25',
  messageStatus: 'read',
  participants: [
    { id: 1, name: 'Flor', color: '#B7C7FF', profileImg: 'https://i.pravatar.cc/150?img=32' },
    { id: 2, name: 'Sofía', color: '#FBFFB7', profileImg: 'https://i.pravatar.cc/150?img=35' }
  ],
  messages: [
    { id: 1, author: 'Flor', content: 'Lista para el picnic? 🧺', timestamp: '17:25', messageStatus: 'none' },
    { id: 2, author: 'Yo', content: 'Sí! Traigo las galletitas 🍪', timestamp: '17:30', messageStatus: 'read' }
  ]
},

{
  id: 13,
  type: 'contact',
  name: 'Carolina Méndez',
  profileImg: 'https://i.pravatar.cc/150?img=41',
  unreadCount: 0,
  isOnline: true,
  lastSeen: '20:15',
  lastMessage: 'Yo: Sí, me anoto para el taller',
  timestamp: '20:15',
  messageStatus: 'read',
  messages: [
    { id: 1, author: 'Carolina', content: 'Valen, te anotaste en el taller de crónica?', timestamp: '19:50', messageStatus: 'none' },
    { id: 2, author: 'Yo', content: 'Sí, me anoto para el taller', timestamp: '20:15', messageStatus: 'read' }
  ]
},

]

export default contacts;
