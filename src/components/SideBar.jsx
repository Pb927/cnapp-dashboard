import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function SideBar({
  show,
  handleClose,
  newWidgetName,
  newWidgetContent,
  setNewWidgetName,
  setNewWidgetContent,
  handleAddWidget,
}) {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Widget</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mt-8">
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Widget Name
              </label>
              <input
                type="text"
                value={newWidgetName}
                onChange={(e) => setNewWidgetName(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 "
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Widget Content
              </label>
              <textarea
                value={newWidgetContent}
                onChange={(e) => setNewWidgetContent(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              ></textarea>
            </div>
            <button
              onClick={handleAddWidget}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Add Widget
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
