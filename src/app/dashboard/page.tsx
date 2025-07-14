// app/dashboard/page.tsx
export default function UserDashboard() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Welcome, Ugochukwu!</h1>
      <p className="text-gray-600 mb-6">Here is your learning dashboard and account info.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 border rounded shadow">
          <h2 className="font-semibold mb-2">Saved Classes</h2>
          <p className="text-gray-600">No classes saved yet.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="font-semibold mb-2">Order History</h2>
          <p className="text-gray-600">You haven't made any purchases yet.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="font-semibold mb-2">Referrals</h2>
          <p className="text-gray-600">Earn rewards by inviting others.</p>
        </div>
      </div>
    </section>
  );
}
