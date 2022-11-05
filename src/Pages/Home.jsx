import Content from "./Content";
import { Col, Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Content
        title="Instant collaborations for remote teams"
        text="All in one for your remote team chats, collaboration and track projects"
        button="Get early access"
        placeholder="Email"
        type="email"
      />
    </div>
  );
};

export default Home;
