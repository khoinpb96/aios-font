const iconData = [
  "ai-active-rain",
  "ai-arrow-a-n",
  "ai-arrow-a-p",
  "ai-arrow-b-n",
  "ai-arrow-b-p",
  "ai-arrow-c-n",
  "ai-arrow-c-p",
  "ai-arrow-d-n",
  "ai-arrow-d-p",
  "ai-arrow-e-n",
  "ai-arrow-e-p",
  "ai-arrow-i-d",
  "ai-arrow-i-n",
  "ai-arrow-i-p",
  "ai-arrow-i-u",
  "ai-bbb",
  "ai-bed",
  "ai-bed-a",
  "ai-blogger",
  "ai-buildings",
  "ai-caimeiju",
  "ai-calendar",
  "ai-cameo",
  "ai-cameo-longform",
  "ai-car",
  "ai-cellphone",
  "ai-check-a",
  "ai-check-list",
  "ai-check-o",
  "ai-close-a",
  "ai-close-b",
  "ai-close-c",
  "ai-close-d",
  "ai-close-e",
  "ai-close-f",
  "ai-close-g",
  "ai-coin",
  "ai-comment-a",
  "ai-credit-card",
  "ai-credit-card-alt",
  "ai-document-a",
  "ai-dollar-o",
  "ai-eho",
  "ai-envelope",
  "ai-envelope-f",
  "ai-envelope-o",
  "ai-facebook",
  "ai-fax",
  "ai-file-code",
  "ai-file-excel",
  "ai-file-f",
  "ai-file-image-o",
  "ai-file-image-p",
  "ai-file-o",
  "ai-file-pdf",
  "ai-file-powerpoint",
  "ai-file-sound",
  "ai-file-text-f",
  "ai-file-text-o",
  "ai-file-text-r",
  "ai-file-video",
  "ai-file-word",
  "ai-file-zip",
  "ai-filter-f",
  "ai-flickr",
  "ai-folder",
  "ai-font-agentimage-logo",
  "ai-font-agentimage-mono",
  "ai-font-agentimage-stacked",
  "ai-font-arrow-a-d",
  "ai-font-arrow-a-u",
  "ai-font-arrow-b-d",
  "ai-font-arrow-b-u",
  "ai-font-arrow-c-d",
  "ai-font-arrow-c-u",
  "ai-font-arrow-d-d",
  "ai-font-arrow-d-u",
  "ai-font-arrow-e-d",
  "ai-font-arrow-e-u",
  "ai-font-arrow-f-d",
  "ai-font-arrow-f-n",
  "ai-font-arrow-f-p",
  "ai-font-arrow-f-u",
  "ai-font-arrow-g-d",
  "ai-font-arrow-g-n",
  "ai-font-arrow-g-p",
  "ai-font-arrow-g-u",
  "ai-font-arrow-h-d",
  "ai-font-arrow-h-n",
  "ai-font-arrow-h-p",
  "ai-font-arrow-h-u",
  "ai-font-august99",
  "ai-font-august99 i",
  "ai-font-august99-longform",
  "ai-font-august99-mono",
  "ai-font-business-card",
  "ai-font-caimeiju-longform",
  "ai-font-check",
  "ai-font-checkbox-a",
  "ai-font-circle-a",
  "ai-font-clock",
  "ai-font-compass",
  "ai-font-crane-a",
  "ai-font-crane-b",
  "ai-font-crane-c",
  "ai-font-delete-fill",
  "ai-font-delete-outline",
  "ai-font-devices-desktop",
  "ai-font-devices-laptop-a",
  "ai-font-devices-laptop-b",
  "ai-font-devices-mobile",
  "ai-font-devices-tablet",
  "ai-font-dollar-a",
  "ai-font-douglas-elliman",
  "ai-font-envelope-a",
  "ai-font-facebook-text",
  "ai-font-fax-a",
  "ai-font-fax-b",
  "ai-font-heart-fill",
  "ai-font-heart-outline",
  "ai-font-home-a",
  "ai-font-instagram-text",
  "ai-font-keller-williams",
  "ai-font-list-a",
  "ai-font-list-a-alt",
  "ai-font-list-b",
  "ai-font-list-b-alt",
  "ai-font-loading-a",
  "ai-font-loading-b",
  "ai-font-loading-c",
  "ai-font-location-b",
  "ai-font-location-c",
  "ai-font-loft-logo",
  "ai-font-loft-mono",
  "ai-font-mc-flickr",
  "ai-font-mc-flickr i",
  "ai-font-mc-houzz",
  "ai-font-mc-houzz i",
  "ai-font-mc-text-facebook i",
  "ai-font-mc-text-google-plus",
  "ai-font-mc-text-instagram",
  "ai-font-mc-text-linkedin",
  "ai-font-mc-text-linkedin i",
  "ai-font-mc-text-pinterest",
  "ai-font-mc-text-twitter",
  "ai-font-mc-text-twitter i",
  "ai-font-mc-text-youtube",
  "ai-font-mc-text-youtube i",
  "ai-font-mc-text-zillow",
  "ai-font-mc-text-zillow i",
  "ai-font-mc-zillow",
  "ai-font-mc-zillow i",
  "ai-font-measurement-a",
  "ai-font-measurement-b",
  "ai-font-measurement-c",
  "ai-font-mobile-a",
  "ai-font-mobile-a-alt",
  "ai-font-mobile-b",
  "ai-font-mobile-b-alt",
  "ai-font-mute",
  "ai-font-notes-a",
  "ai-font-organizer-a",
  "ai-font-package-communities",
  "ai-font-package-features",
  "ai-font-package-financing",
  "ai-font-package-lead-generation",
  "ai-font-package-management",
  "ai-font-package-marketing",
  "ai-font-package-newsletter",
  "ai-font-package-others",
  "ai-font-package-properties",
  "ai-font-package-tips-and-articles",
  "ai-font-paper-airplane",
  "ai-font-paper-airplane-alt",
  "ai-font-pause-button-a",
  "ai-font-pencil",
  "ai-font-person-a",
  "ai-font-person-a-alt",
  "ai-font-person-group-a",
  "ai-font-person-group-a-alt",
  "ai-font-phone-a",
  "ai-font-phone-alt",
  "ai-font-phone-alt-o",
  "ai-font-play-button-a",
  "ai-font-real-logo",
  "ai-font-realtor-mls",
  "ai-font-remax",
  "ai-font-rocket-ship",
  "ai-font-send",
  "ai-font-snapchat",
  "ai-font-sothebys",
  "ai-font-spotify",
  "ai-font-spotify-outline",
  "ai-font-star-fill",
  "ai-font-star-outline",
  "ai-font-thedesignpeople",
  "ai-font-thedesignpeople i",
  "ai-font-thedesignpeople-longform",
  "ai-font-thedesignpeople-mono",
  "ai-font-time-a",
  "ai-font-volume-a",
  "ai-font-x-sign",
  "ai-footer-logo",
  "ai-foursquare",
  "ai-funds",
  "ai-google-my-business",
  "ai-google-my-business-outline",
  "ai-google-plus",
  "ai-house",
  "ai-house-f",
  "ai-house-i",
  "ai-houzz",
  "ai-instagram",
  "ai-language",
  "ai-layout-grid",
  "ai-layout-grid-active",
  "ai-layout-list",
  "ai-layout-list-active",
  "ai-layout-table",
  "ai-layout-table-active",
  "ai-linkedin",
  "ai-location",
  "ai-location-a",
  "ai-lock-a",
  "ai-lock-b",
  "ai-lock-c",
  "ai-lock-d",
  "ai-magnifying-glass-a",
  "ai-magnifying-glass-b",
  "ai-magnifying-glass-c",
  "ai-magnifying-glass-d",
  "ai-magnifying-glass-e",
  "ai-magnifying-glass-f",
  "ai-magnifying-glass-g",
  "ai-magnifying-glass-h",
  "ai-magnifying-glass-h",
  "ai-map",
  "ai-map-f",
  "ai-medal",
  "ai-menu",
  "ai-menu-o",
  "ai-message",
  "ai-mls",
  "ai-nextdoor",
  "ai-nextdoor-longform",
  "ai-ont-mc-text-facebook",
  "ai-order-f",
  "ai-paper-airplane-outline",
  "ai-phone",
  "ai-phone-o",
  "ai-pinterest",
  "ai-question-o",
  "ai-realtor",
  "ai-realtor-alt",
  "ai-rss",
  "ai-settings",
  "ai-settings-o",
  "ai-showers",
  "ai-showers-a",
  "ai-skype",
  "ai-tag",
  "ai-tiktok",
  "ai-trulia",
  "ai-tumblr",
  "ai-twitter",
  "ai-user",
  "ai-video",
  "ai-vimeo",
  "ai-whatsapp",
  "ai-whatsapp-outline",
  "ai-wordpress",
  "ai-world-f",
  "ai-world-o",
  "ai-yahoo",
  "ai-yelp",
  "ai-youtube",
  "ai-zillow",
];

const languages = [
  {
    name: "EN",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/2048px-United-kingdom_flag_icon_round.svg.png",
  },
  {
    name: "VN",
    icon: "https://vectorflags.s3.amazonaws.com/flags/vn-button-01.png",
  },
  {
    name: "TH",
    icon: "https://cdn.countryflags.com/thumbs/thailand/flag-400.png",
  },
  {
    name: "CN",
    icon: "https://cdn.countryflags.com/thumbs/china/flag-round-250.png",
  },
];

const hellos = {
  EN: "Hello",
  VN: "Chào",
  TH: "สวัสดี",
  CN: "你好",
};

export { iconData, languages, hellos };
