import React, { useState } from "react";
import "../../../../assets/scss/pages/app-email.scss";

export default function Manu({setShowManuAdd}) { 
  const arrManu = [
    { manuId: "iphone", manuImg: "iPhone-(Apple)42-b_16.jpg" },
    { manuId: "samsung", manuImg: "Samsung42-b_25.jpg" },
    { manuId: "oppo", manuImg: "OPPO42-b_27.png" },
    { manuId: "xiaomi", manuImg: "Xiaomi42-b_45.jpg" },
    { manuId: "vivo", manuImg: "Vivo42-b_50.jpg" },
    { manuId: "realme", manuImg: "Realme42-b_37.png" },
    { manuId: "vsmart", manuImg: "Vsmart42-b_40.png" },
    { manuId: "nokia", manuImg: "Nokia42-b_21.jpg" },
  ];
  const [manu, setManu] = useState(null); 

  return (
    <> 
      <div className="manu flex-wrap">
        {arrManu.map((x) => (
          <p
            onClick={() => setManu(x.manuId)}
            key={x.manuId}
            className={manu === x.manuId ? "check" : ""}
          >
            <img
              src={`https://cdn.tgdd.vn/Brand/1/${x.manuImg}`}
              alt={x.manuId}
            />
          </p>
        ))}
        <p
          onClick={() => { 
            setShowManuAdd("open"); 
          }}
        >
          Thêm Thương hiệu
        </p>
      </div> 
    </> 
  );
}
