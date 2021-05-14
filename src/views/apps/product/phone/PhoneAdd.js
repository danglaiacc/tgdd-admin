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
import axios from "../../../../utility/axiosClient";

const formSchema = Yup.object().shape({
  id: Yup.number().min(6, ">5 ký tự").required("Required"),
  url: Yup.string().required("Required"),
  text: Yup.string().required("Required"),
  img_small: Yup.string().required("Required"),
  img_large: Yup.string().required("Required"),
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
  const colorOptions = [
    { value: "red", label: "Màu đỏ" },
    { value: "blue", label: "Màu xanh" },
    { value: "purple", label: "Màu vàng" },
    { value: "gray", label: "Màu xám" },
    { value: "orange", label: "Màu bạc" },
  ];
  const [showManuAdd, setShowManuAdd] = useState("close");
  const [phoneDetail, setPhoneDetail] = useState({
    id: "",
    url: "",
    text: "",
    img_small: "",
    img_large: "",
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
    version_id: colorOptions[0].value
  });

  const [imgSlider, setImgSlider] = useState([
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
  
  const changeImgSlider = (evt) => {
    const { name, value } = evt.target;
    var arrTemp = [...imgSlider];
    arrTemp[[name]] = value;
    setImgSlider(arrTemp);
  };

  const handlePostPhone = () => {
     axios
       .post("/phone/add", {
         phoneDetail: phoneDetail
       })
       .then((result) => {
         alert("Thêm điện thoại thành công"); 
       })
       .catch((err) => {
         console.log("Thêm bình luận thất bại: " + err);
       });
  };
  
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setPhoneDetail({
      ...phoneDetail,
      [name]:value
    })
  }

  const handleChangeVersion = (evt) => {
    setPhoneDetail({
      ...phoneDetail,
      version_id: evt.value
    })
  };
  
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

            <Formik initialValues={phoneDetail} validationSchema={formSchema}>
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
                            value={phoneDetail.id}
                            onChange={handleInputChange}
                            className={`form-control ${
                              touched.id && phoneDetail.id === ""
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                        </Col>
                      </FormGroup>
                    </Col>

                    <Col md="4">
                      <FormGroup row>
                        <Col md="6 text-right">
                          <span>URL</span>
                        </Col>
                        <Col md="6">
                          <Field
                            type="text"
                            name="url"
                            id="url"
                            placeholder="01234567"
                            value={phoneDetail.url}
                            onChange={handleInputChange}
                            className={`form-control ${
                              touched.url && phoneDetail.url === ""
                                ? "is-invalid"
                                : ""
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
                            onChange = {handleChangeVersion}
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
                    <Col md="6" sm="12" className="pl-0">
                      <Col md="12">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            placeholder="Tên điện thoại"
                            name="text"
                            id="text"
                            value={phoneDetail.text}
                            onChange={handleInputChange}
                            className={`form-control ${
                              touched.text && phoneDetail.text === ""
                                ? "is-invalid"
                                : ""
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
                            name="img_small"
                            id="img_small"
                            value={phoneDetail.img_small}
                            onChange={handleInputChange}
                            className={`form-control ${
                              touched.img_small && phoneDetail.img_small === ""
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <Label for="required">Hình minh họa</Label>
                        </FormGroup>
                      </Col>

                      <Col md="12">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            placeholder="Hình minh họa demo"
                            name="img_large"
                            id="img_large"
                            value={phoneDetail.large}
                            onChange={handleInputChange}
                            className={`form-control ${
                              touched.large && phoneDetail.large === ""
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <Label for="required">Hình minh họa demo</Label>
                        </FormGroup>
                      </Col>

                      <Col md="6" sm="12" className="d-inline-block">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            placeholder="Giá bán"
                            name="price"
                            id="price"
                            value={phoneDetail.price}
                            onChange={handleInputChange}
                            className={`form-control ${
                              touched.price && phoneDetail.price === ""
                                ? "is-invalid"
                                : ""
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
                            value={phoneDetail.screen}
                            onChange={handleInputChange}
                            className={`form-control ${
                              touched.screen && phoneDetail.screen === ""
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <Label for="required">Màn hình</Label>
                        </FormGroup>
                      </Col>
                    </Col>

                    <Col md="6" sm="12" className="px-0">
                      <Col md="6" sm="12" className="d-inline-block">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            placeholder="CPU"
                            name="cpu"
                            id="cpu"
                            value={phoneDetail.cpu}
                            onChange={handleInputChange}
                            className={`form-control ${
                              touched.cpu && phoneDetail.cpu === ""
                                ? "is-invalid"
                                : ""
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
                            value={phoneDetail.pin}
                            onChange={handleInputChange}
                            className={`form-control ${
                              touched.pin && phoneDetail.pin === ""
                                ? "is-invalid"
                                : ""
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
                            value={phoneDetail.ram}
                            onChange={handleInputChange}
                            className={`form-control ${
                              touched.ram && phoneDetail.ram === ""
                                ? "is-invalid"
                                : ""
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
                            value={phoneDetail.rom}
                            onChange={handleInputChange}
                            className={`form-control ${
                              touched.rom && phoneDetail.rom === ""
                                ? "is-invalid"
                                : ""
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
                            value={phoneDetail.microsd}
                            onChange={handleInputChange}
                            className={`form-control ${
                              touched.microsd && phoneDetail.microsd === ""
                                ? "is-invalid"
                                : ""
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
                            value={phoneDetail.os}
                            onChange={handleInputChange}
                            className={`form-control ${
                              touched.os && phoneDetail.os === ""
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <Label for="required">Hệ điều hành</Label>
                        </FormGroup>
                      </Col>

                      <Col md="6" sm="12" className="d-inline-block">
                        <FormGroup className="form-label-group">
                          <Field
                            type="text"
                            placeholder="Camera trước"
                            name="camera_truoc"
                            id="camera_truoc"
                            value={phoneDetail.camera_truoc}
                            onChange={handleInputChange}
                            className={`form-control ${
                              touched.camera_truoc &&
                              phoneDetail.camera_truoc === ""
                                ? "is-invalid"
                                : ""
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
                            value={phoneDetail.camera_sau}
                            onChange={handleInputChange}
                            className={`form-control ${
                              touched.camera_sau &&
                              phoneDetail.camera_sau === ""
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <Label for="required">Camera sau</Label>
                        </FormGroup>
                      </Col>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="12">
                      <FormGroup className="form-label-group">
                        <Input
                          type="textarea"
                          placeholder="Mô tả"
                          name="article"
                          id="article"
                          rows="15"
                          value={phoneDetail.article}
                          onChange={handleInputChange}
                          className={`form-control ${
                            touched.article && phoneDetail.article === ""
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <Label for="required">Mô tả</Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    {imgSlider.map((val, index) => (
                      <Col md="6" sm="12" key={index}>
                        <FormGroup className="form-label-group">
                          <Input
                            type="text"
                            name={index + ""}
                            value={imgSlider[index]}
                            onChange={changeImgSlider}
                            placeholder="Hình cho slider "
                          />
                        </FormGroup>
                      </Col>
                    ))}
                  </Row>

                  <Button.Ripple color="primary" type="submit" onClick={handlePostPhone}>
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
