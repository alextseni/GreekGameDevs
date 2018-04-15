import React from 'react';
import { analytics } from 'utils';

const credits = [
  {
    key: 1,
    credit: (
      <div>
        Site created & curated by
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="http://www.tensaiprojects.weebly.com"
          title="AT"
          onClick={() =>
            analytics.logEvent({
              category: 'Credits',
              action: 'Clicked credit',
              label: 'Alexandra website',
            })
          }>
          {' '}
          Alexandra Tseniklidou
        </a>
      </div>
    ),
  },
  {
    key: 2,
    credit: (
      <div>
        Code contributions & support by
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/pchrysa"
          title="AT"
          onClick={() =>
            analytics.logEvent({
              category: 'Credits',
              action: 'Clicked credit',
              label: 'Chrysa Git',
            })
          }>
          {' '}
          Chrysa Papadopoulou
        </a>
      </div>
    ),
  },
  {
    key: 3,
    credit: (
      <div>
        Icons made by
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.flaticon.com/authors/lucy-g"
          title="Lucy G">
          {' '}
          Lucy G{' '}
        </a>,
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.flaticon.com/authors/vector-stall"
          title="Vector Stall">
          {' '}
          Vector Stall{' '}
        </a>,
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="http://www.freepik.com"
          title="Freepik">
          {' '}
          Freepik{' '}
        </a>, from{' '}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.flaticon.com/"
          title="Flaticon">
          www.flaticon.com{' '}
        </a>
        licensed by{' '}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
          rel="noreferrer noopener">
          CC 3.0 BY
        </a>
      </div>
    ),
  },
  {
    key: 5,
    credit: (
      <div>
        Part of games content found in
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="http://aboutgamedev.weebly.com/greek-games-2014.html"
          title="Games 2014">
          {' '}
          Greek Games 2014
        </a>,
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="http://alt-tab.gr/greek-games-database/"
          title="alt-tab">
          {' '}
          alt-tab database
        </a>,
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://allianceive.wordpress.com/%CE%BF%CE%BC%CE%AC%CE%B4%CE%B5%CF%82-%CE%B1%CE%BD%CE%AC%CF%80%CF%84%CF%85%CE%BE%CE%B7%CF%82-video-games/"
          title="GamesInGreece">
          {' '}
          Games in Greece 3.0
        </a>
      </div>
    ),
  },
  {
    key: 6,
    credit: (
      <div>
        Part of media content found in
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.facebook.com/groups/582847431837484/files/"
          title="Games 2014">
          {' '}
          Greek Game Devs Files
        </a>
      </div>
    ),
  },
  {
    key: 4,
    credit: (
      <div>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/davezuko/react-redux-starter-kit"
          title="Starter Kit">
          {' '}
          {"Project's boilerplate"}{' '}
        </a>
        from{' '}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/davezuko"
          title="Github">
          David Zukowski{' '}
        </a>
        licensed under the MIT License
      </div>
    ),
  },
];

export default credits;
