const Location = {
  SF: 'San Francisco, CA',
  RWC: 'Redwood City, CA',
  PA: 'Palo Alto, CA',
  SJ: 'San Jose, CA'
};

const jobItems = [{
  title: 'Ascendify',
  role: 'Full Stack Engineer',
  location: Location.SF,
  startDate: 'October 2017',
  endDate: 'Present',
  faIcon: 'fa-keyboard-o',
  details: ''
}, {
  title: 'Ascendify',
  role: 'Frontend Engineer',
  location: Location.SF,
  startDate: 'July 2015',
  endDate: 'October 2017',
  faIcon: 'fa-keyboard-o',
  details: 'Planned and architected Front End technology stack (React, BackboneJS ,...)'
}, {
  title: 'Health Metrics Systems',
  role: 'Junior Programmer',
  location: Location.PA,
  startDate: 'January 2015',
  endDate: 'July 2015',
  faIcon: 'fa-keyboard-o',
  details: 'Developed and deployed an internal paperless Hospital follow up system saving Clinics many labor hours.'
}, {
  title: 'Broadcom',
  role: 'Intern',
  location: Location.SJ,
  startDate: 'May 2013',
  endDate: 'May 2014',
  faIcon: 'fa-keyboard-o',
  details: 'Developed and deployed an internal paperless Hospital follow up system saving Clinics many labor hours.'
}, {
  title: 'NASA CIPAIR Capstone Design Project',
  role: 'Software Research Engineer',
  location: Location.SF,
  startDate: 'September 2010',
  endDate: 'June 2011',
  faIcon: 'fa-keyboard-o',
  details: 'Developed and deployed an internal paperless Hospital follow up system saving Clinics many labor hours.'
}];
const educationItems = [{
  title: 'Master\'s degree, Software Engineering',
  location: 'San Jose State University',
  startDate: '2017',
  endDate: 'Present',
  faIcon: 'fa-graduation-cap'
}, {
  title: 'Bachelor\'s degree, Computer Engineering',
  location: 'San Jose State University',
  startDate: '2011',
  endDate: '2014',
  faIcon: 'fa-graduation-cap'
}, {
  title: 'Associate of Science (AS), Engineering',
  location: 'Cañada College',
  startDate: '2007',
  endDate: '2011',
  faIcon: 'fa-graduation-cap'
}];
const projectItems = [{
  title: 'Senior Project - Q-In',
  location: 'Github: montoya332/Qin, montoya332/QinPhoneGap',
  startDate: 'September 2013',
  endDate: 'May 2014',
  faIcon: 'fa-keyboard-o',
  details: 'The main objective of this project is to create an automated process such that attendees at an event can check in on the fly and provide event organizers with real time analytics.'
}];

const languageIconItems = [{
  title: 'JS',
  devicon: 'devicon-javascript-plain'
}];

const skillsIconItems = [{
  title: 'Node.js',
  devicon: 'devicon-nodejs-plain'
}, {
  title: 'React',
  devicon: 'devicon-react-original'
}, {
  title: 'AngularJS',
  devicon: 'devicon-angularjs-plain'
}, {
  title: 'CSS',
  devicon: 'devicon-css3-plain'
}, {
  title: 'Sass',
  devicon: 'devicon-sass-original'
}, {
  title: 'HTML',
  devicon: 'devicon-html5-plain'
}, {
  title: 'MongoDB',
  devicon: 'devicon-mongodb-plain'
}, {
  title: 'Postgres',
  devicon: 'devicon-postgresql-plain'
}];
export default {
  Location,
  jobItems,
  educationItems,
  projectItems,
  languageIconItems,
  skillsIconItems
};
export {
  Location,
  jobItems,
  educationItems,
  projectItems,
  languageIconItems,
  skillsIconItems
};
