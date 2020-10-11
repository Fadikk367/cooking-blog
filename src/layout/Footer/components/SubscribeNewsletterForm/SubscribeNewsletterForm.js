import React, { useState } from 'react';

import { NewsletterForm, EmailInput, SubscribeButton } from './SubscribeNewsletterForm.css';


const SubscribeNewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubscribeNewsletter = e => {
    e.preventDefault();

    if (!email) 
      return;

    console.log(`Add ${email} to mailing list action...`);
    setEmail('');
  }

  return (
    <NewsletterForm onSubmit={handleSubscribeNewsletter}>
      <EmailInput 
        type="text" 
        placeholder="Email Address" 
        value={email} 
        onChange={e => setEmail(e.target.value)}
      />
      <SubscribeButton type="submit">Subscribe</SubscribeButton>
    </NewsletterForm>
  )
}

export default SubscribeNewsletterForm;