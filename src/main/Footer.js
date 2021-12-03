import React from 'react';

// components

function Contact() {
  return (
    <div className="special-button">
      <a href="mailto:ninte.dev@gmail.com?subject=Nullnow Computing">
        <h3>
          Contact{' '}
          <i className="bi bi-envelope-open-fill special-button-icon"></i>
        </h3>
      </a>
    </div>
  );
}

function Shop() {
  return (
    <div className="special-button">
      <a href="http://shop.nullnow.com">
        <h3>
          Shop <i class="bi bi-cart-check-fill special-button-icon"></i>
        </h3>
      </a>
    </div>
  );
}

function Blog() {
  return (
    <div className="special-button">
      <a href="https://blog.nullnow.com">
        <h3>
          Blog <i class="bi bi-journal-bookmark-fill special-button-icon"></i>
        </h3>
      </a>
    </div>
  );
}

function Copyright() {
  return (
    <h1 className="copyright">
      Nullnow Computing &copy; {new Date().getFullYear()}
    </h1>
  );
}

export default function Footer() {
  return (
    <div className="footer">
      <div className="activity">
        <Contact />
        <Shop />
        <Blog />
      </div>
      <Copyright />
    </div>
  );
}
