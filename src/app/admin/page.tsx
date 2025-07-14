// app/admin/page.tsx
export default function AdminDashboard() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      <p className="text-gray-600 mb-6">Manage content, users, and site analytics here.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 border rounded shadow">
          <h2 className="font-semibold mb-2">Manage Classes</h2>
          <p className="text-gray-600">Create or update educational content.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="font-semibold mb-2">User Accounts</h2>
          <p className="text-gray-600">View and manage platform users.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="font-semibold mb-2">Orders & Payments</h2>
          <p className="text-gray-600">Track payments and transactions.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="font-semibold mb-2">Site Analytics</h2>
          <p className="text-gray-600">Track traffic, clicks, and engagement.</p>
        </div>
      </div>
    </section>
  );
}
