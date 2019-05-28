import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from "constants";

const styles = theme => ({
  root: {
    width: "500px",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 100,
  },
  tableCellFont: {
    fontSize: 18,
    fontWeight: 700,
    color: "#3b5998",
  }
});

let id = 0;
function createData(name, content) {
  id += 1;
  return { id, name, content };
}

var rows = [
  createData("First Name", "Old"),
  createData("Last Name", "Man"),
  createData("Age", 85),
  createData("Gender", "Male"),
  createData("Email", "master@gmail.com"),
  createData("Phone", "1234567890"),
  createData("Points", 100)
];





function SimpleTable(props) {
  const { classes } = props;
  console.log("profile card props",props)
  if (props.userProfile.username !=='') {
    id = 0
    rows = [
      createData("First Name", props.userProfile.first),
      createData("Last Name", props.userProfile.last),
      createData("Age", props.userProfile.age),
      createData("Gender", props.userProfile.gender),
      createData("Email", props.userProfile.email),
      createData("Phone", props.userProfile.phone),
      createData("Points", props.userProfile.score)
    ]
  }


  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell ><p className={classes.tableCellFont}>Item</p></TableCell>
            <TableCell align="left"><p className={classes.tableCellFont}>Content</p></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
