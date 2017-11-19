module.exports = {
queryCompanies:
'SELECT ' +
'vgcom.name,' +
'vgcom.image,' +
'vgcom.founded AS date,' +
'vgcom.status,' +
'vgcom.location,' +
'vgcom.description,' +
'jsonb_build_array(array_agg(DISTINCT  jsonb_build_object(' +
'\'link\', vgcomlinks.link,' +
'\'type\', vgcomlinks.type' +
')),\',\')AS links,' +
'jsonb_build_array( array_agg (DISTINCT jsonb_build_object(' +
'\'status\', vg.status,' +
'\'name\', vg.name,' +
'\'id\', vg.id' +
')),\',\')AS games,' +
'jsonb_build_array( array_agg (DISTINCT jsonb_build_object(' +
'\'url\',vglinks.link,' +
'\'type\',vglinks.type,' +
'\'id\', vglinks.gameid' +
')),\',\')AS gamelinks ' +
'FROM vgcom ' +
'LEFT JOIN vg on vgcom.name = vg.developer ' +
'LEFT JOIN vgcomlinks on vgcomlinks.company = vgcom.name ' +
'LEFT JOIN vglinks on vglinks.gameid = vg.id ' +
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
'\'link\', vglinks.link,' +
'\'type\', vglinks.type,' +
'\'category\', vglinks.category' +
')),\',\')AS links,' +
'jsonb_build_array(array_agg (DISTINCT jsonb_build_object(' +
'\'status\', vgcom.status,' +
'\'name\', vgcom.name' +
')),\',\')AS companies,' +
'jsonb_build_array( array_agg (DISTINCT jsonb_build_object(' +
'\'url\',vgcomlinks.link,' +
'\'id\', vgcomlinks.company,' +
'\'type\', vgcomlinks.type' +
')),\',\')AS comlinks ' +
'FROM vg ' +
'LEFT JOIN vgcom on vgcom.name = vg.developer OR vgcom.name = vg.publisher ' +
'LEFT JOIN vglinks on vglinks.gameid = vg.id ' +
'LEFT JOIN vgcomlinks on vgcomlinks.company = vgcom.name ' +
'GROUP BY vg.id ' +
'ORDER BY vg.name ASC',

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
'milestones.description ' +
'FROM milestones ' +
'ORDER BY milestones.date DESC',

}
