// emails/ContactFormEmail.tsx

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Link,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
  industry?: string;
  volume?: string;
  contactPreference?: string;
  submittedAt: Date;
}

export const ContactFormEmail = ({
  name,
  email,
  message,
  company,
  phone,
  industry,
  volume,
  contactPreference,
  submittedAt,
}: ContactFormEmailProps) => {
  const formattedDate = new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(submittedAt);

  return (
    <Html>
      <Head />
      <Preview>Nuevo contacto de {name} - {company || 'Sin empresa'}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nuevo Formulario de Contacto</Heading>
          
          <Section style={section}>
            <Text style={label}>Nombre:</Text>
            <Text style={value}>{name}</Text>
          </Section>

          {company && (
            <Section style={section}>
              <Text style={label}>Empresa:</Text>
              <Text style={value}>{company}</Text>
            </Section>
          )}

          <Section style={section}>
            <Text style={label}>Email:</Text>
            <Link href={`mailto:${email}`} style={link}>
              {email}
            </Link>
          </Section>

          {phone && (
            <Section style={section}>
              <Text style={label}>Teléfono:</Text>
              <Text style={value}>{phone}</Text>
            </Section>
          )}

          {industry && (
            <Section style={section}>
              <Text style={label}>Industria:</Text>
              <Text style={value}>{industry}</Text>
            </Section>
          )}

          {volume && (
            <Section style={section}>
              <Text style={label}>Volumen RAEE:</Text>
              <Text style={value}>{volume}</Text>
            </Section>
          )}

          {contactPreference && (
            <Section style={section}>
              <Text style={label}>Preferencia de contacto:</Text>
              <Text style={value}>{contactPreference}</Text>
            </Section>
          )}

          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>Mensaje:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Enviado el {formattedDate}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

ContactFormEmail.PreviewProps = {
  name: 'Juan Pérez',
  email: 'juan@example.com',
  company: 'Tech Solutions SL',
  phone: '+34 600 000 000',
  industry: 'Tecnología',
  volume: '1-10 toneladas/año',
  contactPreference: 'email',
  message: 'Me gustaría obtener más información sobre sus servicios...',
  submittedAt: new Date(),
} as ContactFormEmailProps;

export default ContactFormEmail;

// Styles
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
  marginBottom: '16px',
};

const label = {
  color: '#666',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  margin: '0 0 4px',
};

const value = {
  color: '#333',
  fontSize: '16px',
  margin: '0 0 16px',
};

const link = {
  color: '#2563eb',
  fontSize: '16px',
  textDecoration: 'underline',
};

const messageText = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
  whiteSpace: 'pre-wrap' as const,
  margin: '0',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 40px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0 40px',
  marginTop: '24px',
};