import './widgetLg.css'

export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHyjO2ULGrgYQ/profile-displayphoto-shrink_400_400/0/1605250333227?e=1642032000&v=beta&t=3pubYfvp1XoDok0WeBGsfYiEad9ZJmzIkGXHkovBvlQ" alt="" className="widgetLgImg"/>
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/> </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHyjO2ULGrgYQ/profile-displayphoto-shrink_400_400/0/1605250333227?e=1642032000&v=beta&t=3pubYfvp1XoDok0WeBGsfYiEad9ZJmzIkGXHkovBvlQ" alt="" className="widgetLgImg"/>
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Declined"/> </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHyjO2ULGrgYQ/profile-displayphoto-shrink_400_400/0/1605250333227?e=1642032000&v=beta&t=3pubYfvp1XoDok0WeBGsfYiEad9ZJmzIkGXHkovBvlQ" alt="" className="widgetLgImg"/>
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Pending"/> </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHyjO2ULGrgYQ/profile-displayphoto-shrink_400_400/0/1605250333227?e=1642032000&v=beta&t=3pubYfvp1XoDok0WeBGsfYiEad9ZJmzIkGXHkovBvlQ" alt="" className="widgetLgImg"/>
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/> </td>
        </tr>
      </table>
    </div>
  )
}
