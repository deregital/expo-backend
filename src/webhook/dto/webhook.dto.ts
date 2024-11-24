export type Contact = {
  profile: {
    name: string;
  };
  wa_id: string;
};

export type WebhookImage = {
  id: string;
  sha256: string;
  mime_type: string;
};

export type WebhookMessage = {
  from: string;
  id: string;
  timestamp: string;
} & (
  | {
      type: 'text';
      text: {
        body: string;
      };
    }
  | {
      type: 'image';
      image: WebhookImage;
    }
  | {
      type: 'button';
      button: {
        payload: string;
        text: string;
      };
      context: {
        from: string;
        id: string;
      };
    }
);

export type WebHookRequest = {
  object: 'whatsapp_business_account';
  entry: [
    {
      id: string;
      changes: [
        {
          field: string;
          value: ReceivedMessage | StatusChange;
        },
      ];
    },
  ];
};

export type ReceivedMessage = {
  contacts: [Contact];
  messages: WebhookMessage[];
};

export type StatusChange = {
  metadata: {
    display_phone_number: string;
    phone_number_id: string;
  };
  statuses: [
    {
      id: string;
      status: 'delivered' | 'read' | 'sent' | 'failed';
      timestamp: string;
      recipient_id: string;
      conversation: {
        id: string;
        expiration_timestamp: string;
        origin: { type: string };
      };
    },
  ];
};

export type SendWhatsappResponse = {
  contacts: [
    {
      input: string;
      wa_id: string;
    },
  ];
  messages: [
    {
      id: string;
    },
  ];
};
