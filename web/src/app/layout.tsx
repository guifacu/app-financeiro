import '../styles/globals.css';

export const metadata = {
  title: 'App Financeiro',
  description: 'Aplicativo para controle financeiro pessoal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

