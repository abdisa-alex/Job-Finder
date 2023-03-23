const jobsList = document.querySelector('#jobs-list');

const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchInput = document.querySelector('#search-input');
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filteredJobs = jobPostings.filter(job => job.title.toLowerCase().includes(searchTerm));

  if (filteredJobs.length === 0) {
    const message = document.createElement('p');
    message.textContent = `No job listings found for "${searchTerm}".`;
    message.style.color = 'red';
    jobsList.innerHTML = '';
    jobsList.appendChild(message);
  } else {
    jobsList.innerHTML = '';
    filteredJobs.forEach(job => {
      const jobItem = document.createElement('article');
      jobItem.classList.add('job-item');
      jobItem.innerHTML = `
        <h2>${job.title}</h2>
        <p>${job.description}</p>
        <p><strong>Requirements:</strong> ${job.requirements}</p>
      `;
      jobsList.appendChild(jobItem);
    });
  }

  searchInput.value = '';
});






      const jobPostings = [
        {
          title: 'Software Engineer',
          description: 'We are looking for a software engineer to join our team...',
          requirements: 'Minimum of 3 years of experience in software engineering...',
        },
        {
          title: 'Web Developer',
          description: 'We are looking for a web developer to join our team...',
          requirements: 'Minimum of 2 years of experience in web development...',
        },
        {
          title: 'Marketing Specialist',
          description: 'We are looking for a marketing specialist to join our team...',
          requirements: 'Minimum of 3 years of experience in marketing...',
        },
        {
          title: 'Sales Representative',
          description: 'We are looking for a sales representative to join our team...',
          requirements: 'Minimum of 2 years of experience in sales...',
        },
        {
          title: 'Dental Specialist',
          description: 'We are looking for a marketing specialist to join our team...',
          requirements: 'Minimum of 3 years of experience in marketing...',
        },
        {
          title: 'Graphics Designer',
          description: 'We are looking for a sales representative to join our team...',
          requirements: 'Minimum of 2 years of experience in sales...',
        },
      ];

      jobPostings.forEach(job => {
        const jobItem = document.createElement('article');
        jobItem.style = "width: 50%;"
        jobItem.classList.add('job-item');
        jobItem.innerHTML = `
        <div style="margin: 15px; width: 70%; line-height: 1.5; border: 2px solid #333; padding: 20px 15px; position: relative; left: 48%; transform: translateX(-50%); :hover {color: red;}">
        <h2>${job.title}</h2>
          <p>${job.description}</p>
          <p style="margin-bottom: 5%;"><strong>Requirements:</strong> ${job.requirements}</p>
        </div>
        <style>
        div:hover {
          cursor: pointer;
          box-shadow: 0 10px 40px 2px #33333370;
        }
        </style>
          `;
        jobsList.appendChild(jobItem);
      });

      const applicationForm = document.querySelector('#application-form');

applicationForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the form data
  const job = document.querySelector('#job-select').value;
  const name = document.querySelector('#name-input').value;
  const email = document.querySelector('#email-input').value;
  const resume = document.querySelector('#resume-input').value;
  
  // Do something with the form data
  // For example, you can send an AJAX request to submit the data to the server
  
  // Reset the form
  applicationForm.reset();
  
  // Show a message to the user that their application has been submitted
  /*const message = document.createElement('p');
  message.textContent = 'Your application has been submitted successfully!';
  message.style.color = 'green';
  console.log(message);
  applicationForm.appendChild(message); */


  const message = document.createElement('p');
message.textContent = 'Your application has been submitted successfully!';
message.style.color = 'green';

const messageContainer = document.querySelector('#message-container');
messageContainer.appendChild(message);
// Remove the message after a delay
setTimeout(() => {
  message.remove();
}, 6000); // remove the message after 6 seconds (5000 milliseconds)

});
