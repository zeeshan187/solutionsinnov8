import {
  CheckCircleOutlined,
  SearchOutlined,
  AppstoreAddOutlined,
  MobileOutlined,
  LaptopOutlined,
  AuditOutlined,
  ThunderboltOutlined,
  AppstoreOutlined,
  WifiOutlined,
  PrinterOutlined,
  BulbOutlined,
  UserOutlined,
  ClockCircleOutlined,
  CodeOutlined,
  SettingOutlined,
  LinkOutlined,
  FileTextOutlined,
  BarChartOutlined,
  FileSearchOutlined,
  RobotOutlined,
  DashboardOutlined,
  ShieldOutlined,
  SyncOutlined,
  FacebookOutlined,
  DollarCircleOutlined,
  MailOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const servicesData = [
  {
    id: "web-development",
    title: "Web Development",
    description: "We provide professional web development services to help you build scalable and dynamic web applications.",
    hero: {
      title: "Crafting Scalable Web Solutions",
      subtitle: "From concept to creation, our web development services empower businesses to thrive online with dynamic and responsive websites.",
    },
    features: [
      {
        title: "Responsive and Dynamic Websites",
        icon: <CheckCircleOutlined />,
        description: "Build websites that look great on all devices and deliver dynamic user experiences.",
      },
      {
        title: "SEO-Friendly Architecture",
        icon: <SearchOutlined />,
        description: "Optimize your website for search engines to improve visibility and rankings.",
      },
      {
        title: "Scalable Backend Solutions",
        icon: <AppstoreAddOutlined />,
        description: "Ensure your website can grow with your business by using scalable backend solutions.",
      },
      {
        title: "Custom Design and Development",
        icon: <MobileOutlined />,
        description: "Get a website tailored specifically to your business needs and branding.",
      },
      {
        title: "Cross-Browser Compatibility",
        icon: <LaptopOutlined />,
        description: "Ensure seamless performance across all popular web browsers.",
      },
      {
        title: "Robust Security Features",
        icon: <AuditOutlined />,
        description: "Protect your website with the latest security protocols and practices.",
      },
    ],
  },
  {
    id: "app-development",
    title: "App Development",
    description: "Our app development services ensure your mobile applications are user-friendly and high-performing.",
    hero: {
      title: "Building Seamless Mobile Experiences",
      subtitle: "Transform your ideas into innovative mobile applications that captivate and engage your audience effectively.",
    },
    features: [
      {
        title: "Cross-Platform Compatibility",
        icon: <AppstoreAddOutlined />,
        description: "Develop apps that work seamlessly across iOS and Android platforms.",
      },
      {
        title: "Intuitive User Interfaces",
        icon: <MobileOutlined />,
        description: "Create user-friendly interfaces that make navigating your app a breeze.",
      },
      {
        title: "High-Performance Architecture",
        icon: <ThunderboltOutlined />,
        description: "Ensure fast and reliable app performance under heavy usage.",
      },
      {
        title: "Custom App Development",
        icon: <AppstoreOutlined />,
        description: "Bring your unique app ideas to life with our custom app development expertise.",
      },
      {
        title: "Offline Functionality",
        icon: <WifiOutlined />,
        description: "Enable users to access key features even without an internet connection.",
      },
      {
        title: "App Store Optimization",
        icon: <SearchOutlined />,
        description: "Optimize your app’s visibility and ranking on app stores.",
      },
    ],
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    description: "Get visually stunning designs tailored to your brand with our graphic designing expertise.",
    hero: {
      title: "Designs That Speak Volumes",
      subtitle: "Elevate your brand identity with creative and impactful designs that leave a lasting impression.",
    },
    features: [
      {
        title: "Custom Branding and Logos",
        icon: <CheckCircleOutlined />,
        description: "Stand out with unique and professional branding tailored to your identity.",
      },
      {
        title: "Social Media Graphics",
        icon: <MobileOutlined />,
        description: "Engage your audience with visually appealing social media designs.",
      },
      {
        title: "Print and Digital Designs",
        icon: <PrinterOutlined />,
        description: "Designs for all mediums, from business cards to social media graphics.",
      },
      {
        title: "Creative Concepts and Strategies",
        icon: <BulbOutlined />,
        description: "Innovative designs aligned with your brand’s goals and values.",
      },
      {
        title: "User-Centric Visuals",
        icon: <UserOutlined />,
        description: "Designs focused on delivering impactful user experiences.",
      },
      {
        title: "Timely Project Delivery",
        icon: <ClockCircleOutlined />,
        description: "Ensure your designs are delivered on time without compromising quality.",
      },
    ],
  },
  {
    id: "seo",
    title: "SEO Services",
    description: "Optimize your website’s visibility on search engines with our comprehensive SEO solutions.",
    hero: {
      title: "Boost Your Online Presence",
      subtitle: "Drive organic traffic and grow your business with our effective SEO strategies.",
    },
    features: [
      {
        title: "Keyword Research and Analysis",
        icon: <SearchOutlined />,
        description: "Identify the best keywords to target for your business.",
      },
      {
        title: "On-Page Optimization",
        icon: <CodeOutlined />,
        description: "Optimize your website’s content and structure for search engines.",
      },
      {
        title: "Technical SEO",
        icon: <SettingOutlined />,
        description: "Improve your website’s technical aspects for better performance.",
      },
      {
        title: "Link Building",
        icon: <LinkOutlined />,
        description: "Build high-quality backlinks to increase your website’s authority.",
      },
      {
        title: "Content Strategy",
        icon: <FileTextOutlined />,
        description: "Create engaging content that resonates with your audience.",
      },
      {
        title: "Analytics and Reporting",
        icon: <BarChartOutlined />,
        description: "Track your website’s performance and make data-driven decisions.",
      },
    ],
  },
  {
    id: "sqa",
    title: "Software Quality Assurance",
    description: "Ensure the quality of your software with our comprehensive testing services.",
    hero: {
      title: "Deliver Flawless Software",
      subtitle: "Identify and fix issues before they impact your users with our thorough QA services.",
    },
    features: [
      {
        title: "Manual Testing",
        icon: <FileSearchOutlined />,
        description: "Thoroughly test your software to identify potential bugs.",
      },
      {
        title: "Automated Testing",
        icon: <RobotOutlined />,
        description: "Utilize automated tools to ensure consistent testing across environments.",
      },
      {
        title: "Performance Testing",
        icon: <DashboardOutlined />,
        description: "Measure your software’s performance under various conditions.",
      },
      {
        title: "Security Testing",
        icon: <SyncOutlined />,
        description: "Identify vulnerabilities to keep your software secure.",
      },
      {
        title: "Usability Testing",
        icon: <UserOutlined />,
        description: "Ensure a seamless user experience with our usability testing services.",
      },
      {
        title: "Regression Testing",
        icon: <SyncOutlined />,
        description: "Verify that new updates don’t affect existing functionality.",
      },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Expand your reach and grow your brand with our tailored digital marketing services.",
    hero: {
      title: "Achieve Marketing Success Online",
      subtitle: "From social media to paid advertising, we provide solutions to maximize your online presence.",
    },
    features: [
      {
        title: "Social Media Marketing",
        icon: <FacebookOutlined />,
        description: "Boost engagement on popular social media platforms.",
      },
      {
        title: "Content Marketing",
        icon: <FileTextOutlined />,
        description: "Create content that educates, entertains, and converts.",
      },
      {
        title: "Pay-Per-Click Advertising",
        icon: <DollarCircleOutlined />,
        description: "Run targeted ads to drive quick and measurable results.",
      },
      {
        title: "Email Campaigns",
        icon: <MailOutlined />,
        description: "Engage with your audience through personalized email campaigns.",
      },
      {
        title: "Influencer Partnerships",
        icon: <TeamOutlined />,
        description: "Collaborate with influencers to amplify your brand’s message.",
      },
      {
        title: "Analytics and Optimization",
        icon: <BarChartOutlined />,
        description: "Track and optimize campaigns for maximum ROI.",
      },
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "We craft intuitive and visually appealing UI/UX designs that enhance user engagement and ensure seamless experiences.",
    hero: {
      title: "Designing Seamless User Experiences",
      subtitle: "Transform your digital platforms with user-centric designs that captivate and convert effectively.",
    },
    features: [
      {
        title: "Wireframing and Prototyping",
        icon: <FileTextOutlined />,
        description: "Visualize your ideas with detailed wireframes and interactive prototypes.",
      },
      {
        title: "User Research and Testing",
        icon: <SearchOutlined />,
        description: "Conduct thorough research and usability testing to ensure user-friendly designs.",
      },
      {
        title: "Responsive and Interactive Designs",
        icon: <MobileOutlined />,
        description: "Create designs that adapt flawlessly across all devices and screen sizes.",
      },
      {
        title: "Enhanced Usability and Accessibility",
        icon: <BulbOutlined />,
        description: "Ensure your platform is accessible to everyone while delivering seamless usability.",
      },
      {
        title: "Brand Identity Integration",
        icon: <CheckCircleOutlined />,
        description: "Align your designs with your brand’s vision and core values for maximum impact.",
      },
      {
        title: "Collaborative and Agile Approach",
        icon: <TeamOutlined />,
        description: "Work closely with stakeholders to refine designs and meet business objectives.",
      },
    ],
  }
  
];

export default servicesData;
