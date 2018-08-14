import React from 'react';
import { Card, CardBody, CardHeader, Table, Button } from 'reactstrap';
import Link from 'react-router-dom/Link';
import { Icon } from 'antd';

const AccountRow = (account, idx) => {
    return (
        <tr className="" key={idx}>
            <td>
                <Link to={`/accounts/${account}`}>{account}</Link>
            </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>
                <Button onClick={() => {this.onClick(account)}}>Delete</Button>
            </td>
        </tr>
    );
}

const AccountsList = ({accounts, onClick}) => {
    this.onClick = onClick;
    return (
        <Card>
            <CardHeader>
                Accounts
                <Link to={`/register`} >
                    <span className='float-right'>New Account</span>
                </Link>
            </CardHeader>
            <CardBody>
                {accounts.length?
                <Table responsive striped>
                    <thead>
                        <tr>
                            <th> Account Name </th>
                            <th> Type </th>
                            <th> User ID </th>
                            <th> Region ID</th>
                            <th> Zone</th>
                            <th> Last Access</th>
                            <th> Activity</th>
                            <th> Status</th>
                            <th> ... </th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map(AccountRow, this) }
                    </tbody>
                </Table>
                : <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <p> There are no users you created! </p>
                  </div>
                }          
            </CardBody>
        </Card>
    );
}


export default AccountsList;
