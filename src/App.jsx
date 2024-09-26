import React from 'react';
// import './style.css'; // Ensure your CSS file is named 'style.css'

const Portfolio = () => {
    return (
        <div>
            {/* Header Section */}
            <header>
                <div className="intro">
                    <h1>ZAYAM MUSHTAQ</h1>
                    <p>Web Developer</p>
                </div>
                <div className="profile-photo">
                    <img src="images.jpeg" alt="Profile Photo" />
                </div>
            </header>

            {/* Navigation Menu */}
            <nav>
                <ul>
                    <li><a href="#educational-history">Educational History</a></li>
                    <li><a href="#skills">Professional Skills</a></li>
                    <li><a href="#projects">Professional Projects</a></li>
                    <li><a href="#hobbies">Hobbies</a></li>
                    <li><a href="#ambitions">Life Ambitions</a></li>
                    <li><a href="#efforts">Efforts for Country</a></li>
                    <li className="right-align"><a href="#contact">Contact Me</a></li>
                </ul>
            </nav>

            {/* Educational History Section */}
            <section id="educational-history">
                <h2>Educational History</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Degree Title</th>
                            <th>Passing Year</th>
                            <th>Total Marks</th>
                            <th>Obtained Marks</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Bachelor of Science</td>
                            <td>2026</td>
                            <td>4000</td>
                            <td>3800</td>
                            <td>95%</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </section>

            {/* Professional Skills Section */}
            <section id="skills">
                <h2>Professional Skills</h2>
                <ol>
                    <li>Web Development</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    {/* Add more skills as needed */}
                </ol>
            </section>

            {/* Professional Projects Section */}
            <section id="projects">
                <h2>Professional Projects</h2>
                <ol>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                    {/* Add more projects as needed */}
                </ol>
            </section>

            {/* Hobbies Section */}
            <section id="hobbies">
                <h2>Hobbies</h2>
                <ul>
                    <li>Reading</li>
                    <li>Coding</li>
                    <li>Traveling</li>
                    {/* Add more hobbies as needed */}
                </ul>
            </section>

            {/* Life Ambitions Section */}
            <section id="ambitions">
                <h2>Life Ambitions</h2>
                <ul>
                    <li><strong>Achieved</strong>
                        <ul>
                            <li>Graduated with Honors</li>
                            <li>Secured First Job</li>
                            <li>Built My Own Website</li>
                            <li>Learned New Skills</li>
                        </ul>
                    </li>
                    <li><strong>Struggling</strong>
                        <ul>
                            <li>Master Public Speaking</li>
                            <li>Start My Own Business</li>
                            <li>Get Healthier</li>
                            <li>Travel the World</li>
                        </ul>
                    </li>
                </ul>
            </section>

            {/* Efforts for Country Section */}
            <section id="efforts">
                <h2>Efforts for Country</h2>
                <ul>
                    <li><strong>Succeeded</strong>
                        <ul>
                            <li>Organized Charity Event</li>
                            <li>Volunteered in Education Programs</li>
                            <li>Helped Promote Green Practices</li>
                            <li>Raised Awareness on Social Media</li>
                        </ul>
                    </li>
                    <li><strong>Struggling</strong>
                        <ul>
                            <li>Improve Educational Infrastructure</li>
                            <li>Promote Digital Literacy</li>
                            <li>Increase Healthcare Awareness</li>
                            <li>Reduce Plastic Waste</li>
                        </ul>
                    </li>
                </ul>
            </section>

            {/* Footer Section */}
            <footer id="contact">
                <p>Contact: your-email@example.com</p>
                <div className="social-icons">
                    <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                        <img src="whatsapp-icon.png" alt="WhatsApp" />
                    </a>
                    <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <img src="facebook-icon.png" alt="Facebook" />
                    </a>
                    <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <img src="instagram-icon.png" alt="Instagram" />
                    </a>
                    <a href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer">
                        <img src="youtube-icon.png" alt="YouTube" />
                    </a>
                    <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                        <img src="linkedin-icon.png" alt="LinkedIn" />
                    </a>
                    <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <img src="twitter-icon.png" alt="Twitter" />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
