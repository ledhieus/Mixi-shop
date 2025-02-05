import { Outlet } from "react-router-dom";
import { Suspense } from "react";
// Supports weights 100-900
function AuthLayout() {
  return (
    <div>
      <div className="flex md:h-screen mt-4 md:mt-0 items-center justify-center bg-dark-200">
        <div className="h-fit w-[450px] bg-white shadow-md px-8 py-10">
          <Suspense fallback={<p>Loading</p>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
export default AuthLayout;