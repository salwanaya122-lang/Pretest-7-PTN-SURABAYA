var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_AksesibilitasUniv_1 = new ol.format.GeoJSON();
var features_AksesibilitasUniv_1 = format_AksesibilitasUniv_1.readFeatures(json_AksesibilitasUniv_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AksesibilitasUniv_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AksesibilitasUniv_1.addFeatures(features_AksesibilitasUniv_1);
var lyr_AksesibilitasUniv_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AksesibilitasUniv_1, 
                style: style_AksesibilitasUniv_1,
                popuplayertitle: 'Aksesibilitas Univ',
                interactive: true,
    title: 'Aksesibilitas Univ<br />\
    <img src="styles/legend/AksesibilitasUniv_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/AksesibilitasUniv_1_1.png" /> 2,4km (30 menit)<br />' });
var format_PTNDISURABAYA_2 = new ol.format.GeoJSON();
var features_PTNDISURABAYA_2 = format_PTNDISURABAYA_2.readFeatures(json_PTNDISURABAYA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTNDISURABAYA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNDISURABAYA_2.addFeatures(features_PTNDISURABAYA_2);
var lyr_PTNDISURABAYA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNDISURABAYA_2, 
                style: style_PTNDISURABAYA_2,
                popuplayertitle: 'PTN DI SURABAYA',
                interactive: true,
    title: 'PTN DI SURABAYA<br />\
    <img src="styles/legend/PTNDISURABAYA_2_0.png" /> ITS<br />\
    <img src="styles/legend/PTNDISURABAYA_2_1.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNDISURABAYA_2_2.png" /> UNAIR<br />\
    <img src="styles/legend/PTNDISURABAYA_2_3.png" /> UNESA<br />\
    <img src="styles/legend/PTNDISURABAYA_2_4.png" /> UPNV Jatim<br />' });

lyr_Positron_0.setVisible(true);lyr_AksesibilitasUniv_1.setVisible(true);lyr_PTNDISURABAYA_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_AksesibilitasUniv_1,lyr_PTNDISURABAYA_2];
lyr_AksesibilitasUniv_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_PTNDISURABAYA_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Ranking QS': 'Ranking QS', 'Tahun berdiri': 'Tahun berdiri', 'Fakultas': 'Fakultas', 'Foto': 'Foto', });
lyr_AksesibilitasUniv_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_PTNDISURABAYA_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Ranking QS': 'TextEdit', 'Tahun berdiri': 'TextEdit', 'Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_AksesibilitasUniv_1.set('fieldLabels', {'fid': 'no label', 'Access': 'no label', });
lyr_PTNDISURABAYA_2.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', 'Ranking QS': 'no label', 'Tahun berdiri': 'no label', 'Fakultas': 'no label', 'Foto': 'no label', });
lyr_PTNDISURABAYA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});