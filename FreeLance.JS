const freelancers = [
    {name: "Dr. Slice", Price: 25, occupation: "gardener"},
    {name: "Dr. Pressure", Price: 51, occupation: "programmer"},
    {name: "Prof. Possibility", Price: 43, occupation: "teacher"},
    {name: "Prof. Prism", Price: 81, occupation: "teacher"},
    {name: "Dr. Impulse", Price: 43, occupation: "teacher"},
    {name: "Prof. Spark", Price: 76, occupation: "programmer"},
    {name: "Dr. Wire", Price: 47, occupation: "teacher"},
    {name: "Prof. Goose", Price: 72, occupation: "driver"},
  ];

const names = ['Ellie', 'Chris', 'Julia', 'Mateo'];
const occupations = ['Graphic Designer', 'Junior Developer', 'Nurse', 'Chef'];

const addFreelancer = ()

const nameIndex = Math.floor(Math.random * names.length);
const occupationIndex = Math.floor(Math.random * occupations.length)
const ranndomPrice = ((Math.floor(Math.random * 13)) * 10) + 30;

const newFreelancer = {
  name: names[nameIndex],
  occupation: occupations[occupationIndex],
  Price: ,
}

const getAverage = () => {

return 'average goes here'


const renderFreelancers = () => {

  freelancers.map(freelancers) => {
    const freelancerRow = document.createElement('li');
    freelancerRow.innerText = `${freelancer.name} (${freelancer.occupation}) - $${freelancer.Price}`
    return freelancerRow
  })