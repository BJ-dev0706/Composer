// components/FaqAccordion.jsx
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const faqs = [
  {
    question: 'How do I open a Composer account?',
    answer: 'To open a Composer account, visit our registration page and fill out the required information. You will need to provide personal details and verify your identity to get started.',
  },
  {
    question: 'What types of brokerage accounts can I open with Composer?',
    answer: 'Composer offers various brokerage accounts including Individual, Joint, Retirement (IRA), and Custodial accounts to suit your investment needs.',
  },
  {
    question: 'Where will my assets be held?',
    answer: 'Your assets will be held in secure, insured brokerage accounts managed by our trusted financial partners to ensure the safety and integrity of your investments.',
  },
  {
    question: 'Can I connect an external brokerage account?',
    answer: 'Yes, Composer allows you to connect external brokerage accounts. You can seamlessly integrate your existing accounts to manage all your investments in one place.',
  },
  {
    question: 'What fees are associated with the Composer Trading Pass?',
    answer: 'The Composer Trading Pass has a transparent fee structure with no hidden charges. Fees may include account maintenance, transaction fees, and premium feature subscriptions.',
  },
  {
    question: 'Are there any other fees?',
    answer: 'Besides the standard fees, there may be additional costs for premium services or third-party integrations. Please refer to our fee schedule for detailed information.',
  },
  {
    question: 'Can I transfer assets from another brokerage to Composer?',
    answer: 'Absolutely! Composer supports the transfer of assets from most major brokerages. Our support team can assist you in making the transfer process smooth and efficient.',
  },
  {
    question: "How does Composer's AI-driven trading work?",
    answer: "Composer's AI-driven trading uses advanced algorithms to analyze market data and execute trades on your behalf. This ensures optimal trading strategies based on real-time market conditions.",
  },
  {
    question: "How can I contact Composer's customer support for help?",
    answer: "You can contact Composer's customer support via email, live chat, or phone. Our support team is available 24/7 to assist you with any queries or issues you may have.",
  },
  {
    question: "Can I use Composer if I'm not based in the United States?",
    answer: "Yes, Composer is available to users in multiple countries. However, certain features and services may vary based on your location due to regulatory requirements.",
  },
  {
    question: 'What security measures does Composer take to protect my account?',
    answer: 'Composer employs industry-standard security measures including encryption, two-factor authentication, and regular security audits to protect your account and personal information.',
  },
];

// Define a custom interface to include Radix's custom CSS properties
interface CustomCSSProperties extends React.CSSProperties {
  '--radix-accordion-content-height'?: string;
  '--radix-accordion-content-width'?: string;
}

export default function FaqAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="md:ml-auto md:w-7/12">
      {faqs.map((faq, index) => {
        const value = `item-${index}`;
        return (
          <Accordion.Item key={value} value={value} className="overflow-hidden border-b border-black/25">
            <Accordion.Header>
              <Accordion.Trigger className="flex items-center justify-between w-full py-4 font-normal leading-none text-xl text-left group tracking-wide transition hover:bg-[#EEE]">
                {faq.question}
                <ChevronDownIcon
                  className="transition-transform duration-300 group-rdx-state-open:rotate-180 text-black/60 mr-5"
                  aria-hidden="true"
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content
              className="text-lg leading-7 tracking-wide max-w-prose transition-all duration-300 ease-in-out p-3"
              style={{
                '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)',
                '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)',
              } as CustomCSSProperties}
            >
              <p>{faq.answer}</p>
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}

