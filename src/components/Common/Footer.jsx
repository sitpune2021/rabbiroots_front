import React, { useState } from "react";
import FooterAccordion from "../Footer/FooterAccordion";
import FooterColumn from "../Footer/FooterColumn";
import { footerSections } from "../../Data/footerData";

import LinkIcon from "@mui/icons-material/Link";
import HandshakeIcon from "@mui/icons-material/Handshake";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import GridViewIcon from "@mui/icons-material/GridView";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white md:bg-white text-gray-700 py-8 md:py-10 px-4 sm:px-8 md:px-16 lg:px-22 border-t border-gray-200">
      <div className="w-full mx-auto max-w-7xl">
        <div className="md:hidden">
          <FooterAccordion
            title="Useful Links"
            icon={LinkIcon}
            isOpen={openSection === "useful"}
            toggle={() => toggleSection("useful")}
          >
            <ul className="space-y-3">
              {footerSections.usefulLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-green-600 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterAccordion>

          <FooterAccordion
            title="Partner"
            icon={HandshakeIcon}
            isOpen={openSection === "partner"}
            toggle={() => toggleSection("partner")}
          >
            <ul className="space-y-3">
              {footerSections.partner.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-green-600 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterAccordion>

          <FooterAccordion
            title="Recipes & Bistro"
            icon={RestaurantIcon}
            isOpen={openSection === "recipes"}
            toggle={() => toggleSection("recipes")}
          >
            <ul className="space-y-3">
              {footerSections.recipes.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-green-600 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterAccordion>

          <FooterAccordion
            title="Categories"
            icon={GridViewIcon}
            isOpen={openSection === "categories"}
            toggle={() => toggleSection("categories")}
          >
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {footerSections.categories.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-green-600 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="inline-block mt-4 text-sm font-semibold text-green-600 hover:text-green-700"
            >
              See all categories <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </a>
          </FooterAccordion>

          <FooterAccordion
            title="More Categories"
            icon={MoreHorizIcon}
            isOpen={openSection === "more"}
            toggle={() => toggleSection("more")}
          >
            <ul className="space-y-3">
              {footerSections.moreCategories.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-green-600 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterAccordion>
        </div>

        <div className="hidden md:flex w-full flex-col gap-10 md:gap-8 md:flex-row md:items-start md:justify-between">
          <FooterColumn
            title="Useful Links"
            links={footerSections.usefulLinks}
          />
          <FooterColumn
            title="Partner"
            links={footerSections.partner}
            hideTitle
          />
          <FooterColumn
            title="Recipes & Bistro"
            links={footerSections.recipes}
            hideTitle
          />

          <div className="mb-8 md:mb-0 w-full sm:w-auto md:w-[340px]">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                Categories
              </h3>
              <a
                href="#"
                className="text-green-600 text-sm font-semibold hover:underline"
              >
                see all
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FooterColumn links={footerSections.categories.slice(0, 6)} />
              <FooterColumn links={footerSections.categories.slice(6)} />
            </div>
          </div>

          <FooterColumn
            title="More Categories"
            links={footerSections.moreCategories}
            hideTitle
          />
        </div>

        <hr className="my-6 md:my-8 border-gray-200" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-5 md:space-y-0">
          <p className="text-center md:text-left text-xs md:text-sm">
            © RabbiRoots Commerce Private Limited, 2024-2025
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-800 text-sm whitespace-nowrap">
                Download App
              </span>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                <AppleIcon sx={{ fontSize: 28 }} />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                <PlayArrowIcon sx={{ fontSize: 28 }} />
              </a>
            </div>
            <div className="flex gap-4">
              <FacebookIcon
                sx={{ cursor: "pointer", "&:hover": { color: "#1877F2" } }}
              />
              <TwitterIcon
                sx={{ cursor: "pointer", "&:hover": { color: "#1DA1F2" } }}
              />
              <InstagramIcon
                sx={{ cursor: "pointer", "&:hover": { color: "#E4405F" } }}
              />
              <LinkedInIcon
                sx={{ cursor: "pointer", "&:hover": { color: "#0A66C2" } }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-[11px] text-gray-400 text-center md:text-left leading-relaxed">
          <p>
            "RabbiRoots" is owned & managed by "RabbiRoot Commerce Private
            Limited" and is not related, linked or interconnected in whatsoever
            manner or nature, to "GROFFR.COM" which is a real estate services
            business operated by "Redstone Consultancy Services Private
            Limited".
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
