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
      otp: 'OTP',
      ticket: 'Ticket',
      eventTicket: 'Tickets del evento',
      ticketGroup: 'Grupo de tickets',
      production: 'Producción',
      productionAffiliationRequest: 'Solicitud de afiliación a producción',
      dynamicForm: 'Formulario dinámico',
      dynamicQuestion: 'Pregunta dinámica',
      dynamicOption: 'Opción dinámica',
    },
    tag: { assisted: 'Asistió', confirmed: 'Confirmó asistencia' },
    ticketType: {
      STAFF: 'Staff',
      SPECTATOR: 'Espectador',
      PARTICIPANT: 'Participante',
    },
    'production-role': 'Roles de producción',
    conflict: `Ya existe un registro con el campo \{\{field\}\} '\{\{value\}\}' en la tabla de \{\{model\}\}`,
    'not-found': `No se encontró un registro con el campo \{\{field\}\} '\{\{value\}\}' en la tabla de \{\{model\}\}`,
  },
  model: {
    comment: {
      id: { uuid: 'El ID debe ser un UUID' },
      content: { min: 'El contenido debe tener al menos 1 caracter' },
      isSolvable: { required: 'No se indica si el comentario es resoluble' },
    },
    account: {
      id: { required: 'El ID es requerido', uuid: 'El ID debe ser un UUID' },
      username: { required: 'El nombre de usuario es requerido' },
      email: {
        required: 'El email es requerido',
        email: 'El email debe ser un email válido',
      },
      password: {
        required: 'La contraseña es requerida',
        min: 'La contraseña debe tener al menos 6 caracteres',
      },
      role: { required: 'El rol es requerido', invalid: 'El rol es inválido' },
    },
    tag: {
      id: { uuid: 'El ID debe ser un UUID' },
      name: {
        required: 'El nombre es requerido',
        min: 'El nombre debe tener al menos 1 caracter',
      },
      type: { invalid: 'El tipo de etiqueta es inválido' },
    },
    event: {
      id: { uuid: 'El ID debe ser un UUID' },
      name: { required: 'El nombre es requerido' },
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
      location: { required: 'La ubicación es requerida' },
      eventPictureUrl: {
        invalid: 'La URL de la imagen del evento no es válida',
      },
      eventBannerUrl: {
        invalid: 'La URL del banner del evento no es válida',
      },
    },
    tagGroup: {
      id: { uuid: 'El ID debe ser un UUID' },
      name: { required: 'El nombre es requerido' },
      color: {
        invalid: 'El color debe tener el formato hexadecimal (#ABCDEF)',
      },
    },
    'event-folder': {
      id: { uuid: 'El ID debe ser un UUID' },
      name: { min: 'El nombre debe tener al menos 1 caracter' },
      color: {
        invalid: 'El color debe tener el formato hexadecimal (#ABCDEF)',
      },
    },
    profile: {
      id: { uuid: 'El ID debe ser un UUID' },
      phoneNumber: {
        required: 'El teléfono es un campo obligatorio',
        invalid: 'El teléfono no es válido',
      },
      secondaryPhoneNumber: { invalid: 'El teléfono secundario no es válido' },
      fullName: { required: 'El nombre es un campo obligatorio' },
      profilePictureUrl: {
        invalid: 'La URL de la imagen de perfil no es válida',
      },
      mail: {
        invalid:
          'El email no es válido. Debe tener el formato "algo@dominio.algo"',
      },
    },
    location: {
      id: { uuid: 'El ID debe ser un UUID' },
      latitude: { minmax: 'La latitud debe estar entre -90 y 90' },
      longitude: { minmax: 'La longitud debe estar entre -180 y 180' },
    },
    'canned-response': {
      id: { uuid: 'El ID debe ser un UUID' },
      name: {
        required: 'El nombre es requerido',
        min: 'El nombre debe tener al menos 1 caracter',
      },
      content: {
        required: 'El contenido es requerido',
        min: 'El contenido debe tener al menos 1 caracter',
      },
    },
    message: { id: { uuid: 'El ID debe ser un UUID' } },
    image: {
      id: { uuid: 'El formato del ID de la imagen es inválido.' },
      url: { url: 'Por favor, proporcione una URL válida para la imagen.' },
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
      dni: {
        required: 'El DNI es requerido',
      },
      seat: {
        required: 'El asiento es requerido',
      },
    },
    ticketGroup: {
      id: {
        uuid: 'El ID debe ser un UUID',
      },
      amountTickets: 'La cantidad de tickets debe ser mayor a 0',
      status: {
        invalid: 'El estado del grupo de tickets es inválido',
      },
    },
    eventTicket: {
      amount: {
        min: `La cantidad de tickets de \{\{type\}\} debe ser mayor a 0`,
      },
      price: { min: 'El precio de los tickets debe ser mayor a 0' },
    },
    production: {
      id: {
        uuid: 'El ID debe ser un UUID',
      },
      name: {
        min: 'El nombre de la producción debe tener al menos 1 caracter',
      },
    },
    productionAffiliationRequest: {
      id: {
        uuid: 'El ID debe ser un UUID',
      },
    },
    dynamicOption: {
      id: { uuid: 'El ID debe ser un UUID' },
    },
    dynamicQuestion: {
      id: { uuid: 'El ID debe ser un UUID' },
      text: {
        required: 'La pregunta es requerida',
        min: 'La pregunta debe tener al menos 1 caracter',
      },
    },
    dynamicForm: {
      id: { uuid: 'El ID debe ser un UUID' },
      name: {
        required: 'El nombre es requerido',
        min: 'El nombre debe tener al menos 1 caracter',
      },
    },
  },
  route: {
    auth: {
      'invalid-credentials': 'Credenciales inválidas',
      'no-token': 'No se encontró un token',
      'invalid-token': 'Token inválido',
      'user-not-found': 'Usuario no encontrado',
      'phone-not-verified': 'El teléfono no está verificado',
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
      me: { success: 'Cuenta obtenida' },
      'check-password': {
        'not-found': 'Cuenta no encontrada',
        'invalid-password': 'Contraseña inválida',
      },
    },
    tag: {
      create: { success: 'Etiqueta creada con éxito' },
      'find-all': { success: 'Etiquetas obtenidas' },
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
      'massive-allocation': { success: 'Etiquetas asignadas con éxito' },
      'massive-deallocation': { success: 'Etiquetas desasignadas con éxito' },
    },
    'tag-group': {
      create: { success: 'Grupo de etiquetas creado con éxito' },
      'find-all': { success: 'Grupos de etiquetas obtenidos' },
      'find-all-with-tags': { success: 'Etiquetas obtenidas' },
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
      'find-all': { success: 'Ubicaciones obtenidas' },
      'find-cities-by-arg-state': {
        success: 'Localidades de Argentina obtenidas',
        'not-found': `Provincia "\{\{argState\}\}" no encontrada`,
      },
      'arg-states': { success: 'Provincias de Argentina obtenidas' },
      'all-countries': { success: 'Países obtenidos' },
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
        'not-found-description': 'Desfile de moda',
      },
      'get-statistics': {
        success: 'Estadisticas obtenidas con éxito',
      },
      'get-statistics-by-id': {
        success: 'Estadisticas del evento obtenidas con éxito',
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
        'active-event-not-deletable': 'No se puede eliminar un evento activo',
        'with-tickets-not-deletable':
          'No se puede eliminar un evento con tickets ya emitidos',
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
        pdf: {
          footer:
            'Para cualquier duda, reclamo o consulta llamar al 11-6056-7270 o comunicarse vía mail a ariellask@gmail.com.\nMás información en expodesfiles.com',
        },
      },
      'find-ticket': {
        success: 'Ticket encontrado con éxito',
        'not-found': 'Ticket no encontrado',
        'invalid-barcode': 'Error de formato en el valor del código de barras',
        error: 'Error al descifrar el ID del ticket',
      },
    },
    profile: {
      'find-all': { success: 'Perfiles obtenidos' },
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
      'find-trash': { success: 'Perfiles obtenidos' },
      'find-all-with-active-chat': { success: 'Perfiles obtenido' },
      'referral-code-exists': {
        success: 'Se ha encontrado la existencia del codigo de referido',
      },
      'referral-code-usage': {
        success:
          'Se ha encontrado la cantidad de veces usadas el codigo de referido',
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
      'find-templates': { success: 'Plantillas encontradas' },
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
        'max-tickets-reached':
          'No se pueden emitir más tickets para este evento',
        'profile-id-required':
          'El ID del perfil es requerido en el ticket de participante',
      },
      'create-many': {
        success: 'Tickets creados con éxito',
        'event-not-found': 'Evento no encontrado',
        error: 'Error en la creación de los tickets',
        'max-tickets-reached':
          'No se pueden emitir más tickets para este evento',
        'type-not-found': 'Tipo de ticket no encontrado',
        'ticket-group-not-found': 'Grupo de tickets no encontrado',
        'max-tickets-not-found': 'Cantidad máxima de tickets no encontrada',
      },
      'get-pdfs-by-ticket-group': {
        success: 'PDFs de tickets obtenidos con éxito',
        'not-found': 'Grupo de tickets no encontrado',
        error: 'Error al obtener los PDFs de los tickets',
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
        'participant-not-found': 'Participante no encontrado',
      },
      'send-email': {
        success: 'Email enviado',
        'not-found': 'Ticket no encontrado',
        error: 'Error al enviar el email',
        unauthorized: 'No estás autorizado para enviar email para este ticket',
        mail: {
          subject: `Llegó tu ExpoTicket para el evento \{\{eventName\}\}!`,
          text: `Te esperamos el \{\{eventDate\}\} a las \{\{eventTime\}\} en \{\{eventLocation\}\}. ¡No te lo pierdas!`,
        },
      },
      scan: {
        'not-found': 'Ticket no encontrado',
        'event-not-found': 'Evento no encontrado',
        success: 'Ticket escaneado con éxito',
        'already-scanned': 'El ticket ya fue escaneado',
        'participant-not-found': 'Participante no encontrado',
        'event-ended': 'El evento ya ha finalizado',
        'invalid-type': 'El tipo de ticket no es válido',
      },
    },
    'ticket-group': {
      create: {
        success: 'Grupo de tickets creado',
        'event-not-found': 'Evento no encontrado',
        conflict: 'Error en la creación del grupo de tickets',
      },
      'find-group': {
        success: 'Grupo de tickets encontrado',
        'not-found': 'Grupo de tickets no encontrado',
        conflict: 'Error en la búsqueda del grupo de tickets',
      },
      'find-tickets-by-event': {
        success: 'Tickets por evento obtenidos',
        'not-found': 'Tickets por evento no encontrados',
      },
      update: {
        success: 'Grupo de tickets actualizado',
        'not-found': 'Grupo de tickets no encontrado',
      },
      delete: {
        success: 'Grupo de tickets eliminado',
        'not-found': 'Grupo de tickets no encontrado',
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
    otp: {
      'secret-not-found': 'El secreto de OTP no se encontró',
      'already-exists': 'El código de verificación ya fue enviado',
      'phone-already-verified':
        'El teléfono ya fue verificado, por favor inicie sesión',
      send: {
        error: 'Error al enviar el código de verificación',
        'phone-already-verified':
          'El teléfono ya fue verificado, por favor inicie sesión',
        'profile-not-found':
          'No se encontró un perfil asociado al teléfono. Por favor registrate',
        success: 'Código de verificación enviado con éxito',
      },
      verify: {
        'error-format': 'El código debe tener 6 dígitos',
        'invalid-otp': 'Error al verificar el código',
        'no-otp-found': 'No se encontró un código de verificación',
        'otp-expired':
          'El código de verificación expiró. Por favor solicita uno nuevo',
        success: 'Código de verificación verificado con éxito',
      },
    },
    'mi-expo': {
      'my-events': { success: 'Eventos obtenidos' },
      'my-tickets': { success: 'Tickets obtenidos' },
      'emit-ticket': { success: 'Ticket emitido' },
    },
    mercadopago: {
      'create-preference': {
        success: 'Preferencia creada con éxito',
        'event-not-found': 'Evento no encontrado',
        error: 'Error en la creación de la preferencia',
        conflict: 'Error en la creación de la preferencia',
        title: `Entradas para el evento \{\{eventName\}\}, x\{\{quantity\}\}`,
      },
      webhook: {
        success: 'Webhook procesado con éxito',
        error: 'Error al procesar el webhook',
        'signature-not-found': 'Firma no encontrada',
        'invalid-signature': 'Firma inválida',
      },
    },
    production: {
      create: {
        success: 'Producción creada con éxito',
        'already-exists': 'Producción ya existente',
      },
      delete: {
        'event-active': `No se puede eliminar la producción \{\{productionName\}\} porque tiene eventos activos`,
        'not-found': 'Producción no encontrada',
        success: 'Producción eliminada con éxito',
      },
      update: {
        success: 'Producción actualizada con éxito',
        'not-found': 'Producción no encontrada',
        'already-exists': 'Producción ya existente',
      },
      'create-role': {
        success: 'Rol de producción creado con éxito',
        'group-not-found': 'Grupo de etiquetas no encontrado',
      },
      'get-all': {
        success: 'Producciones obtenidas con éxito',
        'not-found': 'No se encontraron producciones',
      },
    },
    'production-affiliation-request': {
      create: {
        success: 'Solicitud de afiliación a producción creada con éxito',
        conflict: 'Error en la creación de la solicitud de afiliación',
        'already-admin': 'Ya eres administrador de una producción',
      },
      update: {
        success: 'Solicitud de afiliación a producción actualizada con éxito',
        conflict: 'Error en la actualización de la solicitud de afiliación',
        'not-found': 'Solicitud de afiliación no encontrada',
        unauthorized: 'No tienes autorización para actualizar la solicitud',
      },
      'find-by-production': {
        success: 'Solicitud de afiliación a producción obtenida con éxito',
        'not-found': 'Producción no encontrada',
      },
    },
    'dynamic-form': {
      create: {
        success: 'Formulario dinámico creado con éxito',
        conflict: 'Error en la creación del formulario dinámico',
      },
    },
  },
} as const;
