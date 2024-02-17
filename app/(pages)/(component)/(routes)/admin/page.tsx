"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
function AdminPage() {
  const router = useRouter();
  let userRole: any;

  useEffect(() => {
    // Get user role from local storage
    userRole = localStorage.getItem("userRole");

    if (!userRole) {
      console.log("User role not found in local storage.");
    }

    if (userRole === "admin") {
      // If user is logged in as admin, prevent navigation
      console.log("User is logged in as admin. Navigation blocked.");
    }

    // If user is not logged in as admin, navigate to home page
    console.log("Navigating to home page.");
    // router.push("/"); // Adjust the path to your home page route
  }, [router]);

  return userRole !== "Admin" ? (
    <div>
      <h1>Admin Page</h1>
      <input
        type="text"
        className="shadow-sm border-gray-300 rounded-lg m-2 p-3 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
        placeholder="Enter some text..."
      />
    </div>
  ) : null;
}

export default AdminPage;
