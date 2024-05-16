const jobsListings = {
  "jobs": [
    {
      "id": "1",
      "title": "Senior React Developer",
      "type": "Full-Time",
      "description": "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.",
      "location": "Boston, MA",
      "salary": "$70K - $80K",
      "company": {
        "name": "NewTek Solutions",
        "description": "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
        "contactEmail": "contact@teksolutions.com",
        "contactPhone": "555-555-5555"
      }
    },
    {
      "id": "2",
      "title": "Front-End Engineer (React & Redux)",
      "type": "Full-Time",
      "location": "Miami, FL",
      "description": "Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion for crafting beautiful and responsive web applications. Experience with UI/UX design principles and a strong attention to detail are highly desirable.",
      "salary": "$70K - $80K",
      "company": {
        "name": "Veneer Solutions",
        "description": "Veneer Solutions is a creative agency specializing in digital design and development. Our team is dedicated to pushing the boundaries of creativity and innovation to deliver exceptional results for our clients.",
        "contactEmail": "contact@loremipsum.com",
        "contactPhone": "555-555-5555"
      }
    },
    {
      "id": "3",
      "title": "React.js Dev",
      "type": "Full-Time",
      "location": "Brooklyn, NY",
      "description": "Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference. We offer competitive compensation and a collaborative work environment where your ideas are valued.",
      "salary": "$70K - $80K",
      "company": {
        "name": "Dolor Cloud",
        "description": "Dolor Cloud is a leading technology company specializing in digital solutions for businesses of all sizes. With a focus on innovation and customer satisfaction, we are committed to delivering cutting-edge products and services.",
        "contactEmail": "contact@dolorsitamet.com",
        "contactPhone": "555-555-5555"
      }
    },
    {
      "id": "4",
      "title": "React Front-End Developer",
      "type": "Part-Time",
      "description": "Join our team as a Part-Time Front-End Developer in beautiful Pheonix, AZ. We are looking for a self-motivated individual with a passion for creating engaging user experiences. This position offers flexible hours and the opportunity to work remotely.",
      "location": "Pheonix, AZ",
      "salary": "$60K - $70K",
      "company": {
        "name": "Alpha Elite",
        "description": "Alpha Elite is a dynamic startup specializing in digital marketing and web development. We are committed to fostering a diverse and inclusive workplace where creativity and innovation thrive.",
        "contactEmail": "contact@adipisicingelit.com",
        "contactPhone": "555-555-5555"
      }
    },
    {
      "id": "5",
      "title": "Full Stack React Developer",
      "type": "Full-Time",
      "description": "Exciting opportunity for a Full-Time Front-End Developer in bustling Atlanta, GA. We are seeking a talented individual with a passion for building elegant and scalable web applications. Join our team and make an impact!",
      "location": "Atlanta, GA",
      "salary": "$90K - $100K",
      "company": {
        "name": "Browning Technologies",
        "description": "Browning Technologies is a rapidly growing technology company specializing in e-commerce solutions. We offer a dynamic and collaborative work environment where employees are encouraged to think creatively and innovate.",
        "contactEmail": "contact@consecteturadipisicing.com",
        "contactPhone": "555-555-5555"
      }
    },
    {
      "id": "6",
      "title": "React Native Developer",
      "type": "Full-Time",
      "description": "Join our team as a Front-End Developer in beautiful Portland, OR. We are looking for a skilled and enthusiastic individual to help us create innovative web solutions. Competitive salary and great benefits package available.",
      "location": "Portland, OR",
      "salary": "$100K - $110K",
      "company": {
        "name": "Port Solutions INC",
        "description": "Port Solutions is a leading technology company specializing in software development and digital marketing. We are committed to providing our clients with cutting-edge solutions and our employees with a supportive and rewarding work environment.",
        "contactEmail": "contact@ipsumlorem.com",
        "contactPhone": "555-555-5555"
      }
    }
  ]
};

const allJobs = jobsListings.jobs;

export const JobsListing = ()=><section className="bg-blue-50 px-4 py-10">
  <div className="container-xl lg:container m-auto">
    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
      Browse Jobs
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* <!-- Job Listing 1 --> */}
      
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">Full-Time</div>
            <h3 className="text-xl font-bold">Senior React Developer</h3>
          </div>

          <div className="mb-5">
            We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...
          </div>

          <h3 className="text-indigo-500 mb-2">$70 - $80K / Year</h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <i className="fa-solid fa-location-dot text-lg"></i>
              Boston, MA
            </div>
            <a
              href="job.html"
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Job Listing 2 --> */}
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">Remote</div>
            <h3 className="text-xl font-bold">Front-End Engineer (React)</h3>
          </div>

          <div className="mb-5">
            Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion...
          </div>

          <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <i className="fa-solid fa-location-dot text-lg"></i>
              Miami, FL
            </div>
            <a
              href="job.html"
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Job Listing 3 --> */}
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">Remote</div>
            <h3 className="text-xl font-bold">React.js Developer</h3>
          </div>

          <div className="mb-5">
            Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference...
          </div>

          <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <i className="fa-solid fa-location-dot text-lg"></i>
              Brooklyn, NY
            </div>
            <a
              href="job.html"
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;
