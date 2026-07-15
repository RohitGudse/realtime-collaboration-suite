import React, { useState } from "react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("All Notes");

  const menuItems = [
    {
      id: 1,
      title: "All Notes",
      icon: "📝",
      total: 18,
    },
    {
      id: 2,
      title: "Important",
      icon: "⭐",
      total: 6,
    },
    {
      id: 3,
      title: "Work",
      icon: "💼",
      total: 8,
    },
    {
      id: 4,
      title: "Personal",
      icon: "🏠",
      total: 4,
    },
    {
      id: 5,
      title: "Completed",
      icon: "✅",
      total: 12,
    },
    {
      id: 6,
      title: "Archived",
      icon: "📂",
      total: 3,
    },
  ];

  const recentNotes = [
    {
      id: 101,
      name: "React Learning",
      date: "12 Jul 2026",
    },
    {
      id: 102,
      name: "Shopping List",
      date: "13 Jul 2026",
    },
    {
      id: 103,
      name: "Meeting Notes",
      date: "14 Jul 2026",
    },
    {
      id: 104,
      name: "Travel Plan",
      date: "15 Jul 2026",
    },
  ];

  return (
    <aside
      style={{
        width: "280px",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #ddd",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Arial",
      }}
    >
      {/* Header */}
      <div>
        <h2
          style={{
            marginBottom: "20px",
            color: "#333",
          }}
        >
          📒 Smart Notes
        </h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search Notes..."
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        {/* Menu */}
        <h4 style={{ color: "#666" }}>Categories</h4>

        <div>
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item.title)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px",
                marginTop: "8px",
                cursor: "pointer",
                borderRadius: "8px",
                background:
                  activeItem === item.title ? "#1976d2" : "#f5f5f5",
                color:
                  activeItem === item.title ? "#fff" : "#333",
                transition: "0.3s",
              }}
            >
              <span>
                {item.icon} {item.title}
              </span>

              <span
                style={{
                  background:
                    activeItem === item.title
                      ? "#fff"
                      : "#ddd",
                  color:
                    activeItem === item.title
                      ? "#1976d2"
                      : "#000",
                  padding: "3px 8px",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                {item.total}
              </span>
            </div>
          ))}
        </div>

        {/* Recent Notes */}
        <div style={{ marginTop: "35px" }}>
          <h4>Recent Notes</h4>

          {recentNotes.map((note) => (
            <div
              key={note.id}
              style={{
                padding: "10px",
                marginTop: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                background: "#fafafa",
              }}
            >
              <h5
                style={{
                  margin: "0 0 5px 0",
                }}
              >
                {note.name}
              </h5>

              <small>{note.date}</small>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "20px",
          borderTop: "1px solid #ddd",
          paddingTop: "15px",
        }}
      >
        <button
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            background: "#1976d2",
            color: "#fff",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          + Create New Note
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;