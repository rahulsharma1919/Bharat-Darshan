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

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  destination: string;
  destinationImage: string;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    destination: "Haridwar",
    destinationImage:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1400&h=900&fit=crop&q=80",
    review:
      "The spiritual journey to Haridwar was absolutely divine! The Ganga Aarti and the calm riverside mornings were unforgettable. Everything was handled smoothly.",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    destination: "Goa",
    destinationImage:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1400&h=900&fit=crop&q=80",
    review:
      "Goa delivered on every promise — beaches, food and service. The itinerary balanced relaxation with a few adventure days. Highly recommended.",
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Ahmedabad",
    rating: 4,
    destination: "Kashmir",
    destinationImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&h=900&fit=crop&q=80",
    review:
      "Kashmir is surreal. Shikara on Dal Lake and the local hospitality made the trip very memorable. A couple of hotels could be better but overall fantastic.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Bangalore",
    rating: 5,
    destination: "Jaipur",
    destinationImage:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1400&h=900&fit=crop&q=80",
    review:
      "Jaipur felt like stepping into history — forts, palaces and local cuisine. The team curated an immersive heritage experience for us.",
  },
  {
    id: 5,
    name: "Sneha Gupta",
    location: "Lucknow",
    rating: 5,
    destination: "Kerala",
    destinationImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&h=900&fit=crop&q=80",
    review:
      "Backwaters, houseboats and traditional cuisine — Kerala was restorative. The schedule had the right pace for relaxation and exploration.",
  },
  {
    id: 6,
    name: "Rohit Mehta",
    location: "Chandigarh",
    rating: 4,
    destination: "Leh-Ladakh",
    destinationImage:
      "https://images.unsplash.com/photo-1508264165352-258a6bdf063d?w=1400&h=900&fit=crop&q=80",
    review:
      "Ladakh road trip: breathtaking landscapes and well-managed logistics. Watch for altitude, but the scenery is worth it.",
  },
  {
    id: 7,
    name: "Neha Rao",
    location: "Hyderabad",
    rating: 5,
    destination: "Rajasthan",
    destinationImage:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1400&h=900&fit=crop&q=80",
    review:
      "From forts to desert camps, the Rajasthan itinerary was a highlight of our year. Great guides and authentic cultural experiences.",
  },
  {
    id: 8,
    name: "Amit Desai",
    location: "Pune",
    rating: 5,
    destination: "Goa (North)",
    destinationImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&h=900&fit=crop&q=80",
    review:
      "Another Goa trip, another flawless experience. This time with beachside stay and a sunset cruise — excellent value for money.",
  },
];
