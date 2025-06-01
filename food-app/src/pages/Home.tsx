import TopNav from "../components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";  // Ensure JS is loaded
import HappyPeopleWithFood from '../data/images/happy-people-image.avif';
import GroupOfPeople from '../data/images/group-of-people.jpg'
import './Home.css';

function Home() {  
  return (
    <> 
    <div className='top-nav-container'> 
      <TopNav />
    </div>

    <div className="row-container">
      <div className="image-container">
        <img src={HappyPeopleWithFood} alt="Happy People With Food" id="image"></img>
      </div>

      <div className="motto-container">
        <div className="motto-text-container">
            <p>Feeding Hope</p>
            <p>Finding Help</p>
        </div>
      </div>
    </div>

    <div className="row-container">
      <div className="image-container">
          <img src={GroupOfPeople} alt="Our Group" id="image"/>
      </div>

      <div className="mission-statement-container">
          <p>
            Our mission is to bridge the gap between individuals in need and the resources that can make a 
            difference in their lives. Guided by compassion and a commitment to fostering equity, we strive 
            to connect people to local food banks, shelters, and aid programs, ensuring that no one goes 
            hungry. By leveraging technology, community partnerships, and innovative solutions, we empower 
            families and individuals to access nutritious meals and vital support. Together, we envision a 
            future where hunger is no longer a barrier to opportunity, and every person has the chance to 
            thrive with dignity and hope. Through our work, we aim to inspire meaningful connections, create 
            a ripple effect of generosity, and build stronger, hunger-free communities for 
            generations to come.
          </p>
      </div>
    </div>
    </>
  );
};

export default Home;