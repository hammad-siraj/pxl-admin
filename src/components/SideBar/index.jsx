import React, { memo, useMemo } from "react";
import { PropTypes } from "prop-types";
import { Link, useLocation } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { ITEMS } from "./constants";
import * as S from "./styled";

function ListItemLink(props) {
  return <ListItem button disableGutters {...props} />;
}

const ItemLink = ({ icon, label, pathname, subUrls, url }) => (
  <ListItemLink className={`row-height`}>
    <Link className="flex exact" exact to={url}>
      <img alt="" style={{ padding: 8 }} src={icon} />
      <ListItemText primary={label} />
    </Link>
  </ListItemLink>
);

ItemLink.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  pathname: PropTypes.string,
  subUrls: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
};

function SideBar() {
  const location = useLocation();

  const showTabs = useMemo(
    () => (
      <List>
        {ITEMS.map((item, index) => (
          <ItemLink className="links" key={index} {...item} {...location} />
        ))}
      </List>
    ),
    []
  );
  return <S.ListItem>{showTabs}</S.ListItem>;
}

export default memo(SideBar);
