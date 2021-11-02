import { Fragment } from "react";
import { useSelector } from "react-redux";
import MainHeader from "./MainHeader";
import Notification from "../UI/Notification";

const Layout = (props) => {
  const notification = useSelector((state) => {
    // console.log(state.ui.notification);
    return state.ui.notification;
  });

  return (
    <Fragment>
      {notification.isNotification && <Notification {...notification} />}
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
