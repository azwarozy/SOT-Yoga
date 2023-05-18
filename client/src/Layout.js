import { Outlet } from "react-router-dom";

const Layout = () => {
  
  return (
    <>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <h4 class="logo">SOT Yoga</h4>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/schedule">Classes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/bookingpage">Booking</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/yogainfo">Yoga Info</a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
