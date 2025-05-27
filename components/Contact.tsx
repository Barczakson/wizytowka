
import React, { useState } from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { SectionTitle } from './SectionTitle'; 

interface FormDataState {
  imie: string;
  nazwisko: string;
  email: string;
  subject: string;
  message: string; 
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormspreeError {
  message: string;
  field?: string; // Optional: Formspree might specify which field caused an error
}

// Standard animation classes for elements animated on scroll
const animationBaseClasses = "opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]";
const animationVisibleClasses = "group-[.is-visible]:opacity-100 group-[.is-visible]:translate-y-0";

export const Contact: React.FC = () => {
  const initialFormData: FormDataState = {
    imie: '',
    nazwisko: '',
    email: '',
    subject: '',
    message: '',
  };
  const [formData, setFormData] = useState<FormDataState>(initialFormData);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setSubmissionMessage(null);

    try {
      const response = await fetch("https://formspree.io/f/xwpodgww", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setSubmissionMessage('Dziękujemy! Wiadomość została wysłana pomyślnie.');
        setFormData(initialFormData); // Clear the form
      } else {
        const errorData = await response.json();
        let errorMessage = "Wystąpił błąd podczas wysyłania wiadomości.";
        if (errorData && errorData.errors && Array.isArray(errorData.errors)) {
            errorMessage = errorData.errors.map((err: FormspreeError) => err.message).join(' ');
        } else if (errorData && errorData.error) {
            errorMessage = errorData.error;
        }
        setSubmissionStatus('error');
        setSubmissionMessage(errorMessage);
      }
    } catch (error) {
      setSubmissionStatus('error');
      setSubmissionMessage('Nie udało się połączyć z serwerem. Spróbuj ponownie później.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <section id="kontakt" className="py-20 md:py-32 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="group"> 
          <SectionTitle 
            title="Gotowy na Cyfrową Rewolucję?" 
            subtitle="Porozmawiajmy o tym, jak mogę pomóc Twojej marce zabłysnąć online."
            textColor="text-white" 
            underlineColor="bg-white" 
          />
        </AnimateOnScroll>

        <AnimateOnScroll className="group" delay="0.2">
          <div 
            className={`max-w-3xl mx-auto bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-2xl text-gray-800 ${animationBaseClasses} ${animationVisibleClasses}`}
            style={{
              backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(59, 130, 246, 0.07) 0%, transparent 35%), radial-gradient(circle at 90% 80%, rgba(30, 58, 138, 0.07) 0%, transparent 35%)'
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="imie" className="block text-sm font-semibold text-gray-700 mb-1">Imię</label>
                  <input 
                    type="text" 
                    name="imie" 
                    id="imie" 
                    autoComplete="given-name" 
                    required 
                    value={formData.imie}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-lg bg-white/80 transition-all duration-300 focus:shadow-lg" 
                    disabled={submissionStatus === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="nazwisko" className="block text-sm font-semibold text-gray-700 mb-1">Nazwisko</label>
                  <input 
                    type="text" 
                    name="nazwisko" 
                    id="nazwisko" 
                    autoComplete="family-name" 
                    value={formData.nazwisko}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-lg bg-white/80 transition-all duration-300 focus:shadow-lg" 
                    disabled={submissionStatus === 'submitting'}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Adres Email</label>
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    autoComplete="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-lg bg-white/80 transition-all duration-300 focus:shadow-lg" 
                    disabled={submissionStatus === 'submitting'}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="temat" className="block text-sm font-semibold text-gray-700 mb-1">Temat Wiadomości</label>
                  <input 
                    id="temat" 
                    name="subject" 
                    type="text" 
                    required 
                    value={formData.subject}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-lg bg-white/80 transition-all duration-300 focus:shadow-lg" 
                    disabled={submissionStatus === 'submitting'}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="wiadomosc" className="block text-sm font-semibold text-gray-700 mb-1">Twoja Wiadomość</label>
                  <textarea 
                    id="wiadomosc" 
                    name="message" 
                    rows={5} 
                    required 
                    value={formData.message} 
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-lg bg-white/80 transition-all duration-300 focus:shadow-lg"
                    disabled={submissionStatus === 'submitting'}
                  ></textarea>
                </div>
              </div>

              {submissionMessage && (
                <div className={`mt-6 p-3 rounded-md text-sm ${submissionStatus === 'success' ? 'bg-green-100 text-green-700' : submissionStatus === 'error' ? 'bg-red-100 text-red-700' : ''}`}>
                  {submissionMessage}
                </div>
              )}

              <div className="mt-10 text-center">
                <button 
                  type="submit" 
                  className="w-full md:w-auto inline-flex justify-center py-3.5 px-16 border border-transparent shadow-lg text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:translate-y-[-3px] hover:shadow-[0_10px_20px_rgba(37,99,235,0.25)] disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={submissionStatus === 'submitting'}
                >
                  {submissionStatus === 'submitting' ? 'Wysyłanie...' : 'Wyślij Zapytanie'}
                </button>
              </div>
            </form>
            <div className="text-center mt-12 text-gray-600">
                <p className="mb-2">Preferujesz inną formę kontaktu?</p>
                <p className="mb-2">
                    Napisz na: <a href="mailto:adambarczewski00@gmail.com" className="text-indigo-700 font-semibold hover:underline">adambarczewski00@gmail.com</a>
                </p>
                <p>
                    Lub zadzwoń: <a href="tel:+48793030878" className="text-indigo-700 font-semibold hover:underline">+48 793 030 878</a>
                </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
