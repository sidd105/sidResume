import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Siddharth Pachori',
  description: "Resume/Portfolio Siddharth Pachori. Laying out experience, skills and intrests in this layout. Companies worked Wipro Technologies, Cybage Software and Cimpress India",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Siddharth Pachori`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Mumbai/Pune based <strong className="text-stone-100">Lead Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Cimpress</strong> helping build Payments modeling for National Pen
      </p>
    </>
  ),
  actions: [
    {
      href: '/Siddharth_Pachori_Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `mailto:sidpachori@gmail.com?subject=Hey%20i%27d%20like%20to%20connect%20with%20you%20for%20an%20opportunity%20or%20a%20Coffee`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm enthusiastic in building things which improves software quality or revamping them to be able to deliever a good value`,
  aboutItems: [
    {label: 'Location', text: 'Mumbai, India', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Guitar, Gaming', Icon: SparklesIcon},
    {label: 'Study', text: 'Mumbai University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Cimpress, India', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React + Redux + (SSR or CSR)',
        level: 9,
      },
      {
        name: 'BEM modeling',
        level: 7,
      },
      {
        name: 'GraphQL with NodeJS and React-Apollo',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'AWS lambdas and Microservices Development',
        level: 8,
      },
      {
        name: 'AWS lambdas',
        level: 8,
      },
      {
        name: 'C# .NET',
        level: 7,
      },
      {
        name: 'Java',
        level: 7,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 6,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
      {
        name: 'Marathi',
        level: 7,
      },
      {
        name: 'Gujarati',
        level: 7,
      },
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2021',
    location: 'Welingkar Institute of Management',
    title: 'Masters in Project Management',
    // logo: (
    //   <a href="" rel="noopener noreferrer" target="_blank"><img alt="We School" height="80px" src="/WeSchool-logo.jpg" width="80px"/></a>
    // ),
    content: (<></>),
  },
  {
    date: 'June 2015',
    location: 'Narsee Monjee College of Commerce and Economics(Mumbai University)',
    title: 'Bachelors in Information Technology',
    content: (<></>),
    // logo: (
    //   <a href="" rel="noopener noreferrer" target="_blank"><img alt="Mumbai University" height="80px" src="/mumbai_university_logo.jpg" width="80px"/></a>
    // ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2021 - Present',
    location: 'Cimpress India',
    title: 'Lead Software Engineer',
    logo : (
      <a href="https://www.pens.com" rel="noopener noreferrer" target="_blank"><img alt="National Pen(pens.com)" height="80" src="/national_pen.jpg" width="80"/></a>
    ),
    content: (<></>),
  },
  {
    date: 'March 2019 - March 2021',
    location: 'Cybage Software Pune',
    title: 'Sr. Software Engineer',
    logo: (
      <a href="https://www.fictiv.com" rel="noopener noreferrer" target="_blank"><img alt="Fictiv" height="80" src="/fictiv.jpg" width="80"></img></a>
    ),
    content: (<></>)
  },
  {
    date: 'Sept 2015 - February 2019',
    location: 'Wipro Technologies Pune',
    title: 'Software Engineer',
    logo: (
      <img alt="credit suisse" height="80" src="/credit_suisse.jpg" width="80"></img>
    ),
    content: (<></>),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'siddpachori@gmail.com',
      href: 'mailto:siddpachori@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Mumbai, Maharashtra, India',
      href: 'https://goo.gl/maps/RsTDpwkZpZdc81BL9',
    },
    {
      type: ContactType.Github,
      text: 'sidd105',
      href: 'https://github.com/sidd105',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sidd105'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/7625738/siddharth-pachori'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/siddharth-pachori-07a35363/'}
];
