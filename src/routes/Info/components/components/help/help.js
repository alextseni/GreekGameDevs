import React from 'react';

import { Table, TableRow, TableCell, Paper, TableBody } from 'material-ui';
import help from './content';
import { classes } from './style';

const Help = () => (
  <div className={classes.help}>
    <Paper className={classes.helpList}>
      <Table className={classes.helpTable}>
        <TableBody>
          {help.map(h => (
            <TableRow key={h.key}>
              <TableCell>{h.symbol}</TableCell>
              <TableCell>{h.explanation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Help;
