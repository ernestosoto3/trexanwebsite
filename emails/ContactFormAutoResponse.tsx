// emails/ContactFormAutoResponse.tsx

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormAutoResponseProps {
  name: string;
}

export const ContactFormAutoResponse = ({
  name,
}: ContactFormAutoResponseProps) => {
  return (
    <Html>
      <Head />
      <Preview>Gracias por contactarnos, {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>¡Gracias por tu mensaje!</Heading>
          
          <Section style={section}>
            <Text style={text}>Hola {name},</Text>
            <Text style={text}>
              Hemos recibido tu mensaje y nos pondremos en contacto contigo 
              lo antes posible, normalmente en un plazo de 24-48 horas.
            </Text>
            <Text style={text}>
              Si tu consulta es urgente, no dudes en llamarnos directamente.
            </Text>
            <Text style={text}>
              Saludos cordiales,<br />
              El Equipo
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

ContactFormAutoResponse.PreviewProps = {
  name: 'Juan Pérez',
} as ContactFormAutoResponseProps;

export default ContactFormAutoResponse;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0 20px',
  padding: '0 40px',
};

const section = {
  padding: '0 40px',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '16px 0',
};