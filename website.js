const websites = [
  { name: "Joy Hair Salon Website", url: "https://joyhairsalon.netlify.app/" }
  // Add more sites here if needed
];

const list = document.getElementById('website-list');

websites.forEach(site => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = site.url;
  a.target = "_blank";
  a.textContent = site.name;
  li.appendChild(a);
  list.appendChild(li);
});
