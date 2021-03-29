import * as React from "react";
import { useState, useEffect } from "react";
import { Layout, Heading } from "../../components";
import SearchBox from "./components/SearchBox";
import PromoCodeItem from "./components/PromoCodeItem";
import { searchPromocode, updatePromocode } from "./action";
import { connect } from "react-redux";
import { useAction } from "../../../lib/ActionListener/useAction";
import { UPDATE_PROMOCODE_SUCCESS } from "./constant";
import { useToasts } from "react-toast-notifications";

export interface DashboardProps {
  updateStatus: Function;
  searchPromocodes: Function;
  promoCodes: any[];
}

const Dashboard = (props: DashboardProps) => {
  const { addToast } = useToasts();
  const [search, setSearch] = useState("");

  useAction(() => {
    showToast();
  }, UPDATE_PROMOCODE_SUCCESS);

  useEffect(() => {
    props.searchPromocodes(search);
  }, [search]);

  const showToast = () => {
    addToast("Status successfully updated!", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const resetSearch = () => {
    setSearch("");
  };

  return (
    <Layout>
      <Heading text="Services" />
      <div className="col-sm-12 custom-padding-top-bottom">
        <SearchBox
          search={search}
          setSearch={setSearch}
          resetSearch={resetSearch}
        />
      </div>
      {props.promoCodes.length ? (
        props.promoCodes.map((p) => (
          <PromoCodeItem
            data={p}
            key={p.id}
            updateStatus={(data: any) => props.updateStatus(data)}
          />
        ))
      ) : (
        <div className="col-sm-12 custom-padding-top-bottom">
          <h6>No promocode Found</h6>
        </div>
      )}
    </Layout>
  );
};

const mapStateToProps = (state: any) => {
  const { promoCodes } = state.dashboardState;
  return {
    promoCodes,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  dispatch,
  updateStatus: (data: any) => {
    dispatch(updatePromocode(data));
  },
  searchPromocodes: (query: string) => {
    dispatch(searchPromocode(query));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
