

export default function Dashboard() {
  const stats = [
    { label: "Total Achievements", value: "248" },
    { label: "Contributors", value: "89" },
    { label: "Categories", value: "4" },
    { label: "This Month", value: "24" },
  ]

  const contributors = [
    { name: "Dr. Rajesh Kumar", count: 24, category: "Research" },
    { name: "Prof. Priya Singh", count: 18, category: "Teaching" },
    { name: "Dr. Amit Patel", count: 16, category: "Community" },
    { name: "Prof. Sarah Johnson", count: 14, category: "Entrepreneurship" },
  ]

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", width: "100%", flex: 1 }}>
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>Dashboard</h1>
        <p style={{ color: "#666", marginBottom: "30px" }}>Overview of department achievements</p>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "5px",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
              }}
            >
              <p style={{ color: "#666", fontSize: "14px", margin: "0 0 10px 0" }}>{stat.label}</p>
              <p style={{ fontSize: "32px", fontWeight: "bold", color: "#2563eb", margin: 0 }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Top Contributors */}
        <div style={{ border: "1px solid #ddd", padding: "30px", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Top Contributors</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {contributors.map((contributor) => (
              <div
                key={contributor.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  border: "1px solid #eee",
                }}
              >
                <div>
                  <p style={{ fontSize: "16px", fontWeight: "bold", margin: "0 0 5px 0" }}>{contributor.name}</p>
                  <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>{contributor.category}</p>
                </div>
                <span
                  style={{
                    backgroundColor: "#2563eb",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "3px",
                    fontSize: "14px",
                  }}
                >
                  {contributor.count} achievements
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
