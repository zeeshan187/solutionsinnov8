import { WhatsAppOutlined } from '@ant-design/icons';

export default function WhatsAppButton() {
  const whatsappNumber = "+923057567185";
  const whatsappURL = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppOutlined style={{ fontSize: '24px' }} />
    </a>
  );
}
