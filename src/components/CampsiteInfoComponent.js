import React from "react";
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';

//rce for create react class component
function RenderComments({comments}) {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => (
          <div className="mb-2">
            <div>{comment.text}</div>
            <div>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
          </div>
        ))}
      </div>
    );
  }
}

function RenderCampsite({campsite}) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function CampsiteInfo({campsite, comments}) {
    console.log(campsite);
    if (campsite) {
      return (
        <div className="container">
          <div className="row">
              <div className="col">
                  <Breadcrumb>
                      <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                      <BreadcrumbItem active>{campsite.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <h2>{campsite.name}</h2>
                  <hr />
              </div>
          </div>
          <div className="row">
            <RenderCampsite campsite={campsite}/>
            <RenderComments comments={comments}/>
          </div>
        </div>
      );
    }
    return <div></div>;
  
}

export default CampsiteInfo;
