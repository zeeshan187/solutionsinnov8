
import servicesMetadata from '@/app/data/servicesMetadata';
import ServicesPage from '@/app/pages/ServicesPage';
export async function generateMetadata({ params }) {
  const { service } = params; 
  console.log(service, "skdnfjsdfnkjsdk");
  
  const serviceMeta = servicesMetadata[service];

  if (serviceMeta) {
    return {
      title: serviceMeta.title,
      description: serviceMeta.description,
      keywords: serviceMeta.keywords,
      openGraph: {
        title: serviceMeta.og.title,
        description: serviceMeta.og.description,
        image: serviceMeta.og.image,
      },
      twitter: {
        card: "summary_large_image",
        title: serviceMeta.twitter.title,
        description: serviceMeta.twitter.description,
        image: serviceMeta.twitter.image,
      },
    };
  } else {
    return {
      title: "Solutions Innov8 - IT Services",
      description: "Discover our wide range of IT services.",
      keywords: "IT services, web development, app development, SEO, digital marketing",
    };
  }
}

const Page = () => {
  return (
    <div>
      <ServicesPage />
    </div>
  );
};

export default Page;
