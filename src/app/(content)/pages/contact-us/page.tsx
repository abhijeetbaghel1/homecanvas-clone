import Container from '@/components/common/Container';
import { siteConfig } from '@/lib/config/site';
import { generateMetadata } from '@/lib/seo/meta';
import ContactForm from '@/components/forms/ContactForm';

export const metadata = generateMetadata({
  title: 'Contact Us',
  description: 'Get in touch with us',
});

export default function ContactUsPage() {
  return (
    <div className="py-12">
      <Container size="lg">
        <h1 className="text-4xl font-serif font-bold mb-6">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-4 text-neutral-700">
              <p>
                <strong>Address:</strong>
                <br />
                {siteConfig.links.footer.address.line1}
                <br />
                {siteConfig.links.footer.address.line2}
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href={`mailto:${siteConfig.links.footer.email}`}
                  className="text-accent-walnut hover:underline"
                >
                  {siteConfig.links.footer.email}
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong>{' '}
                <a
                  href={`https://wa.me/${siteConfig.links.footer.whatsapp.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-walnut hover:underline"
                >
                  {siteConfig.links.footer.whatsapp}
                </a>
              </p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}

