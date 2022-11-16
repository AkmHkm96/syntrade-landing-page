import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How do I know this platform is really helpful?',
      answer:
        'The platform has every feature you can use in order to start trade. ',
    },
    {
      question: 'Does Syntrade provide users with tips on the platform?',
      answer:
        'Syntrade provides limited tips, however, users can reach us out easily by contacting us or book a session with our experienced traders to teach more about online trading.',
    },
    {
      question: 'Is Syntrade free to use?',
      answer: 'Yes it is, no charges applied for users.',
    },
  ],
  [
    {
      question: 'Is there any age limit for users to register with Syntrade?',
      answer:
        'Syntrade hasn’t set any age limit to register with us since knowledge is for everyone.',
    },
    {
      question: 'How do I get my account if I forgot my password?',
      answer:
        'You can simply click on the “Forgot Password” in the sign-in page and follow the steps stated. Alternatively, contact us through our email & we will help you get your account back.',
    },
    {
      question: 'Do you have any social media accounts?',
      answer: 'Yes we do. Follow us on our Instagram, Facebook, and Twitter.',
    },
  ],
  [
    {
      question: 'Is Syntrade available 24/7?',
      answer: 'Yes we are. You can literally trade anywhere and anytime.',
    },
    {
      question: 'Do we get real money for trade if we profit?',
      answer:
        'Since this is only for learning plurposes, users will not get real money as we only provide fake money for users to invest in their account.',
    },
    {
      question: 'Can I delete my account if I will no longer use Syntrade?',
      answer:
        'We are deeply sad if you leave us so soon, however, users are able to delete their account at any time in the users profile page.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
