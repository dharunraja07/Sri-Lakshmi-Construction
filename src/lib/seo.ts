import { COMPANY_INFO } from "@/data/company";
import { FAQS } from "@/data/faqs";
import { SERVICES } from "@/data/services";

export const SITE_URL = "https://www.srilakshmiconstruction.in";

export const DEFAULT_SEO = {
  title: "House Construction in Pudukkottai, Karaikudi and Trichy | Sri Lakshmi Construction",
  description:
    "Sri Lakshmi Construction offers new house construction, villas, duplex houses, commercial buildings, renovation, interiors, architectural design and plan approval services in Pudukkottai, Karaikudi and Trichy.",
  keywords: [
    "house construction in Pudukkottai",
    "house construction in Karaikudi",
    "house construction in Trichy",
    "building contractors Pudukkottai",
    "villa construction Pudukkottai Karaikudi Trichy",
    "duplex house builders Trichy",
    "commercial building construction Pudukkottai",
    "building plan approval Pudukkottai",
    "architectural 3D elevation Pudukkottai",
    "NRI house construction Tamil Nadu",
    "turnkey builders Pudukkottai",
  ],
};

export function getGeneralContractorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "LocalBusiness"],
    "@id": `${SITE_URL}/#contractor`,
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.name,
    description: DEFAULT_SEO.description,
    url: SITE_URL,
    telephone: `+91-${COMPANY_INFO.phone}`,
    email: COMPANY_INFO.email,
    priceRange: "₹₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "21:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Pudukkottai",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Tamil Nadu",
        },
      },
      {
        "@type": "City",
        name: "Karaikudi",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Tamil Nadu",
        },
      },
      {
        "@type": "City",
        name: "Trichy",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Tamil Nadu",
        },
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Santhai Road, Near Municipal Office",
      addressLocality: "Pudukkottai",
      addressRegion: "Tamil Nadu",
      postalCode: "622001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.3797,
      longitude: 78.8208,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services",
      itemListElement: SERVICES.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
          url: `${SITE_URL}/services#${service.slug}`,
        },
        position: index + 1,
      })),
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: COMPANY_INFO.name,
    description: DEFAULT_SEO.description,
    publisher: {
      "@id": `${SITE_URL}/#contractor`,
    },
    inLanguage: "en-IN",
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}
