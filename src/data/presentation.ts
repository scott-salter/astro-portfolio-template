type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "maxencewolff.pro@gmail.com",
  title: "Hi, I’m Scott 👋",
  // profile: "/profile.webp",
  description:
    "Scott Salter is an SEO Manager based in the South West of England. At Gymshark, he leads the SEO & Content team across 15 global websites.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/itsstormzz_",
    },
    {
      label: "Bento",
      link: "https://bento.me/m-wolff",
    },
    {
      label: "Github",
      link: "https://github.com/MaeWolff",
    },
  ],
};

export default presentation;
