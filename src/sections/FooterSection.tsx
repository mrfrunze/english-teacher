import React from 'react'

const FooterSection = () => {
  const year = new Date().getFullYear();
  return (
    <footer role="contentinfo">
      <div className="container mx-auto max-w-[1200px] py-6 text-center">
        {/* simple, accessible footer line */}
        <p
          className="text-sm md:text-base leading-relaxed"
          style={{ fontFamily: "var(--font-rubik)" }}
        >
          © {year} Linet Teacher. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default FooterSection