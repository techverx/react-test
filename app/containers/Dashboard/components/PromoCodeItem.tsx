import * as React from "react";
import { Label, Input, Button } from "../../../components";

export interface Data {
  id: number;
  label: string;
  description: string;
  code: string;
  active: boolean;
}

export interface PromocodeProps {
  data: Data;
  updateStatus: Function;
}

const PromoCodeItem = (props: PromocodeProps) => {
  const { data } = props;
  return (
    <div className="col-sm-12 custom-padding-top-bottom">
      <div className="search-box-wrapper row ">
        <div className="search-box-wrapper-left col-lg-6 col-md-4  col-sm-12">
          <h5>{data.label}</h5>
          <Label label={data.description} />
        </div>
        <div className="search-box-wrapper-center col-lg-3 col-md-4  col-sm-12">
          <Input label="PROMOCODE" button={true} value={data.code} />
        </div>
        <div className="search-box-wrapper-right col-lg-3 col-md-4  col-sm-12">
          <Button
            label={data.active ? "Activate" : "Deactivate"}
            onClick={() => props.updateStatus(data)}
            customClass="btn-blue"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoCodeItem;
