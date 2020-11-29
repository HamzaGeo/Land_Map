var wms_layers = [];

var format_CLASS_GABES2020_0 = new ol.format.GeoJSON();
var features_CLASS_GABES2020_0 = format_CLASS_GABES2020_0.readFeatures(json_CLASS_GABES2020_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLASS_GABES2020_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASS_GABES2020_0.addFeatures(features_CLASS_GABES2020_0);
var lyr_CLASS_GABES2020_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CLASS_GABES2020_0, 
                style: style_CLASS_GABES2020_0,
                interactive: true,
                title: '<img src="styles/legend/CLASS_GABES2020_0.png" /> CLASS_GABES2020'
            });
var format_CLASS_GABES2020_1 = new ol.format.GeoJSON();
var features_CLASS_GABES2020_1 = format_CLASS_GABES2020_1.readFeatures(json_CLASS_GABES2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLASS_GABES2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASS_GABES2020_1.addFeatures(features_CLASS_GABES2020_1);
var lyr_CLASS_GABES2020_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CLASS_GABES2020_1, 
                style: style_CLASS_GABES2020_1,
                interactive: true,
    title: 'CLASS_GABES2020<br />\
    <img src="styles/legend/CLASS_GABES2020_1_0.png" /> 1<br />\
    <img src="styles/legend/CLASS_GABES2020_1_1.png" /> 2<br />\
    <img src="styles/legend/CLASS_GABES2020_1_2.png" /> 3<br />\
    <img src="styles/legend/CLASS_GABES2020_1_3.png" /> 4<br />\
    <img src="styles/legend/CLASS_GABES2020_1_4.png" /> 5<br />\
    <img src="styles/legend/CLASS_GABES2020_1_5.png" /> 6<br />\
    <img src="styles/legend/CLASS_GABES2020_1_6.png" /> 7<br />\
    <img src="styles/legend/CLASS_GABES2020_1_7.png" /> <br />'
        });

lyr_CLASS_GABES2020_0.setVisible(true);lyr_CLASS_GABES2020_1.setVisible(true);
var layersList = [lyr_CLASS_GABES2020_0,lyr_CLASS_GABES2020_1];
lyr_CLASS_GABES2020_0.set('fieldAliases', {'Class_Name': 'Class_Name', 'Class_Id': 'Class_Id', 'Parts': 'Parts', 'Length': 'Length', 'Area': 'Area', });
lyr_CLASS_GABES2020_1.set('fieldAliases', {'Class_Name': 'Class_Name', 'Class_Id': 'Class_Id', 'Parts': 'Parts', 'Length': 'Length', 'Area': 'Area', });
lyr_CLASS_GABES2020_0.set('fieldImages', {'Class_Name': '', 'Class_Id': '', 'Parts': '', 'Length': '', 'Area': '', });
lyr_CLASS_GABES2020_1.set('fieldImages', {'Class_Name': 'TextEdit', 'Class_Id': 'Range', 'Parts': 'Range', 'Length': 'TextEdit', 'Area': 'TextEdit', });
lyr_CLASS_GABES2020_0.set('fieldLabels', {'Class_Name': 'no label', 'Class_Id': 'no label', 'Parts': 'no label', 'Length': 'no label', 'Area': 'no label', });
lyr_CLASS_GABES2020_1.set('fieldLabels', {'Class_Name': 'no label', 'Class_Id': 'no label', 'Parts': 'no label', 'Length': 'no label', 'Area': 'no label', });
lyr_CLASS_GABES2020_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});