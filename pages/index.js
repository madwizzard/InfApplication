import React from 'react';
import Layout from '../components/layout';
import Accordion from 'react-bootstrap/Accordion';

const metadata = {
  title: "INF181",
  description: 'This an application that teaches CEOs how tech works',
};

const Home = () => {
  return (
    <Layout pageTitle={metadata.title} pageDescription={metadata.description}>
      <section className="pt-5 pb-5 mt-5 container">
        <h1 className="text-center text-lg font-bold uppercase">
          Welcome to the Belgium Campus Information Center
        </h1>
        <h3 className="text-center mb-4">
          Click on the navigation menu to navigate to information pertaining to the topic you have selected
        </h3>

        {/* React-Bootstrap Accordion */}
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Flowbite?</Accordion.Header>
            <Accordion.Body>
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Is there a Figma file available?</Accordion.Header>
            <Accordion.Body>
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What are the differences between Flowbite and Tailwind UI?</Accordion.Header>
            <Accordion.Body>
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </Layout>
  );
}

export default Home;
