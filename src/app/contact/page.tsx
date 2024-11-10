import Link from 'next/link';
import React from 'react';

export default function ContactMe() {
  return (
    <section style={{ padding: '60px 20px', textAlign: 'center', fontFamily: 'Arial, sans-serif', marginTop: '120px' }}>

      <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '10px', fontWeight: 'bold' }}>CONTACT ME</h3>
      <h1 style={{ fontSize: '38px', color: '#F98585', marginBottom: '20px', fontWeight: 'bold' }}>Lets Make Something Together</h1>
      <p style={{ fontSize: '16px', color: '#000000', marginBottom: '40px', lineHeight: '1.5' }}>
        Connect With Us Effortlessly! Click The Contact Me Button To Reach Out And Lets Discuss How We Can
        <br /> Transform Your Digital Experiences Into Unforgettable Journeys.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px', margin: '0 auto', maxWidth: '1200px' }}>
        <form style={{ maxWidth: '400px', width: '100%' }}>
          <input
            type="text"
            placeholder="Enter Your Name Here"
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '15px',
              borderRadius: '20px',
              border: '1px solid #000',
              color: "#000000",
              outline: 'none',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
              fontSize: '14px'
            }}
          />
          <input
            type="email"
            placeholder="Enter Your Email Here"
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '15px',
              borderRadius: '20px',
              border: '1px solid #000',
              color: "#000000",
              outline: 'none',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
              fontSize: '14px'
            }}
          />
          <textarea
            placeholder="Write Something..."
            style={{
              width: '100%',
              padding: '15px',
              borderRadius: '20px',
              border: '1px solid #000',
              color: "#000000",
              outline: 'none',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
              fontSize: '14px',
              height: '100px'
            }}
          />
          <button
            type='submit'
            style={{
              width: '160px',
              height: '39px',
              backgroundColor: '#F98585',
              padding: '6px',
              marginTop: '25px',
              marginBottom: '25px',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: '10px',
              border: 'none',
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bolder',
                letterSpacing: '2px',
              }}
            >
              SEND
            </Link>
          </button>
        </form>

        <div style={{ maxWidth: '300px', width: '100%', textAlign: 'center', lineHeight: '1.5', marginTop: '20px' }}>
          <h3 style={{ fontSize: '26px', color: '#000000', marginBottom: '15px' }}>Personal Details</h3>
          <p style={{ fontSize: '14px', marginBottom: '8px' }}>
            <strong>Phone:</strong><br />
            +92 300 0987654<br />
            +92 300 7000799
          </p>
          <p style={{ fontSize: '14px', marginBottom: '8px' }}>
            <strong>Email:</strong><br />
            abdulrafey@gmail.com
          </p>
          <p style={{ fontSize: '14px' }}>
            <strong>Address:</strong><br />
            Karachi, Pakistan.
          </p>
        </div>
      </div>
    </section>
  );
}
