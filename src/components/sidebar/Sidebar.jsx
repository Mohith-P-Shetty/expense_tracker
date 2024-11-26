import { useDispatch, useSelector } from "react-redux";
import { toggleIsOpen } from "../../Slices/uiSlice";
import "react-bootstrap";
import "./Sidebar.css";
import { GoSidebarExpand } from "react-icons/go";
import { Stack } from "react-bootstrap";

function Sidebar() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.isOpen);
  return (
    <div className={isOpen ? "sidebar-wrapper open" : "sidebar-wrapper closed"}>
      <GoSidebarExpand
        className="sidebar-icon"
        onClick={() => dispatch(toggleIsOpen())}
      />
      <div className="stack-items">
        <Stack>
          <div id="item1">item1</div>
          <div id="item2">item2</div>
          <div id="item3">item3</div>
        </Stack>
      </div>
    </div>
  );
}

export default Sidebar;
