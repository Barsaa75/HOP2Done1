import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

function Page({ data }) {
  console.log(data);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.username}</Card.Text>
          <Card.Text>{data.phone}</Card.Text>
          <Card.Text>{data.email}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Page;
