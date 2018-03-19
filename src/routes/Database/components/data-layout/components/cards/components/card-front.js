import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Button, Chip } from 'material-ui';
import { getColorCode, getMediaIcon } from 'utils/helpers';
import { classes, styles } from './style';

const CardFront = (
  {
    title,
    description,
    image,
    links1,
    links2,
    content,
    footer,
    tags,
    view,
    hasImage = true,
  } = this.props,
) => (
  <Paper className={classes.cardContainer}>
    <div className={classes.header}>
      {view === 'grid' ? (
        <div className={classes.logoGrid}>
          {hasImage && (
            <div
              className={classes.iconGrid}
              style={{
                backgroundImage: `url(${image || '../missing.png'})`,
              }}
            />
          )}
          <div className={classes.title}>
            <Typography type="title" component="h4">
              {title}
            </Typography>
            <Typography type="caption" style={{ marginTop: '5px' }}>
              {description}
            </Typography>
          </div>
        </div>
      ) : (
        <div className={classes.logo}>
          <div className={classes.title}>
            <Typography
              type="title"
              component="h4"
              style={{ textAlign: 'left' }}>
              {title}
            </Typography>
            <Typography type="caption" style={{ marginTop: '5px' }}>
              {description}
            </Typography>
          </div>
          {hasImage && (
            <div
              className={classes.icon}
              style={{
                backgroundImage: `url(${image || '../missing.png'})`,
              }}
            />
          )}
        </div>
      )}
    </div>
    <div className={view === 'list' ? classes.socialList : classes.socialGrid}>
      {links1?.map(link => (
        <Button
          target="_blank"
          disabled={!link.link}
          href={link.link}
          dense
          color="primary">
          {getMediaIcon(link.type)}
        </Button>
      ))}
      {!_.isEmpty(links1) &&
        !_.isEmpty(links2) && <span className={classes.line} />}
      {links2?.map(link => (
        <Button
          target="_blank"
          disabled={!link.link}
          href={link.link}
          dense
          color="primary">
          {getMediaIcon(link.type)}
        </Button>
      ))}
    </div>
    <div
      className={view === 'list' ? classes.contentList : classes.contentGrid}>
      {content?.map(
        (item, index) =>
          item && (
            <div>
              {index !== 0 && <span className={classes.dot} />}
              <Button
                className={classes.itemButton}
                style={{ color: getColorCode(item.status) }}
                target="_blank"
                href={item.link}
                disabled={!item.link}
                dense>
                {item.name}
              </Button>
            </div>
          ),
      )}
    </div>
    <div className={classes.footer}>
      <div className={classes.tags}>
        {tags?.map(
          t => t !== 'null' && <Chip className={classes.tag} label={t} />,
        )}
      </div>
      <div className={classes.otherInfo}>
        {footer?.map(
          f =>
            f !== null && (
              <Typography
                type="body2"
                component="h2"
                style={{ marginRight: '10px', marginLeft: '15px' }}>
                {f}
              </Typography>
            ),
        )}
      </div>
    </div>
  </Paper>
);
export default CardFront;
