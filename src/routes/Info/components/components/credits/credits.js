import React from 'react';
import {
  Table,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  TableHead,
} from 'material-ui';
import credits from './content';

import { classes, styles } from './style';

const Credits = () => (
  <div className={classes.credits}>
    <Paper className={classes.creditsList}>
      <Table className={classes.creditsTable}>
        <TableHead>
          <TableRow>
            <TableCell style={styles.tableCell}>Credits</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {credits.map(c => (
            <TableRow key={c.key}>
              <TableCell>{c.credit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);
export default Credits;
