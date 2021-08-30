
import './index.scss';
import {Button } from "antd";
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className="home">
       <Link to="/test-1"><Button>Test 1</Button></Link>
       <Link to="/test-2"><Button>Test 2</Button></Link>


    </div>
  );
}

export default Home;
