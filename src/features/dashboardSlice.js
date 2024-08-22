import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      category: "CSPM Executive Dashboard",
      widgets: [
        {
          id: 1,
          name: "Cloud Accounts",
          content: "This is the Cloud Accounts widget.",
        },
        {
          id: 2,
          name: "Cloud Account Risk Assessment",
          content: "This is the Cloud Account Risk Assessment widget.",
        },
      ],
    },
  ],
  searchQuery: "",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { category, widget } = action.payload;
      const categoryObj = state.categories.find(
        (cat) => cat.category === category
      );
      if (categoryObj) {
        categoryObj.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { category, widgetId } = action.payload;
      const categoryObj = state.categories.find(
        (cat) => cat.category === category
      );
      if (categoryObj) {
        categoryObj.widgets = categoryObj.widgets.filter(
          (widget) => widget.id !== widgetId
        );
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addWidget, removeWidget, setSearchQuery } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
