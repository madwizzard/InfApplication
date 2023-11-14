import React from 'react';
import Layout from '../components/layout';

const metadata = {
  title: "INF181",
  description: 'This an application that teaches CEOs how tech works'
};

const dataethics = () => {
  return (
    <Layout pageTitle={metadata.title} pageDescription={metadata.description}>
    <div className="container mx-auto mt-8 p-4 bg-slate-700">
      {/* Heading for Data Ethics */}
      <h1 className="text-2xl font-bold mb-4">
        Data Ethics:
      </h1>

      {/* Section 1: Definition of Data Ethics */}
      <section>
        <p>
          Ethics is a study in philosophy which researches moral principles and values, guiding individuals, and societies in differentiating between right and wrong. Data Ethics is a sub-genre of ethics that deals with data practices such as:
        </p>
        <ul className="list-disc ml-4">
          <li>Data collection</li>
          <li>Generating</li>
          <li>Analysis</li>
          <li>Disseminating data</li>
        </ul>
        <p>
          Like its parent genre, data ethics aims to provide users with a better understanding of what is right or wrong when conducting the previously mentioned practices. It aims to protect the people, in a company’s case it would be the customers, from morally unjust practices.
        </p>
      </section>

      {/* Section 2: Principles and Goals of Data Ethics */}
      <section>
        <p>
          This involves dealing with and suggesting principles of ethical behavior, ensuring openness and justifiability of actions and decisions driven by automated/artificial intelligence (AI) concerning data in a broad sense and personal data specifically. With proper data ethics principles applied to practices, businesses can stand to gain:
        </p>
        <ul className="list-disc ml-4">
          <li>Trust: Retains the goodwill, loyalty, and belief customers have for your company</li>
          <li>Fair practices: Unintentional biases may arise from various sources and detrimentally influence business decisions. Businesses that uphold data ethics principles and standards can showcase their commitment to fairness in decision-making.</li>
          <li>Data privacy compliance: Assists in Compliance with data privacy standards. There's a substantial convergence between essential privacy criteria—like lawfulness and accountability—and the tenets of AI ethics. Consequently, prioritizing ethical AI contributes to upholding data privacy compliance.</li>
        </ul>
      </section>

      {/* Section 3: Importance of Data Ethics to Business */}
      <section>
        <p>
          Data ethics is important to any business/company. It is not only a legal requirement but is also a main contributing factor in establishing and maintaining trust, reputation, and positive relationships with customers, stakeholders, and employees. Here are a few recommendations to improve data ethics:
        </p>
        <ul className="list-disc ml-4">
          <li>Create clear policies and guidelines: Establish guidelines for collecting, processing, storing, and sharing data responsibly. Integrate legal requirements with industry standards to develop and communicate comprehensive data ethics policies.</li>
          <li>Employee Training: Using the policies and guidelines, restructure training for employees equipping them with the skillset to deal with ethically challenging problems.</li>
          <li>Privacy by Design: Identify and address potential ethical issues by conducting privacy impact assessments for new initiatives to identify and address privacy considerations at the outset (Privacy by Design principle).</li>
        </ul>
      </section>

      {/* Section 4: Recommended Technologies for Data Ethics */}
      <section>
        <p>
          In terms of technologies, I recommend:
        </p>
        <ul className="list-disc ml-4">
          <li>AI ethics Tools</li>
          <li>Blockchain Technology</li>
          <li>Secure Data Storage and Processing</li>
        </ul>
      </section>

    </div>
    </Layout>
  );
};

// Exporting the 'dataethics' component as the default export
export default dataethics;
