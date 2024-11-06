export default {
  prisma: {
    model: {
      account: 'Cuenta',
      tag: 'Etiqueta',
      tagGroup: 'Grupo de etiquetas',
      event: 'Evento',
      eventFolder: 'Carpeta de eventos',
      comment: 'Comentario',
      profile: 'Perfil',
      location: 'Ubicación',
      cannedResponse: 'Respuesta enlatada',
      message: 'Mensaje',
    },
    tag: {
      assisted: 'Asistió',
      confirmed: 'Confirmó asistencia',
    },
    conflict: `Ya existe un registro con el campo \{\{field\}\} '\{\{value\}\}' en la tabla de \{\{model\}\}`,
    'not-found': `No se encontró un registro con el campo \{\{field\}\} '\{\{value\}\}' en la tabla de \{\{model\}\}`,
  },
  model: {
    comment: {
      id: {
        uuid: 'El ID debe ser un UUID',
      },
      content: {
        min: 'El contenido debe tener al menos 1 caracter',
      },
      isSolvable: {
        required: 'No se indica si el comentario es resoluble',
      },
    },
    account: {
      id: {
        required: 'El ID es requerido',
        uuid: 'El ID debe ser un UUID',
      },
      username: {
        required: 'El nombre de usuario es requerido',
      },
      email: {
        required: 'El email es requerido',
        email: 'El email debe ser un email válido',
      },
      password: {
        required: 'La contraseña es requerida',
        min: 'La contraseña debe tener al menos 6 caracteres',
      },
      role: {
        required: 'El rol es requerido',
        invalid: 'El rol es inválido',
      },
    },
    tag: {
      id: {
        uuid: 'El ID debe ser un UUID',
      },
      name: {
        required: 'El nombre es requerido',
        min: 'El nombre debe tener al menos 1 caracter',
      },
      type: {
        invalid: 'El tipo de etiqueta es inválido',
      },
    },
    event: {
      id: {
        uuid: 'El ID debe ser un UUID',
      },
      name: {
        required: 'El nombre es requerido',
      },
      date: {
        required: 'La fecha es requerida',
        invalid: 'La fecha debe ser una fecha válida',
      },
      location: {
        required: 'La ubicación es requerida',
      },
    },
    tagGroup: {
      id: {
        uuid: 'El ID debe ser un UUID',
      },
      name: {
        required: 'El nombre es requerido',
      },
      color: {
        invalid: 'El color debe tener el formato hexadecimal (#ABCDEF)',
      },
    },
    'event-folder': {
      id: {
        uuid: 'El ID debe ser un UUID',
      },
      color: {
        invalid: 'El color debe tener el formato hexadecimal (#ABCDEF)',
      },
    },
    profile: {
      id: {
        uuid: 'El ID debe ser un UUID',
      },
      phoneNumber: {
        required: 'El teléfono es un campo obligatorio',
        invalid: 'El teléfono no es válido',
      },
      secondaryPhoneNumber: {
        invalid: 'El teléfono secundario no es válido',
      },
      fullName: {
        required: 'El nombre es un campo obligatorio',
      },
      profilePictureUrl: {
        invalid: 'La URL de la imagen de perfil no es válida',
      },
    },
    location: {
      id: {
        uuid: 'El ID debe ser un UUID',
      },
      latitude: {
        minmax: 'La latitud debe estar entre -90 y 90',
      },
      longitude: {
        minmax: 'La longitud debe estar entre -180 y 180',
      },
    },
    'canned-response': {
      id: {
        uuid: 'El ID debe ser un UUID',
      },
      name: {
        required: 'El nombre es requerido',
        min: 'El nombre debe tener al menos 1 caracter',
      },
      content: {
        required: 'El contenido es requerido',
        min: 'El contenido debe tener al menos 1 caracter',
      },
    },
  },
  route: {
    auth: {
      'invalid-credentials': 'Credenciales inválidas',
      'no-token': 'No se encontró un token',
      'invalid-token': 'Token inválido',
      'user-not-found': 'Usuario no encontrado',
    },
    account: {
      create: {
        success: 'Cuenta creada con éxito',
        conflict: 'Cuenta ya existente',
      },
      'global-filter-patch': {
        success: 'Filtro base actualizado',
        conflict: 'Etiquetas Inválidas',
      },
      'global-filter-get': {
        success: 'Filtro base obtenido',
        'not-found': 'Cuenta no encontrada',
      },
      me: {
        success: 'Cuenta obtenida',
      },
    },
    tag: {
      create: {
        success: 'Etiqueta creada con éxito',
      },
      'find-all': {
        success: 'Etiquetas obtenidas',
      },
      'find-one': {
        success: 'Etiqueta obtenida',
        'not-found': 'Etiqueta no encontrada',
      },
      update: {
        success: 'Etiqueta actualizada',
        'not-found': 'Etiqueta no encontrada',
      },
      delete: {
        success: 'Etiqueta eliminada',
        'not-found': 'Etiqueta no encontrada',
      },
      'find-by-group': {
        success: 'Etiquetas obtenidas',
        'not-found': 'Grupo de etiquetas no encontrado',
      },
      'massive-allocation': {
        success: 'Etiquetas asignadas con éxito',
      },
      'massive-deallocation': {
        success: 'Etiquetas desasignadas con éxito',
      },
    },
    'tag-group': {
      create: {
        success: 'Grupo de etiquetas creado con éxito',
      },
      'find-all': {
        success: 'Grupos de etiquetas obtenidos',
      },
      'find-all-with-tags': {
        success: 'Etiquetas obtenidas',
      },
      'find-one': {
        success: 'Grupo de etiquetas obtenido',
        'not-found': 'Grupo de etiquetas no encontrado',
      },
      update: {
        success: 'Grupo de etiquetas actualizado',
        'not-found': 'Grupo de etiquetas no encontrado',
      },
      delete: {
        success: 'Grupo de etiquetas eliminado',
        'not-found': 'Grupo de etiquetas no encontrado',
      },
    },
    comment: {
      create: {
        success: 'Comentario creado con éxito',
        'not-found': 'Perfil no encontrado',
      },
      'get-by-profile': {
        success: 'Comentarios obtenidos',
        'not-found': 'Perfil no encontrado',
      },
      'toggle-solve': {
        success: 'Cambio de estado en la resolución del comentario',
        'not-found': 'Comentario no encontrado',
        conflict: 'El comentario no es resoluble',
      },
    },
    location: {
      'find-all': {
        success: 'Ubicaciones obtenidas',
      },
      'find-cities-by-arg-state': {
        success: 'Localidades de Argentina obtenidas',
        'not-found': `Provincia "\{\{argState\}\}" no encontrada`,
      },
      'arg-states': {
        success: 'Provincias de Argentina obtenidas',
      },
      'all-countries': {
        success: 'Países obtenidos',
      },
      'states-by-country': {
        success: 'Estados obtenidos',
        'not-found-error': `No se encontraron estados para el país \{\{countryCode\}\}`,
        'not-found': 'País no encontrado',
      },
    },
    'canned-response': {
      create: {
        success: 'Respuesta enlatada creada con éxito',
        conflict: 'Error en la creacion de la respuesta',
      },
      'get-all': {
        success: 'Respuestas enlatadas obtenidas con éxito',
        'not-found': 'No se encontraron respuestas enlatadas',
      },
      update: {
        success: 'Respuesta enlatada actualizada con éxito',
        'not-found': 'Respuesta enlatada no encontrada',
      },
      delete: {
        success: 'Respuesta enlatada eliminada con éxito',
        'not-found': 'Respuesta enlatada no encontrada',
      },
    },
    'event-folder': {
      create: {
        success: 'Carpeta de evento creada con éxito',
        conflict: 'Error en la creación de la carpeta de evento',
      },
      'get-all': {
        success: 'Carpetas de evento obtenidas con éxito',
        'not-found': 'No se encontraron carpetas de evento',
      },
      'get-by-id': {
        success: 'Carpeta de evento obtenida con éxito',
        'not-found': 'Carpeta de evento no encontrada',
      },
      update: {
        success: 'Carpeta de evento actualizada con éxito',
        'not-found': 'Carpeta de evento no encontrada',
      },
      delete: {
        success: 'Carpeta de evento eliminada con éxito',
        'not-found': 'Carpeta de evento no encontrada',
      },
    },
    event: {
      create: {
        success: 'Evento creado con éxito',
        conflict: 'Error en la creación del evento',
        'folder-not-found': 'Carpeta de evento no encontrada',
      },
      'get-all': {
        success: 'Eventos obtenidos con éxito',
        'not-found': 'No se encontraron eventos',
      },
      'get-by-id': {
        success: 'Evento obtenido con éxito',
        'not-found': 'Evento no encontrado',
      },
      update: {
        success: 'Evento actualizado con éxito',
        'not-found': 'Evento no encontrado',
        'subevent-not-found': 'Subevento no encontrado',
      },
      delete: {
        success: 'Evento eliminado con éxito',
        'not-found': 'Evento no encontrado',
      },
    },
  },
} as const;
