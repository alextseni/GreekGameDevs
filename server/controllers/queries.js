module.exports = {
  videogamesCompanies:
    'SELECT ' +
    'vgcom.name,' +
    'vgcom.image,' +
    'vgcom.founded AS date,' +
    'vgcom.status,' +
    'vgcom.location,' +
    'vgcom.description,' +
    'jsonb_build_array(array_agg(DISTINCT  jsonb_build_object(' +
    "'link', vgcomlinks.link," +
    "'type', vgcomlinks.type" +
    ")),',')AS links," +
    'jsonb_build_array( array_agg (DISTINCT jsonb_build_object(' +
    "'status', vg.status," +
    "'name', vg.name," +
    "'id', vg.id" +
    ")),',')AS content," +
    'jsonb_build_array( array_agg (DISTINCT jsonb_build_object(' +
    "'url',vglinks.link," +
    "'type',vglinks.type," +
    "'id', vglinks.gameid" +
    ")),',')AS contentlinks " +
    'FROM vgcom ' +
    'JOIN vg on vgcom.name = vg.developer ' +
    'LEFT JOIN vgcomlinks on vgcomlinks.company = vgcom.name AND vgcomlinks.active = true ' +
    'LEFT JOIN vglinks on vglinks.gameid = vg.id AND vglinks.active = true ' +
    'GROUP BY vgcom.name ' +
    'ORDER BY vgcom.name ASC',

  assetsCompanies:
    'SELECT ' +
    'vgcom.name,' +
    'vgcom.image,' +
    'vgcom.founded AS date,' +
    'vgcom.status,' +
    'vgcom.location,' +
    'vgcom.description,' +
    'jsonb_build_array(array_agg(DISTINCT  jsonb_build_object(' +
    "'link', vgcomlinks.link," +
    "'type', vgcomlinks.type" +
    ")),',')AS links," +
    'jsonb_build_array( array_agg (DISTINCT jsonb_build_object(' +
    "'status', assets.status," +
    "'name', assets.name," +
    "'id', assets.id" +
    ")),',')AS content," +
    'jsonb_build_array( array_agg (DISTINCT jsonb_build_object(' +
    "'url',assetlinks.link," +
    "'type',assetlinks.type," +
    "'id', assetlinks.assetid" +
    ")),',')AS contentlinks " +
    'FROM vgcom ' +
    'JOIN assets on vgcom.name = assets.company ' +
    'LEFT JOIN vgcomlinks on vgcomlinks.company = vgcom.name AND vgcomlinks.active = true ' +
    'LEFT JOIN assetlinks on assetlinks.assetid = assets.id AND assetlinks.active = true ' +
    'GROUP BY vgcom.name ' +
    'ORDER BY vgcom.name ASC',

    queryNetworks:
      'SELECT ' +
      'vgcom.name,' +
      'vgcom.image,' +
      'vgcom.founded AS date,' +
      'vgcom.status,' +
      'vgcom.location,' +
      'vgcom.description,' +
      'vgcom.tags,' +
      'jsonb_build_array(array_agg(DISTINCT  jsonb_build_object(' +
      "'link', vgcomlinks.link," +
      "'type', vgcomlinks.type" +
      ")),',')AS links " +
      "FROM vgcom " +
      'JOIN vgcomlinks on vgcomlinks.company = vgcom.name AND vgcomlinks.active = true ' +
      "WHERE vgcom.type = 'Network' " +
      'GROUP BY vgcom.name ' +
      'ORDER BY vgcom.name ASC',

      queryMedia:
        'SELECT ' +
        'vgcom.name,' +
        'vgcom.image,' +
        'vgcom.founded AS date,' +
        'vgcom.status,' +
        'vgcom.location,' +
        'vgcom.description,' +
        'vgcom.tags,' +
        'jsonb_build_array(array_agg(DISTINCT  jsonb_build_object(' +
        "'link', vgcomlinks.link," +
        "'type', vgcomlinks.type" +
        ")),',')AS links " +
        "FROM vgcom " +
        'JOIN vgcomlinks on vgcomlinks.company = vgcom.name AND vgcomlinks.active = true ' +
        "WHERE vgcom.type = 'Media' " +
        'GROUP BY vgcom.name ' +
        'ORDER BY vgcom.name ASC',

  queryGames:
    'SELECT ' +
    'vg.name,' +
    'vg.image,' +
    'vg.released AS date,' +
    'vg.status,' +
    'vg.description,' +
    'vg.id,' +
    'vg.genre,' +
    'vg.modes,' +
    'vg.style,' +
    'jsonb_build_array(array_agg(DISTINCT  jsonb_build_object(' +
    "'link', vglinks.link," +
    "'type', vglinks.type," +
    "'category', vglinks.category" +
    ")),',')AS links," +
    'jsonb_build_array(array_agg (DISTINCT jsonb_build_object(' +
    "'status', vgcom.status," +
    "'name', vgcom.name" +
    ")),',')AS companies," +
    'jsonb_build_array( array_agg (DISTINCT jsonb_build_object(' +
    "'url',vgcomlinks.link," +
    "'id', vgcomlinks.company," +
    "'type', vgcomlinks.type" +
    ")),',')AS comlinks " +
    'FROM vg ' +
    'LEFT JOIN vgcom on vgcom.name = vg.developer OR vgcom.name = vg.publisher ' +
    'LEFT JOIN vglinks on vglinks.gameid = vg.id AND vglinks.active = true ' +
    'LEFT JOIN vgcomlinks on vgcomlinks.company = vgcom.name AND vgcomlinks.active = true ' +
    'GROUP BY vg.id ' +
    'ORDER BY vg.name ASC',

  queryAssets:
    'SELECT ' +
    'assets.name,' +
    'assets.image,' +
    'assets.released AS date,' +
    'assets.status,' +
    'assets.description,' +
    'assets.category,' +
    'assets.price,' +
    'assets.tags,' +
    'assets.id,' +
    'assets.category,' +
    'jsonb_build_array(array_agg(DISTINCT  jsonb_build_object(' +
    "'link', assetlinks.link," +
    "'type', assetlinks.type" +
    ")),',')AS links," +
    'jsonb_build_array(array_agg (DISTINCT jsonb_build_object(' +
    "'status', vgcom.status," +
    "'name', vgcom.name" +
    ")),',')AS companies," +
    'jsonb_build_array( array_agg (DISTINCT jsonb_build_object(' +
    "'url',vgcomlinks.link," +
    "'id', vgcomlinks.company," +
    "'type', vgcomlinks.type" +
    ")),',')AS comlinks " +
    'FROM assets ' +
    'LEFT JOIN vgcom on vgcom.name = assets.company ' +
    'LEFT JOIN assetlinks on assetlinks.assetid = assets.id AND assetlinks.active = true ' +
    'LEFT JOIN vgcomlinks on vgcomlinks.company = vgcom.name AND vgcomlinks.active = true ' +
    'GROUP BY assets.id ' +
    'ORDER BY assets.name ASC',

  queryCalendar:
    'SELECT ' +
    'calendar.name AS title,' +
    'calendar.type,' +
    'calendar.date AS start,' +
    'calendar.end,' +
    'calendar.location,' +
    'calendar.description AS descr ' +
    'FROM calendar ',

  queryHistory:
    'SELECT ' +
    'milestones.date,' +
    'milestones.type,' +
    'milestones.description ' +
    'FROM milestones ' +
    'ORDER BY milestones.date DESC',
};
