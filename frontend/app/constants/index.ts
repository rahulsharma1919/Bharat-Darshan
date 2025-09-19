import { NavItem } from "@/app/types/nav";

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Destinations",
    href: "/destinations",
    megaMenu: {
      sections: [
        {
          title: "Popular Destinations",
          links: [
            { name: "Golden Triangle", href: "/destinations/golden-triangle" },
            { name: "Kerala Backwaters", href: "/destinations/kerala" },
            { name: "Rajasthan Heritage", href: "/destinations/rajasthan" },
            { name: "Goa Beaches", href: "/destinations/goa" },
            { name: "Himalayan Trek", href: "/destinations/himalaya" },
          ],
        },
        {
          title: "Regional Tours",
          links: [
            { name: "North India", href: "/destinations/north" },
            { name: "South India", href: "/destinations/south" },
            { name: "East India", href: "/destinations/east" },
            { name: "West India", href: "/destinations/west" },
            { name: "Central India", href: "/destinations/central" },
          ],
        },
        {
          title: "International",
          links: [
            { name: "Nepal Tours", href: "/destinations/nepal" },
            { name: "Bhutan Adventure", href: "/destinations/bhutan" },
            { name: "Sri Lanka", href: "/destinations/srilanka" },
            { name: "Maldives", href: "/destinations/maldives" },
          ],
        },
      ],
    },
  },
  {
    name: "Tour Packages",
    href: "/packages",
    megaMenu: {
      sections: [
        {
          title: "Tour Types",
          links: [
            { name: "Cultural Tours", href: "/packages/cultural" },
            { name: "Adventure Tours", href: "/packages/adventure" },
            { name: "Spiritual Tours", href: "/packages/spiritual" },
            { name: "Wildlife Safari", href: "/packages/wildlife" },
            { name: "Beach Holidays", href: "/packages/beach" },
          ],
        },
        {
          title: "Duration",
          links: [
            { name: "Weekend Getaways", href: "/packages/weekend" },
            { name: "7 Days Tours", href: "/packages/7days" },
            { name: "15 Days Tours", href: "/packages/15days" },
            { name: "Monthly Tours", href: "/packages/monthly" },
          ],
        },
        {
          title: "Special Packages",
          links: [
            { name: "Honeymoon Packages", href: "/packages/honeymoon" },
            { name: "Family Tours", href: "/packages/family" },
            { name: "Group Tours", href: "/packages/group" },
            { name: "Luxury Tours", href: "/packages/luxury" },
          ],
        },
      ],
    },
  },
  {
    name: "Services",
    href: "/services",
    megaMenu: {
      sections: [
        {
          title: "Travel Services",
          links: [
            { name: "Hotel Booking", href: "/services/hotels" },
            { name: "Flight Booking", href: "/services/flights" },
            { name: "Car Rental", href: "/services/cars" },
            { name: "Train Booking", href: "/services/trains" },
          ],
        },
        {
          title: "Support Services",
          links: [
            { name: "Travel Insurance", href: "/services/insurance" },
            { name: "Visa Assistance", href: "/services/visa" },
            { name: "Travel Guide", href: "/services/guide" },
            { name: "24/7 Support", href: "/services/support" },
          ],
        },
      ],
    },
  },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];
