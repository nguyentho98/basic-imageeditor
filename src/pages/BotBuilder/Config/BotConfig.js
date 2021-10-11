import React from 'react';
import MetaTags from 'react-meta-tags';

import { Card, Col, Container, Row, CardBody, Label, Button, Form, Input } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from 'components/Common/Breadcrumb';

const BotConfig = props => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Form Layouts | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Bot builder" breadcrumbItem="Config" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <Form>
                    <div className="row mb-4">
                      <Label htmlFor="horizontal-firstname-Input" className="col-sm-3 col-form-label">
                        NLU Pipeline
                      </Label>
                      <Col sm={9}>
                        <Input type="textarea" id="textarea" maxLength="10000" rows="25" placeholder="NLU Pipeline" />
                      </Col>
                    </div>
                    <div className="row mb-4">
                      <Label htmlFor="horizontal-email-Input" className="col-sm-3 col-form-label">
                        NLU Fallback
                      </Label>
                      <Col sm={9}>
                        <input className="form-control" type="number" defaultValue="70" id="nlu_fallback" />
                      </Col>
                    </div>
                    <div className="row mb-4">
                      <Label htmlFor="horizontal-password-Input" className="col-sm-3 col-form-label">
                        FAQ Fallback
                      </Label>
                      <Col sm={9}>
                        <input className="form-control" type="number" defaultValue="50" id="faq_fallback" />
                      </Col>
                    </div>

                    <div className="row justify-content-end">
                      <Col sm={9}>
                        <div>
                          <Button type="submit" color="primary" className="w-md">
                            Save
                          </Button>
                        </div>
                      </Col>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* end row  */}
        </Container>
        {/* container-fluid */}
      </div>
    </React.Fragment>
  );
};

export default BotConfig;
