import React from "react";

class Customer extends React.Component {
render() {
    return (
      <div>
          <div>
            <table className="table col-6 mt-5 mb-5 mx-auto">
              <thead>
                <tr>
                  <th>DeviceName</th>
                  <th>PrimaryStorageCapacity</th>
                  <th>StoreId</th>
                </tr>
              </thead>
              <tbody>
                {this.props.userList.map(function (user, i) {
                  return <tr key={i}>
                    <td>{user.DeviceName}</td>
                    <td>{user.PrimaryStorageCapacity}</td>
                    <td>{user.StoreId}</td>
                  </tr>;
                })}
              </tbody>
            </table>
          </div>
          </div>
    );
  }
}

  export default Customer;