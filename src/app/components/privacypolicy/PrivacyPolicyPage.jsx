import React from "react";
import { Collapse, Row, Col } from "antd";
import {
  FiShield,
  FiUsers,
  FiLock,
  FiSettings,
  FiInfo,
  FiMail,
} from "react-icons/fi";
import Wrapper from "../shared/Wrapper";

const { Panel } = Collapse;

const PrivacyPolicyPage = () => {
  const sections = [
    {
      icon: <FiInfo />,
      title: "Introduction",
      content: `
        Welcome to our company. We are committed to respecting your privacy and ensuring the protection of your personal information. 
        This policy outlines how we handle your personal data when you visit our website, use our services, or interact with us.`,
    },
    {
      icon: <FiUsers />,
      title: "Information Collection",
      content: `
        We collect personal information necessary to provide our services effectively. 
        This includes, but is not limited to:
        - **Names and Contact Details:** For account creation and communication.
        - **Payment Information:** To process transactions securely.
        - **Service Usage Data:** To analyze and improve your experience.
        Collection occurs via account registration, service utilization, and interactions with our support team.`,
    },
    {
      icon: <FiShield />,
      title: "Use of Information",
      content: `
        The information we collect is utilized to:
        - Fulfill service requests and process transactions.
        - Communicate updates, offers, and support.
        - Provide a tailored experience and improve our services.`,
    },
    {
      icon: <FiLock />,
      title: "Sharing of Information",
      content: `
        We only share your information under the following circumstances:
        - **Trusted Third Parties:** Service providers for payment processing or analytics.
        - **Legal Compliance:** When required by law.
        - **With Consent:** If you explicitly approve.`,
    },
    {
      icon: <FiSettings />,
      title: "Data Security",
      content: `
        We employ robust security measures to protect your data, including:
        - **Encryption:** Safeguarding sensitive information.
        - **Secure Servers:** Ensuring data storage integrity.
        - **Regular Audits:** Keeping security systems up to date.`,
    },
    {
      icon: <FiUsers />,
      title: "Children’s Privacy",
      content: `
        Our services are not intended for children under 13 years of age. We comply with COPPA and do not knowingly collect data from children without parental consent.`,
    },
    {
      icon: <FiInfo />,
      title: "User Rights",
      content: `
        You have the following rights regarding your personal information:
        - **Access:** Review the data we store.
        - **Modification:** Update incorrect or incomplete details.
        - **Deletion:** Request removal of your information from our systems.`,
    },
    {
      icon: <FiSettings />,
      title: "Cookies and Tracking Technologies",
      content: `
        We use cookies and similar technologies to enhance website functionality and analytics. You can manage your preferences by adjusting your browser settings.`,
    },
    {
      icon: <FiUsers />,
      title: "International Data Transfers",
      content: `
        We comply with regulations governing international data transfers and take necessary steps to protect your data.`,
    },
    {
      icon: <FiLock />,
      title: "Compliance with Laws",
      content: `
        We adhere to privacy laws, including GDPR and CCPA, ensuring that your rights and privacy are respected.`,
    },
    {
      icon: <FiMail />,
      title: "Contact Information",
      content: `
        If you have any questions or concerns about our privacy policy, please reach out to us at:
        **info@solutionsinnov8.com**.`,
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <Wrapper>
        {/* Privacy Policy Sections */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-[#7B0B22]">
          Privacy Practices For Solutions Innov8
          </h2>
          <p className="text-lg text-gray-600">
            Click on the sections below to read more about our privacy policy
            and how we handle your data.
          </p>
        </div>
        <div className="container mx-auto ">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Collapse
                accordion
                expandIconPosition="right"
                className="rounded-lg border-none shadow-md"
              >
                {sections.map((section, index) => (
                  <Panel
                    header={
                      <div className="flex items-center ">
                        <div className="text-[#7B0B22] text-xl md:text-3xl mr-4">
                          {section.icon}
                        </div>
                        <h3 className="text-base md:text-xl font-semibold my-2">
                          {section.title}
                        </h3>
                      </div>
                    }
                    key={index}
                  >
                    <p className="text-gray-700">{section.content}</p>
                  </Panel>
                ))}
              </Collapse>
            </Col>
          </Row>
        </div>        
      </Wrapper>
    </div>
  );
};

export default PrivacyPolicyPage;
