import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Sanitation in Ratlam',
    text: ' IN A LANDMARK judgement in 1980, the Supreme Court (SC) ordered Madhya Pradesh Ratlam municipality to clean a locality, holding that budgetary constraints did not justify a municipality neglecting its statutory obligation to provide sanitation facilities. ',
  },
  {
    title: 'Doon Valley Quarrying',
    text: ' The Dehradun Valley litigation is the first case requiring the Supreme Court to balance environmental and ecological integrity against industrial demands on forest resources. The case arose from haphazard and dangerous limestone quarrying practices in the Mussoorie Hill Range of the Himalayas. ',
  },
  {
    title: 'Gas Leak in ShriRam Factory',
    text: ' Union of India originated in the aftermath of oleum gas leak from Shriram Food and Fertilisers Ltd. complex at Delhi. This gas leak occurred soon after the infamous Bhopal gas leak and created a lot of panic in Delhi. One person died in the incident and a few were hospitalized. ',
  },
  {
    title: 'Ganga Pollution Case',
    text: ' What is case of pollution Ganga river Today, the Ganges is considered to be the sixth-most polluted river in the world. Raghubir Singh, an Indian photographer, has noted that no one in India spoke of the Ganges as polluted until the late 1970s. ',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
