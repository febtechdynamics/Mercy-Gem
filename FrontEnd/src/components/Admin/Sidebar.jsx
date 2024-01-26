function Sidebar({ activeTab, handleTabClick }) {
  console.log("handleTabClick:", handleTabClick);

  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li
            onClick={() => handleTabClick("users")}
            className={activeTab === "users" ? "active" : ""}
          >
            Users
          </li>
          <li
            onClick={() => handleTabClick("products")}
            className={activeTab === "products" ? "active" : ""}
          >
            Products
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
