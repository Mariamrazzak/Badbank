
  
    function AllData() {
      const ctx = React.useContext(UserContext);
    
      const TableBody = () => {
        const userdata = ctx.users.filter((item) => item.name != "");
        const rows = userdata.map((row, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.password}</td>
              <td>{row.balance}</td>
            </tr>
          );
        });
    
        return <tbody>{rows}</tbody>;
      };
    
      const TableHeader = () => {
        return (
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
        );
      };
    
      return (
        <Card
          style={{width: "auto"}}
          bgcolor='success'
          header="All data"
          body={
            <div className="table-responsive">
              <table className="table table-striped">
                <TableHeader />
                <TableBody />
              </table>
            </div>
          }
        />
      );
        }
        