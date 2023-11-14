import React from 'react';

// Functional component named 'datavis'
const datavis = () => {
  return (<>
    <div className="container mx-auto mt-8  p-4 opacity-70 bg-pink-950 rounded-md shadow-lg shadow-pink-900/50 ">
      {/* Heading for Data Visualization */}
      <h1 className="text-4xl font-bold mb-4 text-yellow-400 text-center">
        Data Visualization
      </h1>
</div>
<div className="container mx-auto mt-8  p-4 opacity-70 bg-pink-950 rounded-md shadow-lg shadow-pink-900/50 ">
      {/* Section 1: Definition of Data Visualization */}
      <section>
        <p>
          The graphical depiction of data/information is what we refer to as data visualization. This consists of diagrams such as graphs, pie charts, spreadsheets, and maps, to name a few. Data is collected about a certain topic, and comparisons are made using said data. To help understand the limits/scope of the data, diagrams are used.
        </p>
      </section>
</div>
<div className="container mx-auto mt-8  p-4 opacity-70 bg-pink-950 rounded-md shadow-lg shadow-pink-900/50 ">
      {/* Section 2: Functionality of Data Visualization */}
      <section>
        <p>
          This provides the user with a lot of functionality, such as the ability to identify trends, outliers, and patterns within the data. With context, the data provided by visual indicators can be used to create strategies to better make use of trends or to remedy any unwanted results when interpreted correctly. Outside of the already named advantages, there is also the advantage of:
        </p>
        <ul className="list-disc ml-4">
          <li>Capturing the attention of clients</li>
          <li>Easy and clear communication of data/information</li>
          <li>Opportunity for communication with clients through interaction with graphs</li>
        </ul>
      </section>
</div>
<div className="container mx-auto mt-8  p-4 opacity-70 bg-pink-950 rounded-md shadow-lg shadow-pink-900/50 ">
      {/* Section 3: Example of Data Visualization Benefits */}
      <section>
        <p>
          To help better understand the benefit of data visualization, here is an example. Imagine a dropshipping e-commerce company that ships jewelry, mainly pearls and beads, worldwide. Around the date of September, you realize that you are often shorter of stock than usual.
        </p>
        <p>
          Creating a simple bar graph to visualize the data of your sales will quickly lead to you seeing that on a yearly basis, sales increase tremendously in the month of September.
        </p>
        <p>
          Upon further analysis of your data, you can plot the annual sales for each country you have sold to on a trendline, making it extremely easy to identify a spike in the month of September mainly in one country, South Africa.
        </p>
        <p>
          After analyzing this data on the charts, a business can create a strategy to make use of this opportunity. For example, ensuring that a lot more stock is available for that month. The business may try to identify the cause of the spike; in our example, the cause of the spike is due to Heritage Day, which is a South African holiday to celebrate culture and takes place on September 24th. Many South African tribes are known to use beads for festivities and cultural practices during this day. The company could make use of this information to directly target South Africa with special promotion deals and advertisements in South Africa, then make use of the charts to see if the strategy was profitable or not and identify areas that can be improved using different strategies (such as identifying which beads sell the most during this time in South Africa, providing more of those during the necessary time).
        </p>
      </section>
</div>
<div className="container mx-auto mt-8  p-4 opacity-70 bg-pink-950 rounded-md shadow-lg shadow-pink-900/50 ">
      {/* Section 4: Steps to Make Data Visualization */}
      <section>
        <p>
          How do you make data visualization? There are multiple techniques you could use dependent on your situation, but the general steps would be:
        </p>
        <ol className="list-decimal ml-4">
          <li>Select a topic/genre.</li>
          <li>Collect quality data on the topic.</li>
          <li>Select visualization format that best suits your needs (bar graph, pie chart).</li>
          <li>Input data into visualization.</li>
          <li>Analyze data.</li>
          <li>Develop strategy.</li>
        </ol>
      </section>
</div>
<div className="container mx-auto mt-8  p-4 opacity-70 bg-pink-950 rounded-md shadow-lg shadow-pink-900/50 ">
      {/* Section 5: Tools for Data Visualization */}
      <section>
        <p>
          Google Charts, Tableau, and Chart.js are excellent tools which can help develop your data visualization model.
        </p>
      </section>

    </div>
    </>

  );
};

// Exporting the 'datavis' component as the default export
export default datavis;
