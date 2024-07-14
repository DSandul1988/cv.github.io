document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category");
  const danName = document.querySelector(".presentation h1");

  categories.forEach((category) => {
    category.addEventListener("click", function () {
      const categoryName = this.dataset.category;
      updateContent(categoryName);
    });
  });

  danName.addEventListener("click", function () {
    resetHomepage();
  });

  function updateContent(category) {
    let content = "";
    let imagePath = "";
    switch (category) {
      case "about-me":
        content = `
                <h1>About Me</h1>
                <h3>I live in Leicester and am passionate about software engineering.</h3>
                <h3> I graduated from De Montfort University (DMU) Computer Science BCsHons.</h3>
                <ul>
                    <p>Location: Leicester, UK</p>
                    <p>Education: BSc Computer Science, De Montfort University</p>
                    <p>Degree Classification: First Class (76%)</p>
                    <p>Passion: Software Engineering</p>
                </ul>
            `;
        imagePath = "./resources/about.png";
        break;
      case "education":
        content = `
                <h1>Education</h1>
                <h2>DeMontfort University Leicester 2021-2024 BSC(hons) Computer Science</h2>
                <h2>DeMontfort University International College Leicester 2020-2021</h2>
                <h2>Courses:</h2>
                <ul>
                    <li>The Modern Python 3 Bootcamp – Udemy course </li>
                    <li>ASP.NET Core 6 Web API Fundamentals - Pluralsight course </li>
                    <li>C# 10 Fundamentals - Pluralsight course</li>
                    <li>Java from beginner to the Oracle certificate – Udemy course </li>
                    <li>Java – get a black belt – Udemy course  </li>
                </ul>
                 <h2>Bootcamps:</h2>
                  <ul>
                    <li>Althouse Digital  Software development bootcamp – May-July 2023 </li>
                </ul>
                 
                 <h2>Projects:</h2>
                 <ul>
                 <li>Creative Technology Project: developed a game in Python in a team.</li>
                <li>Computer Programming 2: developed a board game using Scala. </li>
                <li>Object Oriented Development: developed an application using Java and JavaFX</li>
                <li>Agile Team Development developed a web application using C#.</li>
                <li>Developed a Hangman Console game in C# during the summer bootcamp</li>
                <li>Final year project: Developed a booking app. Technology Stack: Typescript, React, Next.js, Mongo Db, Prisma</li>
                <li>Mobile Development Project: Food Order application. Kotlin, XML </li> 
                </ul>
                  <h2>Languages</h2>
                  <ul>
                    <li>English, Romanian, Russian</li>
                </ul>
                    <h2>Driver's licence: 'B'</h2>
                


            `;
        imagePath = "./resources/education .jpeg";
        break;
      case "work-experience":
        content = `
                <h1>Work Experience</h1>
                <h2>1. American Chemical Society – Intern Technology Software Development 03.05.2024- present</h2>
              
                <h3>Development and Maintenance:</h3>
                <ul>
                    <li> Contributed to the development and maintenance of the Bio-Finder product, ensuring code quality and functionality across various modules.</li>
                    <li>Utilized Angular framework to create dynamic and responsive user interfaces.</li>
                    <li>Implemented backend functionalities using Scala Play framework, ensuring efficient handling of server-side operations.</li>
                </ul>
                
                <h3>Database Management:</h3>
                <ul>
                    <li>Managed and optimized data storage solutions using DynamoDB, ensuring data integrity and performance.</li>
                    <li>Developed and executed queries to interact with the database, retrieving and manipulating data as required.</li>
                </ul>
                  <h3>Cloud Infrastructure:</h3>
                <ul>
                    <li>Deployed and managed Bio-Finder application on AWS, leveraging various AWS services for optimal performance and scalability.</li>
                    <li>Implemented Docker containers for consistent development environments and streamlined deployment processes.</li>
                </ul>
                 <h3>Programming and Code Optimization:</h3>
                <ul>
                    <li>Wrote and optimized code in TypeScript, Scala, and Java to enhance the performance and reliability of the Bio-Finder application.</li>
                    <li>Conducted code reviews and participated in peer programming sessions to ensure adherence to coding standards and best practices.</li>
                </ul>
                 <h3>Testing and Debugging:</h3>
                <ul>
                    <li>Developed unit and integration tests to ensure the robustness and reliability of the application.</li>
                    <li>Identified and resolved bugs and performance issues in a timely manner, maintaining the stability of the application.</li>
                </ul>

                       <h3>Collaboration and Communication:</h3>
                <ul>
                    <li>Worked closely with cross-functional teams, including product managers, designers, and other developers, to ensure alignment on project goals and timelines.</li>
                    <li>Participated in daily stand-ups, sprint planning, and retrospectives, contributing to the continuous improvement of the development process.</li>
                </ul>
                 <h2>2. Uber Eats/Deliveroo - Driver 2021 - 2024</h2>
                 <ul>
                    <li>Delivering goods to customers on designated routes</li>
                    <li>Utilized Angular framework to create dynamic and responsive user interfaces.</li>
                    <li>Scheduling delivery times, picking up parcels and delivering orders to customers on predetermined routes.</li>
                </ul>
                  <h2>3. Tesco Clothing - Warehouse operative -01.03.2020–01.04.2021</h2>
                 <ul>
                    <li>Processing, picking, and packing orders in a timely manner.</li>
                    <li>Operating warehouse equipment such as forklifts, pallet jacks, and hand trucks.</li>
                    <li>Labelling products.</li>
                </ul>
                  <h2>4. “Qna Moldova” NGO- founder, volunteer -01.12.2015 -10.10.2019</h2>
                 <ul>
                    <li>Help with event planning and coordination, including scheduling games, reserving fields, and coordinating with other volunteers.</li>
                </ul>
                <h2>5. “Republic of Moldova National State Meteorological Service” human resource specialist 01.12.2014 -10.10.2015</h2>
                 <ul>
                    <li>Maintain accurate employee records, including personal information, job titles, and employment status.</li>
                     <li>Updating employee information responding to employee inquiries.</li>
                    <li>Manage employee onboarding, including preparing offer letters</li>
                    <li>Manage the filing and archiving of HR documents, including employee files, HR forms, and other related documents.</li>
                </ul>
                
            `;
        imagePath = "./resources/Work Experience.png";
        break;
      case "contacts":
        content = `
                <h1>Contacts</h1>
                <ul>
                    <li>Location: United Kingdom, Leicester, Leicestreshire</li>
                    <li>LE3 5HT, 102 Tudor Road Flat 3  </li>
                    <li>Tel.: 07395186744</li>
                    <li>Email: sanduld724@yahoo.com</li>
                </ul>
                <div class = "social-media">
                        <a href="https://www.facebook.com/danik.1988" target="_blank">
                            <img src="./resources/Facebook_Logo_2023.png"" alt="Facebook" style="width: 30px; height: 30px; margin-right: 10px;">
                        </a>  <a href="https://www.linkedin.com/in/dan-sandul-47456a98/" target="_blank">
                            <img src="./resources/linkedin-logo-1.png"" alt="LinkedIn" style="width: 30px; height: 30px;">
                        </a> </div>
                       
                  
            `;
        imagePath = "./resources/contact.jpg";
        break;
      default:
        content =
          "<h3>Category Not Found</h3><p>Please select a valid category.</p>";
        imagePath = "";
    }

    document.getElementById("content-display").innerHTML = `
        <div class="image-container">
            <div class="folder-image" style="background-image: url('${imagePath}'); background-size: cover;"></div>
            <div class="dan">${content}</div>
        </div>
    `;
  }

  function resetHomepage() {
    document.getElementById("content-display").innerHTML = `
        <div class="image-container">
            <div class="folder-image" style="background-image: url('./resources/skills.webp'); background-size: cover;"></div>
            <div class="dan">
                <div class="content-container">
                    <h3>Learn More About</h3>
                    <h3 class="me">Me</h3>
                </div>
                <h2>Click on a category to display its content here.</h2>
            </div>
        </div>
    `;
  }
});
