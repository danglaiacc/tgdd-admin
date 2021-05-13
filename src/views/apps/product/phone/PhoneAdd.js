import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Button,
  Label,
  Row,
  Col,
  Input,
} from "reactstrap";
import { Plus } from "react-feather";
import Select from "react-select";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Manu from "./Manu";
import ManuAdd from "./ManuAdd";
import PhoneAddColor from "./PhoneAddColor";

const formSchema = Yup.object().shape({
  id: Yup.number().min(6, ">5 ký tự").required("Required"),
  url: Yup.string().required("Required"),
  text: Yup.string().required("Required"),
  img: Yup.string().required("Required"),
  price: Yup.string().required("Required"),
  article: Yup.string().required("Required"),
  screen: Yup.string().required("Required"),
  os: Yup.string().required("Required"),
  camera_truoc: Yup.string().required("Required"),
  camera_sau: Yup.string().required("Required"),
  cpu: Yup.string().required("Required"),
  ram: Yup.string().required("Required"),
  rom: Yup.string().required("Required"),
  microsd: Yup.string().required("Required"),
  pin: Yup.string().required("Required"),
  version_id: Yup.string().required("Required"),
});

export default function PhoneAdd() {
  const [showManuAdd, setShowManuAdd] = useState("close");
  const colorOptions = [
    { value: "red", label: "Màu đỏ" },
    { value: "blue", label: "Màu xanh" },
    { value: "purple", label: "Màu vàng" },
    { value: "gray", label: "Màu xám" },
    { value: "orange", label: "Màu bạc" },
  ];
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle> Thêm điện thoại</CardTitle>
        </CardHeader>
        <div className="email-application position-relative h-auto">
          <div
            className={`app-content-overlay ${
              showManuAdd === "open" ? "show" : ""
            }`}
            onClick={() => setShowManuAdd("close")}
          />

          <CardBody>
            <Manu setShowManuAdd={setShowManuAdd} />

            <Formik
              initialValues={{
                id: "",
                url: "",
                text: "",
                img: "",
                price: "",
                article: "",
                screen: "",
                os: "",
                camera_truoc: "",
                camera_sau: "",
                cpu: "",
                ram: "",
                rom: "",
                microsd: "",
                pin: "",
                version_id: "",
              }}
              validationSchema={formSchema}
            >
              {({ errors, touched }) => (
                <Form className="mt-2">
                  <Row>
                    <Col md="3">
                      <FormGroup row>
                        <Col md="6 text-right">
                          <span>Mã điện thoại</span>
                        </Col>
                        <Col md="6">
                          <Field
                            type="number"
                            name="id"
                            id="id"
                            placeholder="01234567"
                            className={`form-control ${
                              errors.id && touched.id && "is-invalid"
                            }`}
                          />
                        </Col>
                      </FormGroup>
                    </Col>
                    <Col md="5">
                      <FormGroup row>
                        <Col md="3" className="text-right">
                          <span>Phiên bản</span>
                        </Col>
                        <Col md="7">
                          <Select
                            classNamePrefix="select"
                            defaultValue={colorOptions[0]}
                            name="color"
                            options={colorOptions}
                          />
                        </Col>
                        <Col className="px-0" md="2">
                          <div className="btn-icon btn-round btn btn-success mr-1">
                            <Plus size={24} />
                          </div>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6" sm="12">
                      <Col md="12">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            placeholder="Tên điện thoại"
                            name="text"
                            id="text"
                            className={`form-control ${
                              errors.text && touched.text && "is-invalid"
                            }`}
                          />
                          <Label for="required">Tên điện thoại</Label>
                        </FormGroup>
                      </Col>

                      <Col md="12">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            placeholder="Hình minh họa"
                            name="img"
                            id="img"
                            className={`form-control ${
                              errors.img && touched.img && "is-invalid"
                            }`}
                          />
                          <Label for="required">Hình minh họa</Label>
                        </FormGroup>
                      </Col>

                      <Col md="6" sm="12" className="d-inline-block">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            placeholder="Giá bán"
                            name="price"
                            id="price"
                            className={`form-control ${
                              errors.price && touched.price && "is-invalid"
                            }`}
                          />
                          <Label for="required">Giá bán</Label>
                        </FormGroup>
                      </Col>

                      <Col md="6" sm="12" className="d-inline-block">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            placeholder="Màn hình"
                            name="screen"
                            id="screen"
                            className={`form-control ${
                              errors.screen && touched.screen && "is-invalid"
                            }`}
                          />
                          <Label for="required">Màn hình</Label>
                        </FormGroup>
                      </Col>

                      <Col md="6" sm="12" className="d-inline-block">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            placeholder="Camera trước"
                            name="camera_truoc"
                            id="camera_truoc"
                            className={`form-control ${
                              errors.camera_truoc &&
                              touched.camera_truoc &&
                              "is-invalid"
                            }`}
                          />
                          <Label for="required">Camera trước</Label>
                        </FormGroup>
                      </Col>

                      <Col md="6" sm="12" className="d-inline-block">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            placeholder="Camera sau"
                            name="camera_sau"
                            id="camera_sau"
                            className={`form-control ${
                              errors.camera_sau &&
                              touched.camera_sau &&
                              "is-invalid"
                            }`}
                          />
                          <Label for="required">Camera sau</Label>
                        </FormGroup>
                      </Col>
                    </Col>

                    <Col md="6" sm="12">
                      <Col md="6" sm="12" className="d-inline-block">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            placeholder="CPU"
                            name="cpu"
                            id="cpu"
                            className={`form-control ${
                              errors.cpu && touched.cpu && "is-invalid"
                            }`}
                          />
                          <Label for="required">CPU</Label>
                        </FormGroup>
                      </Col>

                      <Col md="6" sm="12" className="d-inline-block">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            placeholder="PIN"
                            name="pin"
                            id="pin"
                            className={`form-control ${
                              errors.pin && touched.pin && "is-invalid"
                            }`}
                          />
                          <Label for="required">PIN</Label>
                        </FormGroup>
                      </Col>

                      <Col md="6" sm="12" className="d-inline-block">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            placeholder="RAM"
                            name="ram"
                            id="ram"
                            className={`form-control ${
                              errors.ram && touched.ram && "is-invalid"
                            }`}
                          />
                          <Label for="required">RAM</Label>
                        </FormGroup>
                      </Col>

                      <Col md="6" sm="12" className="d-inline-block">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            placeholder="ROM"
                            name="rom"
                            id="rom"
                            className={`form-control ${
                              errors.rom && touched.rom && "is-invalid"
                            }`}
                          />
                          <Label for="required">ROM</Label>
                        </FormGroup>
                      </Col>

                      <Col md="6" sm="12" className="d-inline-block">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            placeholder="Micro SD"
                            name="microsd"
                            id="microsd"
                            className={`form-control ${
                              errors.microsd && touched.microsd && "is-invalid"
                            }`}
                          />
                          <Label for="required">Micro SD</Label>
                        </FormGroup>
                      </Col>

                      <Col md="6" sm="12" className="d-inline-block">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            placeholder="Hệ điều hành"
                            name="os"
                            id="os"
                            className={`form-control ${
                              errors.os && touched.os && "is-invalid"
                            }`}
                          />
                          <Label for="required">Hệ điều hành</Label>
                        </FormGroup>
                      </Col>

                      <Col md="6" sm="12" className="d-inline-block">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            name="mangdd"
                            id="mangdd"
                            className="form-control"
                            placeholder="Mạng di động"
                          />
                          <Label for="required">Mạng di động</Label>
                        </FormGroup>
                      </Col>

                      <Col md="6" sm="12" className="d-inline-block">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            name="sim"
                            className="form-control"
                            id="sim"
                            placeholder="Sim"
                          />
                          <Label for="required">Sim</Label>
                        </FormGroup>
                      </Col>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="12">
                      <Col>
                        <FormGroup className="form-label-group">
                          <Input
                            type="textarea"
                            placeholder="Mô tả"
                            name="article"
                            id="article"
                            rows="15"
                            className={`form-control ${
                              errors.article && touched.article && "is-invalid"
                            }`}
                          />
                          <Label for="required">Mô tả</Label>
                        </FormGroup>
                      </Col>
                    </Col>
                  </Row>

                  <Button.Ripple color="primary" type="submit">
                    Thêm điện thoại
                  </Button.Ripple>
                </Form>
              )}
            </Formik>

            <ManuAdd
              setShowManuAdd={setShowManuAdd}
              showManuAdd={showManuAdd}
            />
          </CardBody>
        </div>
      </Card>
      <PhoneAddColor />
    </>
  );
}
