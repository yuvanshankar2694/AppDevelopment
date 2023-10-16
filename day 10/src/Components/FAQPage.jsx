import React, { useState } from 'react'
// import '../assets/css/FAQPage.css' // Import your CSS file for styling

function FAQPage() {
  // Define an array of FAQ items with questions and answers
  const faqItems = [
    {
      question: 'What services do you offer?',
      answer:
        'We offer a wide range of services including smartphone repairs, screen replacements, battery replacements, software troubleshooting, and more.',
    },
    {
      question: 'Do I need to make an appointment for service?',
      answer:
        'Appointments are recommended to reduce wait times, but walk-ins are also welcome.',
    },
    {
      question: 'How long does a repair usually take?',
      answer:
        'Repair times vary depending on the issue and parts availability. Our technicians will provide an estimated time after diagnosing your device.',
    },
    // Add more FAQ items as needed
  ]

  // Define a state variable to track which FAQ items are open
  const [openItems, setOpenItems] = useState([])

  // Function to toggle the visibility of an FAQ item
  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index))
    } else {
      setOpenItems([...openItems, index])
    }
  }

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleItem(index)}>
              {item.question}
              <span
                className={`faq-toggle ${
                  openItems.includes(index) ? 'open' : ''
                }`}
              >
                &#9660;
              </span>
            </div>
            <div
              className={`faq-answer ${
                openItems.includes(index) ? 'open' : ''
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQPage
