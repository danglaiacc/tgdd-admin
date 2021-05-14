import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Button,
  Row,
  Col,
  Input,
  Label,
} from "reactstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  colorId: Yup.string().required("Required"),
  colorText: Yup.string().required("Required"),
  colorImg: Yup.string().required("Required"),
});

export default function PhoneAddColor() {
  const [colorGeneral, setColorGeneral] = useState({
    colorId: "",
    colorText: "",
    colorImg: "",
  });
  const [colorSlider, setColorSlider] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    console.log(name, value);
    setColorGeneral({
      ...colorGeneral,
      [name]: value,
    });
  };
  const changeColorSlider = (evt) => {
    const { name, value } = evt.target;
    var arrTemp = [...colorSlider];
    arrTemp[[name]] = value;
    setColorSlider(arrTemp);
  };

  const handleSubmit = () => {
    console.log(colorSlider);
  };
 
  return (
    <Card>
      <CardHeader>
        <CardTitle>Màu sắc</CardTitle>
      </CardHeader>
      <CardBody>
        <Formik
          initialValues={{
            colorId: "",
            colorText: "",
            colorImg: "",
          }}
          validationSchema={formSchema}
        >
          {({ errors, touched }) => (
            <Form className="mt-2">
              <Row>
                <Col md="4">
                  <FormGroup className="form-label-group">
                    <Field
                      type="text"
                      placeholder="Id"
                      name="colorId"
                      id="colorId"
                      onChange={handleInputChange}
                      value={colorGeneral.colorId}
                      className={`form-control ${
                        touched.colorId && colorGeneral.colorId === ""
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    <Label for="required">Id</Label>
                  </FormGroup>
                </Col>

                <Col md="4">
                  <FormGroup className="form-label-group">
                    <Field
                      type="text"
                      placeholder="Text"
                      name="colorText"
                      id="colorText"
                      onChange={handleInputChange}
                      value={colorGeneral.colorText}
                      className={`form-control ${
                        touched.colorText && colorGeneral.colorText === ""
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    <Label for="required">Text</Label>
                  </FormGroup>
                </Col>

                <Col md="4">
                  <FormGroup className="form-label-group">
                    <Field
                      type="text"
                      placeholder="Hình minh họa"
                      name="colorImg"
                      id="colorImg"
                      onChange={handleInputChange}
                      value={colorGeneral.colorImg}
                      className={`form-control ${
                        touched.colorImg && colorGeneral.colorImg === ""
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    <Label for="required">Hình minh họa</Label>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                {colorSlider.map((val, index) => (
                  <Col md="6" sm="12" key={index}>
                    <FormGroup className="form-label-group">
                      <Input
                        type="text"
                        name={index + ""}
                        value={colorSlider[index]}
                        onChange={changeColorSlider}
                        placeholder="Hình cho slider "
                      />
                    </FormGroup>
                  </Col>
                ))}
              </Row>
              <Row>
                <Col sm="12">
                  <FormGroup className="form-label-group">
                    <Button.Ripple
                      color="primary"
                      type="submit"
                      onClick={() => handleSubmit()}
                    >
                      Thêm màu sắc
                    </Button.Ripple>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
}
