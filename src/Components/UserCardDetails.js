import React from "react";

const UserCardDetails = () => {
  return (
    <div class="container mt-3">
      <h2>Card Image</h2>
      <p>Image at the top (card-img-top):</p>
      <div class="card" style="width:400px">
        <img class="card-img-top" src="" alt="Card image" style="width:100%" />
        <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <a href="#" class="btn btn-primary">
            See Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCardDetails;
