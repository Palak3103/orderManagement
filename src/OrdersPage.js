import React, { useState } from "react";
import ordersData from "./ordersData";

function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOrdersData, setFilteredOrdersData] = useState(ordersData);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredData = ordersData.filter(
      (order) =>
        order.orderId.toLowerCase().includes(query.toLowerCase()) ||
        order.vendorName.toLowerCase().includes(query.toLowerCase()) ||
        order.pickupDate.toLowerCase().includes(query.toLowerCase()) ||
        order.status.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredOrdersData(filteredData);
  };

  return (
    <div>
      <h1>Orders Page</h1>
      <input
        type="text"
        placeholder="Search orders by Order ID, Vendor Name, Pickup Date or Status"
        value={searchQuery}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Vendor Name</th>
            <th>Pickup Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrdersData.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.vendorName}</td>
              <td>{order.pickupDate}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;
