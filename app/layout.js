import './globals.css';

export const metadata = {
  title: 'Zeta Drab',
  description: 'Cybersecurity tools for everyone',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}
