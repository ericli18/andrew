const names = document.querySelectorAll(".select");
const info = document.querySelector(".about-info");
const nameTitle = document.querySelector(".name");
const credit = document.querySelector(".creds");
const contact = document.querySelector(".email-title");
const image = document.querySelector(".image");
const accordion = document.querySelector(".contentB");

const evan = {
  name: "Evan Meyer",
  about: ` <p>Hey! My name's Evan and I'm an 18 year old based in Chicago. My journey kicked off 3 years ago when <strong>
    I
      founded the e-learning Young Tutors
  </strong>, as a way to help elementary students prepare for and test into top
    high schools. I fell in love with entrepreneurship and betting on myself, and have since been in a journey
    of trying to learn, expose myself to new people and industries, and challenge myself to pursue the
    uncomfortable.</p>
  <p>Following Young Tutors, I did a couple of internships in business and tech, with my most recent being
    11-months as a Data Analytics intern at LinkedIn</strong>. I then entered a gap year before college, where I looked
    to network, upskill, and portfolio/project build. I did a 4-month full-time Data bootcamp and got
    certified in advanced SQL, python, Tableau, Power BI, Excel, and more. When I graduated I visited the west
    coast for 2 weeks, driving down the coast, and received personal tours to each of the big-tech company
    headquarters, allowing me to learn a ton from people with my dream jobs! Finally, I got a data engineer
    role at a Fintech startup where, as the company's first data hire, I'm responsible for defining the data
    stack and how the company will use data to drive decisions going forward.</p>`,
  creds: "<p>Founder @16 | LinkedIn @17 | Data Enginneer @18<p/>",
  email: " <p>Email: evanmeyer1@gmail.com</p> ",
  src: "https://placekitten.com/200/200",
  content: `<p><strong><a href="https://medium.com/@evanameyer1/the-nbas-biggest-disappointments-cbe1b6a7c441" target="_blank" > The NBA's Biggest Disappointments - </a></strong>
  Used python, SQL, and Tableau to webscrape, clean, analyze, and visualize live data to determine the most statistically ineffective NBA single season since 1996.</p>
<p><strong><a href="https://medium.com/@evanameyer1/which-medical-specialty-is-the-best-f222d427c3ee" target="_blank" > Comparing Medical Specialties - </a></strong>
  Used python, SQL, and Tableau to clean, analyze, and visualize data, and score each medical specialty on adjusted compensation and personal happiness metrics, to determine the “best” and “worst” specialties</p>
<p><strong>
  <a href="https://medium.com/@evanameyer1/the-cta-remodel-8a378f86e010" target="_blank" > Reworking Chicago's Public Transportation System - </a>
  </strong>
  Used Excel, SQL, and Tableau to determine the most dangerous and ineffective Chicago train stations, and make recommendations for how to increase daily ridership</p>
<p><strong><a href="https://github.com/evanameyer1/Depop" target="_blank" > Depop Webscraping Project - </a></strong>
  Used python to dynamically login and webscrape data from desired Depop account, building a csv storing all of the data on clothing items both sold and unsold</p>
<p><strong>NYT Crossword Tracker (ongoing) - </strong>
  Used python to webscrape the New York Times daily crossword, store and recreate the crossword in python
  Plan on using OpenAI’s API to automatically solve each crossword and store answers as well</p>
<p><strong><a href="https://medium.com/@evanameyer1/using-excel-to-drive-airbnb-client-recommendations-eb8bb8075027" target="_blank" > Using Excel to Make Airbnb Recommendations - </a></strong>
  Used Excel and Power BI to analyzing trends on the Airbnb market and determine the most profitable home types, desired amenities, and more, then creating a Powerpoint presentation and presenting it to stakeholders</p>
<p><strong><a href="https://medium.com/@evanameyer1/analyzing-the-wind-turbine-market-fda467c9e8e5" target="_blank" > Analyzing the Wind Turbine Market - </a></strong>
  Used python and Tableau to determine the feasibility of investment in the wind turbine industry, then presenting our findings and recommendations to stakeholders and interested investors</p>
<p><strong><a href="https://medium.com/@evanameyer1/from-google-analytics-to-google-sheets-60b36b2b86d3" target="_blank" > Live Tracking App Data - </a></strong>
  Used python, Google Analytics/Drive APIs, Bigquery, and Data Studio to build live dashboards to visualize aggregated and cleaned data from client apps</p>
<p><strong><a href="https://drive.google.com/drive/folders/174OorrzZ4daStdfyov-5xBqnZtBaeV2_?usp=sharing" target="_blank" > EdTech Tool Product Design - </a></strong> education tool (name pending) is aimed at helping underserved high school students that aren’t considering college build the self-confidence to pursue matriculation.</p>
<p><strong>
  <a href="https://drive.google.com/drive/folders/1coxOG4kveDaEFxwc2cKwP3xBhd6mP8Yv?usp=sharing" target="_blank" > Circle Product Design - </a>
  </strong>Circle helps business and tech-inclined college students get over the barrier of networking, allowing them to take advantage of a simplified and personalized networking process.</p>
<p><strong><a href="https://drive.google.com/drive/folders/1yUTF1Sw_VieTs4Ep_uzEqGeU7h5sMhpn?usp=sharing" target="_blank" > Scrap! Product Design - </a></strong>Scrap! provides artistically inclined and fashion interested teens and young adults with a consistent and comfortable place to explore and share all things related to fashion.</p>
<p><strong><a href="https://medium.com/@evanameyer1/you-discover-an-old-time-machine-in-your-garage-whats-next-b8f20fd78042" target="_blank" > You discover an old time machine in your garage…what’s next? - </a></strong>A full-python choose your own adventure game where you play a character that has just stumbled across an old time machine - if you can manage to fix it up, the possibilities ahead are endless!</p>`,
};

