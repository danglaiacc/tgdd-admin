import React, { useState } from "react";
import { Input, Card, CardHeader, CardBody, Button } from "reactstrap";
import { X } from "react-feather";


export default function ManuAdd({ showManuAdd, setShowManuAdd }) {
  const [state, setState] = useState({
    manuId: "",
    manuText: "",
    manuImg: "",
  });
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({ ...state, [name]: value });
  };
  const handleSidebarClose = () => {
    setShowManuAdd("close");
    setState({
      manuId: "",
      manuText: "",
      manuImg: "",
    });
  };
  return ( 
    <Card className={`compose-email shadow-none ${showManuAdd}`}>
      <CardHeader className="compose-mail-header align-items-center">
        <div className="compose-mail-title">
          <h3 className="text-bold-600 card-title">Thêm thương hiệu</h3>
        </div>
        <div
          className="close-compose-mail"
          onClick={() => setShowManuAdd("close")}
        > 
          <X size={20} />
        </div>
      </CardHeader>
      <CardBody className="compose-mail-body p-1">
        <div className="form-label-group pt-1">
          <Input
            id="manuId"
            placeholder="Mã thương hiệu"
            name="manuId"
            value={state.manuId}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-label-group">
          <Input
            id="manuText"
            placeholder="Tên thương hiệu"
            value={state.manuText}
            name="manuText"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-label-group">
          <Input
            id="manuImg"
            placeholder="Link hình minh họa"
            value={state.manuImg}
            name="manuImg"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="action-btns d-flex justify-content-end mt-1">
          <Button.Ripple
            color="danger"
            className="mr-1"
            onClick={() => handleSidebarClose()}
          >
            Cancel
          </Button.Ripple>
          <Button.Ripple
            color="primary"
            disabled={
              state.manuId.length>0 && state.manuText.length > 0 && state.manuImg.length>0 
                ? false
                : true
            }
            onClick={() => handleSidebarClose()}
          >
            Lưu
          </Button.Ripple>
        </div>
      </CardBody>
    </Card>
  );
}
