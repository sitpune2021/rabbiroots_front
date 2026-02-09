import React from "react";

const FooterColumn = ({ title, links, hideTitle = false }) => {
  return (
    <div className="mb-8 md:mb-0">
      <h3
        className={`text-sm font-bold mb-4 uppercase tracking-wider text-gray-900 ${hideTitle ? "md:invisible" : ""}`}
      >
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.href}
              className="text-sm text-gray-600 hover:text-green-600 transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
