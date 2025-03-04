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
      ticket: 'Ticket',
      eventTicket: 'Tickets del evento',
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
      startingDate: {
        required: 'La fecha de inicio es requerida',
        invalid: 'La fecha de inicio debe ser una fecha válida',
      },
      endingDate: {
        required: 'La fecha de finalización es requerida',
        invalid: 'La fecha de finalización debe ser una fecha válida',
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
      name: {
        min: 'El nombre debe tener al menos 1 caracter',
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
      mail: {
        invalid:
          'El email no es válido. Debe tener el formato "algo@dominio.algo"',
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
    message: {
      id: {
        uuid: 'El ID debe ser un UUID',
      },
    },
    image: {
      id: {
        uuid: 'El formato del ID de la imagen es inválido.',
      },
      url: {
        url: 'Por favor, proporcione una URL válida para la imagen.',
      },
    },
    csv: {
      password: {
        required: 'La contraseña es obligatoria',
        empty: 'La contraseña no puede estar vacía',
      },
    },
    template: {
      name: {
        min: 'El nombre de la plantilla debe tener al menos 1 caracter',
        max: 'El nombre debe tener como máximo 512 caracteres',
        invalid:
          'El nombre debe ser una cadena con letras minúsculas y guiones bajos',
      },
      content: {
        max: 'El contenido debe tener como máximo 768 caracteres',
        min: 'El contenido debe tener al menos 1 caracter',
      },
      buttons: {
        max: 'No se pueden tener más de 3 botones',
        'max-length': 'Los botones no pueden tener más de 20 caracteres',
      },
    },
    ticket: {
      id: {
        uuid: 'El ID debe ser un UUID',
      },
      eventId: {
        uuid: 'El ID del evento debe ser un UUID',
      },
      fullName: {
        required: 'El nombre es requerido',
      },
      mail: {
        email: 'El email debe ser un email válido',
      },
      type: {
        invalid: 'El tipo de ticket es inválido',
      },
      status: {
        invalid: 'El estado del ticket es inválido',
      },
    },
    eventTicket: {
      amount: {
        min: 'La cantidad de tickets debe ser mayor a 0',
      },
      price: {
        min: 'El precio de los tickets debe ser mayor a 0',
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
      'check-password': {
        'not-found': 'Cuenta no encontrada',
        'invalid-password': 'Contraseña inválida',
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
        'tag-not-found': 'Etiqueta no encontrada',
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
        'active-event-not-editable': 'Evento activo no editable',
      },
      delete: {
        success: 'Evento eliminado con éxito',
        'not-found': 'Evento no encontrado',
      },
      'toggle-active': {
        success: 'Evento activo cambiado con éxito',
        'active-event-not-editable': 'Evento activo no editable',
        'not-found': 'Evento no encontrado',
      },
    },
    pdf: {
      'generate-pdf': {
        success: 'Ticket generado con éxito',
        'not-found': 'Ticket no encontrado',
      },
      'find-ticket': {
        success: 'Ticket encontrado con éxito',
        'not-found': 'Ticket no encontrado',
        'invalid-barcode': 'Error de formato en el valor del código de barras',
        error: 'Error al descifrar el ID del ticket',
      },
    },
    profile: {
      'find-all': {
        success: 'Perfiles obtenidos',
      },
      'find-by-id': {
        'not-found': 'Perfil no encontrado',
        success: 'Perfil obtenido',
      },
      'find-by-tag': {
        'not-found': 'Perfil no encontrado',
        'tags-not-found': 'Alguna de las etiquetas no existe',
        success: 'Perfiles obtenidos',
      },
      'find-by-tag-groups': {
        'not-found': 'Perfil no encontrado',
        'tag-groups-not-found': 'Alguno de los grupos de etiquetas no existe',
        success: 'Perfiles obtenidos',
      },
      create: {
        'participant-tag-not-found':
          'No se encontró la etiqueta de participante',
        success: 'Perfil creado con éxito',
        'dni-already-exists': 'Ya existe un perfil con ese DNI',
        'phone-number-already-exists': 'Ya existe un perfil con ese teléfono',
        'secondary-phone-number-already-exists':
          'Ya existe un perfil con ese teléfono secundario',
        conflict: 'Error en la creación del perfil',
      },
      delete: {
        success: 'Perfil eliminado con éxito',
        'not-found': 'Perfil no encontrado',
      },
      update: {
        success: 'Perfil actualizado con éxito',
        'not-found': 'Perfil no encontrado',
        conflict: 'Error en la actualización del perfil',
        'exclusive-tags': `Las etiquetas \{\{tag1\}\} y \{\{tag2\}\} son exclusivas del mismo grupo`,
      },
      'find-by-date-range': {
        success: 'Perfiles obtenidos',
        'invalid-date': 'Fecha inválida',
      },
      'find-by-phone-number': {
        success: 'Perfil obtenido',
        'not-found': 'Perfil no encontrado',
      },
      'find-trash': {
        success: 'Perfiles obtenidos',
      },
      'find-all-with-active-chat': {
        success: 'Perfiles obtenido',
      },
    },
    image: {
      update: {
        success: 'Imagen actualizada exitosamente',
        conflict: 'Conflicto al actualizar la imagen',
        invalid: 'Parámetros inválidos para actualizar la imagen',
        error: 'Error al subir la imagen al CDN',
        'purge-error': 'Error al purgar la imagen del CDN',
        'unprocessable-entity':
          'La imagen no es válida, debe ser un archivo de imagen',
      },
      delete: {
        success: 'Imagen eliminada exitosamente',
        'not-found': 'Perfil o foto no encontrados',
        initiated: 'Eliminación de imagen iniciada',
        error: 'Error al eliminar la imagen del CDN',
      },
    },
    csv: {
      'download-profiles': {
        success: 'CSV de modelos descargado con éxito',
        unauthorized:
          'No tienes autorización para descargar el archivo de modelos',
        error: 'Error al descargar el archivo CSV de modelos',
      },
      'download-all-tables': {
        success: 'CSV de todas las tablas descargado con éxito',
        unauthorized: 'No tienes autorización para descargar todas las tablas',
        error: 'Error al descargar el archivo CSV de todas las tablas',
      },
    },
    message: {
      'create-template': {
        success: 'Plantilla creada con éxito',
        error: 'Error al crear la plantilla',
      },
      'find-templates': {
        success: 'Plantillas encontradas',
      },
      'find-template-by-id': {
        error: 'Error al encontrar la plantilla',
        success: 'Plantilla encontrada',
      },
      'update-template': {
        success: 'Plantilla actualizada',
        error: 'Error al actualizar la plantilla',
        'not-found': 'Plantilla no encontrada',
      },
      'delete-template': {
        success: 'Plantilla eliminada',
        error: 'Error al eliminar la plantilla',
        'not-found': 'Plantilla no encontrada',
      },
      'send-message-to-phone': {
        success: 'Mensaje enviado',
        error: 'Error al enviar el mensaje',
      },
      'send-template-to-tags': {
        success: 'Plantilla enviada',
        error: 'Error al enviar la plantilla',
      },
      'find-messages-by-phone': {
        success: 'Mensajes encontrados',
        error: 'Error al encontrar los mensajes',
        'not-found': 'No se encontró el perfil',
      },
      'read-messages': {
        success: 'Mensajes leídos',
        error: 'Error al leer los mensajes',
      },
      'non-read-messages': {
        success: 'Mensajes no leídos encontrados',
        error: 'Error al encontrar los mensajes no leídos',
      },
      'last-message-timestamp': {
        success: 'Último mensaje obtenido',
        error: 'Error al obtener el último mensaje',
      },
    },
    ticket: {
      create: {
        success: 'Ticket creado con éxito',
        'event-not-found': 'Evento no encontrado',
        conflict: 'Error en la creación del ticket',
      },
      'find-all': {
        success: 'Tickets obtenidos',
      },
      'find-by-id': {
        success: 'Ticket obtenido',
        'not-found': 'Ticket no encontrado',
      },
      'find-by-mail': {
        success: 'Tickets por mail obtenidos',
        'not-found': 'Tickets por mail no encontrados',
      },
      'find-by-event': {
        success: 'Tickets por evento obtenidos',
        'not-found': 'Tickets por evento no encontrados',
      },
      update: {
        success: 'Ticket actualizado',
        'not-found': 'Ticket no encontrado',
        conflict: 'Error en la actualización del ticket',
      },
      delete: {
        success: 'Ticket eliminado',
        'not-found': 'Ticket no encontrado',
      },
    },
    webhook: {
      get: {
        success: 'Webhook verificado',
        forbidden: 'Prohibido',
        'bad-request': 'Solicitud incorrecta',
      },
      post: {
        unauthorized: 'No autorizado',
        'bad-request': 'Solicitud incorrecta',
        'no-secret': 'No se encontró un secreto de META_APP',
        error: 'Error al procesar el webhook',
        'tag-not-found': 'Etiqueta no encontrada',
        'profile-not-found': 'Perfil no encontrado',
        'no-body': 'No se encontró el cuerpo del webhook',
      },
      'send-automatic-response': `¡Hola \{\{name\}\}! Muchas gracias por participar de Expo Desfiles. ¡Ya estás dentro! En los próximos días vas a recibir más información acerca de los próximos desfiles. Podés seguirnos en nuestro Instagram @expodesfiles para enterarte de todas las novedades. ¡Saludos!`,
    },
  },
} as const;
