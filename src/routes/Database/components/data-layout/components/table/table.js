import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Table as TableBoard,
} from 'material-ui';
import { helpers } from 'utils';
import { classes, styles } from './style';

const Table = ({ content, category } = this.props) => (
  <Paper className={classes.tableWrapper}>
    <TableBoard>
      <TableHead>
        <TableRow>
          {helpers.getTableHeader(category)?.map(h => (
            <TableCell className={classes.cell} padding="dense">
              {h}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {content?.map((item, index) => (
          <TableRow hover key={index}>
            <TableCell className={classes.cell} padding="dense">
              {item.name}
            </TableCell>
            <TableCell className={classes.cell} padding="dense">
              <div className={classes.flexClass}>
                {item.content?.map(c => (
                  <a target="_blank" style={styles.marginClass} href={c.link}>
                    {c.name}
                  </a>
                ))}
              </div>
            </TableCell>
            <TableCell className={classes.cell} padding="dense">
              <div className={classes.flexClass}>
                {item.links1?.map(m => (
                  <a target="_blank" style={styles.marginClass} href={m.link}>
                    {helpers.transformName(m.type) || m.type}
                  </a>
                ))}
              </div>
            </TableCell>
            <TableCell lassName={classes.cell} padding="dense">
              <div className={classes.flexClass}>
                {item.links2?.map(p => (
                  <a target="_blank" style={styles.marginClass} href={p.link}>
                    {helpers.transformName(p.type) || p.type}
                  </a>
                ))}
              </div>
            </TableCell>
            <TableCell className={classes.cell} padding="dense">
              {item.other?.map(
                f =>
                  f !== null && <span className={classes.footerItem}>{f}</span>,
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableBoard>
  </Paper>
);

export default Table;
