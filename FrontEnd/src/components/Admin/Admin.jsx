import { useState } from "react";
import "./Admin.css"; // Import your custom CSS file
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [activeTab, setActiveTab] = useState(null);

  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    console.log(`clicked ${tab}`);
    setActiveTab(tab);
  };

  const handleEdit = (id) => {
    console.log(`Edit item with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete item with ID: ${id}`);
  };

  const handleAddUser = () => {
    navigate("/add-user");
  };

  const handleAddProduct = () => {
    navigate("/add-product");
  };

  return (
    <div className="app">
      <Sidebar activeTab={activeTab} handleTabClick={handleTabClick} />
      <MainContent
        activeTab={activeTab}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleAddUser={handleAddUser}
        handleAddProduct={handleAddProduct}
      />
    </div>
  );
}

export default Admin;
