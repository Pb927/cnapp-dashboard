import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addWidget,
  removeWidget,
  setSearchQuery,
} from "../features/dashboardSlice";
import SideBar from "./SideBar";
import { MdDelete } from "react-icons/md";

const MainComponent = () => {
  const categories = useSelector((state) => state.dashboard.categories);
  const searchQuery = useSelector((state) => state.dashboard.searchQuery);
  const dispatch = useDispatch();
  const [newWidgetName, setNewWidgetName] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [newWidgetContent, setNewWidgetContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.category || ""
  );

  const handleAddWidget = () => {
    const newWidget = {
      id: Date.now(),
      name: newWidgetName,
      content: newWidgetContent,
    };
    dispatch(addWidget({ category: selectedCategory, widget: newWidget }));
    setNewWidgetName("");
    setNewWidgetContent("");
  };

  const handleShow = () => {
    setShow(true);
  };
  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div className="p-6 bg-gray-50 min-h-screen px-10">
      {filteredCategories.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.widgets.map((widget) => (
              <div
                key={widget.id}
                className="bg-white p-4 rounded-lg shadow-md relative"
              >
                <h3 className="text-lg font-medium">{widget.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{widget.content}</p>
                <button
                  onClick={() =>
                    dispatch(
                      removeWidget({
                        category: category.category,
                        widgetId: widget.id,
                      })
                    )
                  }
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 focus:outline-none"
                >
                  <MdDelete />
                </button>
              </div>
            ))}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-center">
              <button
                onClick={() => {
                  setSelectedCategory(category.category);
                  handleShow();
                }}
                className="text-blue-500 hover:underline"
              >
                + Add Widget
              </button>
            </div>
          </div>
        </div>
      ))}
      <SideBar
        handleClose={handleClose}
        show={show}
        handleShow={handleShow}
        newWidgetName={newWidgetName}
        setNewWidgetName={setNewWidgetName}
        setNewWidgetContent={setNewWidgetContent}
        handleAddWidget={handleAddWidget}
      />
    </div>
  );
};

export default MainComponent;