const andrew = {
  name: "Andrew Ding",
  about: `<p>
    He read about a hike called the incline in the guidebook. It said it was a strenuous hike and to bring plenty of water. “A beautiful hike to the clouds” described one review. “Not for the faint-hearted,” said another. “Not too bad of a workout”, bragged a third review. I thought I’d hike it when I fly in from Maryland on my day off from the senior citizen's wellness conference. I hiked 2 miles a day around the neighborhood so I could handle a 1.1-mile hike. What a foolish mistake that was for a 70-year-old low-lander.
    </p`,
  creds: "<p>Founder of tesla</p>",
  email: " <p>Email: Andrewjding@gmail.com</p> ",
  image: `<img src="./assets/img/introduction-visual.png" alt="A photo of me" class="photo">`,
};

const ocean = {
  name: "Ocean Fang",
  about: `<p>
    He read about a hike called the incline in the guidebook. It said it was a strenuous hike and to bring plenty of water. “A beautiful hike to the clouds” described one review. “Not for the faint-hearted,” said another. “Not too bad of a workout”, bragged a third review. I thought I’d hike it when I fly in from Maryland on my day off from the senior citizen's wellness conference. I hiked 2 miles a day around the neighborhood so I could handle a 1.1-mile hike. What a foolish mistake that was for a 70-year-old low-lander.
    </p`,
  creds: "<p>Founder of tesla</p>",
  email: " <p>Email: Andrewjding@gmail.com</p> ",
};

const jacob = {
  name: "Jacob Robins",
  about: `<p>
  Hey! My name is Jacob and I am a current University of Michigan student with a diverse set of interests. 
  I love learning about a wide variety of fields as it helps me solve problems from multiple perspectives. 
  I became interested in Computer Science after teaching myself Python in high school. Last summer, 
  I worked as a supervisor at Midtown Chicago in charge of developing a new STEM component for their summer camp.
   Unexpectedly, I got the opportunity to apply my Python knowledge to automate their roster generation process that was previously done by hand.
  
  After recognizing my passion for Software Engineering, I began to search for more opportunities to make things more efficient in my own life. I gained experience in Java, C++, MATLAB, and HTML/CSS through these personal projects. Finally, I obtained a position at the CME Group as a Software Engineering Fellow where I will be working this summer
    </p`,
  creds: "<p>CME Group SWE | U of M ChemE | Posses Scholar</p>",
  email: " <p>Email: jhrobins@umich.edu</p> ",
  content: `Automated Roster Generation for Midtown Chicago
  <p>Used python to sort data from a master spreadsheet and create customized rosters unique to each day, counselor, and camper.</p>
  <p>Trust Registration Automation Project</p>
  <p>Used python to automate the submission of tax forms based on user profiles for a Law Office</p>
  <p>Modeling COVID-19 with MATLAB</p>
  <p>Used MATLAB to create a differential equation SIR (susceptible, infected, recovered) model for a COVID-19 like disease.</p>
  <p>Introduced parameter L (asymptomatic) and V (vaccinated) using real data to simulate real-world phenomena.</p>
  <p>Optimizing Bridge Design with MATLAB</p>
  <p>Created a differential equation model for common bridge designs and the effects of different walking patterns on the stability of the structure.</p>
  <p>Finding Brain Tumors in MRI Scans</p>
  <p>Used C++ to recognize obvious brain tumors in real MRI brain scans.</p>
  <p>EMT-B Certification</p>
  <p>Became a nationally registered and Michigan licensed EMT-Basic after passing the NREMT exam and completing a training course.</p>
  <p>Chemical Engineering Research at The Min Research Lab</p>
  <p>Created a novel MOF/MXene structure through a layer-by-layer process for drug incorporation and tunable release.
  Ideally will be used to coat biological mplants to offer a more effective method of treating Prosthetic Joint Infections.`,
};

const aaron = {
  name: "Aaron Zhang",
  about: `<p>
    He read about a hike called the incline in the guidebook. It said it was a strenuous hike and to bring plenty of water. “A beautiful hike to the clouds” described one review. “Not for the faint-hearted,” said another. “Not too bad of a workout”, bragged a third review. I thought I’d hike it when I fly in from Maryland on my day off from the senior citizen's wellness conference. I hiked 2 miles a day around the neighborhood so I could handle a 1.1-mile hike. What a foolish mistake that was for a 70-year-old low-lander.
    </p`,
  creds:
    "<p>Tenacious problem-sol;ver | Engineering @ UIUC | Aspiring entrepreneur</p>",
  email: " <p>Email: aaron11886z@gmail.com</p> ",
};

console.log(names);

names.forEach((name) => {
  name.addEventListener("click", () => {
    names.forEach((name) => name.classList.remove("active"));
    accordion.classList.remove("active");
    name.classList.toggle("active");
    changeInfo(name.dataset.name);
  });
});

const changeInfo = (name) => {
  info.innerHTML = eval(name).about;
  nameTitle.innerHTML = eval(name).name;
  credit.innerHTML = eval(name).creds;
  contact.innerHTML = eval(name).email;
  accordion.innerHTML =
    `<div class="label">Cool Shit I've Done</div><div class="content">` +
    eval(name).content +
    `</div>`;
    if(eval(name).image)
      image.innerHTML = eval(name).image;
    else
      image.innerHTML = `<img src="https://placekitten.com/200/200" alt="A photo of me" class="photo">`;
};

accordion.addEventListener("click", () => {
  accordion.classList.toggle("active");
});
