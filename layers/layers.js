var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Partidos_2 = new ol.format.GeoJSON();
var features_Partidos_2 = format_Partidos_2.readFeatures(json_Partidos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Partidos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Partidos_2.addFeatures(features_Partidos_2);
var lyr_Partidos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Partidos_2, 
                style: style_Partidos_2,
                interactive: true,
                title: '<img src="styles/legend/Partidos_2.png" /> Partidos'
            });
var format_PEAINDEC_3 = new ol.format.GeoJSON();
var features_PEAINDEC_3 = format_PEAINDEC_3.readFeatures(json_PEAINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_3.addFeatures(features_PEAINDEC_3);
var lyr_PEAINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_3, 
                style: style_PEAINDEC_3,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_3_0.png" /> 3.500 - 50.000<br />\
    <img src="styles/legend/PEAINDEC_3_1.png" /> 50.001 - 200.000<br />\
    <img src="styles/legend/PEAINDEC_3_2.png" /> 200.001 - 450.000<br />\
    <img src="styles/legend/PEAINDEC_3_3.png" /> 450.001 o más<br />'
        });
var format_PoblacinpordeptoINDEC_4 = new ol.format.GeoJSON();
var features_PoblacinpordeptoINDEC_4 = format_PoblacinpordeptoINDEC_4.readFeatures(json_PoblacinpordeptoINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordeptoINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordeptoINDEC_4.addFeatures(features_PoblacinpordeptoINDEC_4);
var lyr_PoblacinpordeptoINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordeptoINDEC_4, 
                style: style_PoblacinpordeptoINDEC_4,
                interactive: true,
    title: 'Población por depto (INDEC)<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_4_0.png" /> 4.000 - 145.000<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_4_1.png" /> 145.001 - 375.000<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_4_2.png" /> 375.001 - 650.000<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_4_3.png" /> 655.001 - 1.776.000<br />'
        });
var format_ViviendasruralesINDEC_5 = new ol.format.GeoJSON();
var features_ViviendasruralesINDEC_5 = format_ViviendasruralesINDEC_5.readFeatures(json_ViviendasruralesINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasruralesINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasruralesINDEC_5.addFeatures(features_ViviendasruralesINDEC_5);
var lyr_ViviendasruralesINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasruralesINDEC_5, 
                style: style_ViviendasruralesINDEC_5,
                interactive: true,
    title: 'Viviendas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_0.png" /> 0<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_1.png" /> 1 - 1.500<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_2.png" /> 1.501 - 3.000<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_3.png" /> 3.001 - 4.500<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_4.png" /> 4.501 o más<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 1 - 7.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 7.001 - 15.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_3.png" /> 15.001 - 32.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_4.png" /> 32.001 o más<br />'
        });
var format_CabezasdeovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_7 = format_CabezasdeovinosMAGyP_7.readFeatures(json_CabezasdeovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_7.addFeatures(features_CabezasdeovinosMAGyP_7);
var lyr_CabezasdeovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_7, 
                style: style_CabezasdeovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_1.png" /> 1 - 10.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_2.png" /> 10.001 - 25.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_3.png" /> 25.001 o más<br />'
        });
var format_CabezasdecaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_8 = format_CabezasdecaprinosMAGyP_8.readFeatures(json_CabezasdecaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_8.addFeatures(features_CabezasdecaprinosMAGyP_8);
var lyr_CabezasdecaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_8, 
                style: style_CabezasdecaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_0.png" /> 0 - 1<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_1.png" /> 1 - 500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_2.png" /> 501 - 2.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_3.png" /> 2.501 - 7.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_4.png" /> 7.501 - 15.250<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 1 - 75.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 75.001 - 180.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_3.png" /> 180.001 - 315.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_4.png" /> 315.001 o más<br />'
        });
var format_HectreasdehortalizasINDEC_10 = new ol.format.GeoJSON();
var features_HectreasdehortalizasINDEC_10 = format_HectreasdehortalizasINDEC_10.readFeatures(json_HectreasdehortalizasINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdehortalizasINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdehortalizasINDEC_10.addFeatures(features_HectreasdehortalizasINDEC_10);
var lyr_HectreasdehortalizasINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdehortalizasINDEC_10, 
                style: style_HectreasdehortalizasINDEC_10,
                interactive: true,
    title: 'Hectáreas de hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_1.png" /> 1 - 180<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_2.png" /> 181 - 2.500<br />'
        });
var format_HectreasdeduraznerosINDEC_11 = new ol.format.GeoJSON();
var features_HectreasdeduraznerosINDEC_11 = format_HectreasdeduraznerosINDEC_11.readFeatures(json_HectreasdeduraznerosINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdeduraznerosINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdeduraznerosINDEC_11.addFeatures(features_HectreasdeduraznerosINDEC_11);
var lyr_HectreasdeduraznerosINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdeduraznerosINDEC_11, 
                style: style_HectreasdeduraznerosINDEC_11,
                interactive: true,
    title: 'Hectáreas de durazneros (INDEC)<br />\
    <img src="styles/legend/HectreasdeduraznerosINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdeduraznerosINDEC_11_1.png" /> 1 - 12<br />\
    <img src="styles/legend/HectreasdeduraznerosINDEC_11_2.png" /> 12 - 35<br />\
    <img src="styles/legend/HectreasdeduraznerosINDEC_11_3.png" /> 35 - 228<br />\
    <img src="styles/legend/HectreasdeduraznerosINDEC_11_4.png" /> 229 o más<br />'
        });
var format_HectreasdelegumbresINDEC_12 = new ol.format.GeoJSON();
var features_HectreasdelegumbresINDEC_12 = format_HectreasdelegumbresINDEC_12.readFeatures(json_HectreasdelegumbresINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdelegumbresINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdelegumbresINDEC_12.addFeatures(features_HectreasdelegumbresINDEC_12);
var lyr_HectreasdelegumbresINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdelegumbresINDEC_12, 
                style: style_HectreasdelegumbresINDEC_12,
                interactive: true,
    title: 'Hectáreas de legumbres (INDEC)<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_12_1.png" /> 1 - 55<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_12_2.png" /> 56 - 265<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_12_3.png" /> 266 o más<br />'
        });
var format_HectreasdearndanosINDEC_13 = new ol.format.GeoJSON();
var features_HectreasdearndanosINDEC_13 = format_HectreasdearndanosINDEC_13.readFeatures(json_HectreasdearndanosINDEC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdearndanosINDEC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdearndanosINDEC_13.addFeatures(features_HectreasdearndanosINDEC_13);
var lyr_HectreasdearndanosINDEC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdearndanosINDEC_13, 
                style: style_HectreasdearndanosINDEC_13,
                interactive: true,
    title: 'Hectáreas de arándanos (INDEC)<br />\
    <img src="styles/legend/HectreasdearndanosINDEC_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdearndanosINDEC_13_1.png" /> 1 - 11<br />\
    <img src="styles/legend/HectreasdearndanosINDEC_13_2.png" /> 12 - 48<br />\
    <img src="styles/legend/HectreasdearndanosINDEC_13_3.png" /> 49 o más<br />'
        });
var format_HectreasdemazMAGyP_14 = new ol.format.GeoJSON();
var features_HectreasdemazMAGyP_14 = format_HectreasdemazMAGyP_14.readFeatures(json_HectreasdemazMAGyP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdemazMAGyP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdemazMAGyP_14.addFeatures(features_HectreasdemazMAGyP_14);
var lyr_HectreasdemazMAGyP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdemazMAGyP_14, 
                style: style_HectreasdemazMAGyP_14,
                interactive: true,
    title: 'Hectáreas de maíz (MAGyP)<br />\
    <img src="styles/legend/HectreasdemazMAGyP_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdemazMAGyP_14_1.png" /> 1 - 15.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_14_2.png" /> 15.001 - 20.000<br />'
        });
var format_HectreasdetrigoMAGyP_15 = new ol.format.GeoJSON();
var features_HectreasdetrigoMAGyP_15 = format_HectreasdetrigoMAGyP_15.readFeatures(json_HectreasdetrigoMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdetrigoMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdetrigoMAGyP_15.addFeatures(features_HectreasdetrigoMAGyP_15);
var lyr_HectreasdetrigoMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdetrigoMAGyP_15, 
                style: style_HectreasdetrigoMAGyP_15,
                interactive: true,
    title: 'Hectáreas de trigo (MAGyP)<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_15_1.png" /> 1 - 7.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_15_2.png" /> 7.001 - 20.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_15_3.png" /> 20.001 o más<br />'
        });
var format_HectreasdegirasolMAGyP_16 = new ol.format.GeoJSON();
var features_HectreasdegirasolMAGyP_16 = format_HectreasdegirasolMAGyP_16.readFeatures(json_HectreasdegirasolMAGyP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdegirasolMAGyP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdegirasolMAGyP_16.addFeatures(features_HectreasdegirasolMAGyP_16);
var lyr_HectreasdegirasolMAGyP_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdegirasolMAGyP_16, 
                style: style_HectreasdegirasolMAGyP_16,
                interactive: true,
    title: 'Hectáreas de girasol (MAGyP)<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_16_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_16_1.png" /> 1 - 1.500<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_16_2.png" /> 1.501 - 3.000<br />'
        });
var format_HectreasdesojaMAGyP_17 = new ol.format.GeoJSON();
var features_HectreasdesojaMAGyP_17 = format_HectreasdesojaMAGyP_17.readFeatures(json_HectreasdesojaMAGyP_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdesojaMAGyP_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdesojaMAGyP_17.addFeatures(features_HectreasdesojaMAGyP_17);
var lyr_HectreasdesojaMAGyP_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdesojaMAGyP_17, 
                style: style_HectreasdesojaMAGyP_17,
                interactive: true,
    title: 'Hectáreas de soja (MAGyP)<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_17_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_17_1.png" /> 1 - 12.500<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_17_2.png" /> 12.501 - 25.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_17_3.png" /> 25.001 - 55.000<br />'
        });
var format_Capacitaciones2019tcnicas_18 = new ol.format.GeoJSON();
var features_Capacitaciones2019tcnicas_18 = format_Capacitaciones2019tcnicas_18.readFeatures(json_Capacitaciones2019tcnicas_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019tcnicas_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019tcnicas_18.addFeatures(features_Capacitaciones2019tcnicas_18);
var lyr_Capacitaciones2019tcnicas_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019tcnicas_18, 
                style: style_Capacitaciones2019tcnicas_18,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2019tcnicas_18.png" /> Capacitaciones 2019 (técnicas)'
            });
var format_Localidades_19 = new ol.format.GeoJSON();
var features_Localidades_19 = format_Localidades_19.readFeatures(json_Localidades_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_19.addFeatures(features_Localidades_19);
var lyr_Localidades_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_19, 
                style: style_Localidades_19,
                interactive: true,
                title: '<img src="styles/legend/Localidades_19.png" /> Localidades'
            });
var format_BER_20 = new ol.format.GeoJSON();
var features_BER_20 = format_BER_20.readFeatures(json_BER_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_20.addFeatures(features_BER_20);
var lyr_BER_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_20, 
                style: style_BER_20,
                interactive: true,
                title: '<img src="styles/legend/BER_20.png" /> BER'
            });
var format_BER_21 = new ol.format.GeoJSON();
var features_BER_21 = format_BER_21.readFeatures(json_BER_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_21.addFeatures(features_BER_21);
var lyr_BER_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_21, 
                style: style_BER_21,
                interactive: true,
                title: '<img src="styles/legend/BER_21.png" /> BER'
            });
var format_CAIR_22 = new ol.format.GeoJSON();
var features_CAIR_22 = format_CAIR_22.readFeatures(json_CAIR_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAIR_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAIR_22.addFeatures(features_CAIR_22);
var lyr_CAIR_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAIR_22, 
                style: style_CAIR_22,
                interactive: true,
                title: '<img src="styles/legend/CAIR_22.png" /> CAIR'
            });
var format_DelegacinLaPlata_23 = new ol.format.GeoJSON();
var features_DelegacinLaPlata_23 = format_DelegacinLaPlata_23.readFeatures(json_DelegacinLaPlata_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinLaPlata_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinLaPlata_23.addFeatures(features_DelegacinLaPlata_23);
var lyr_DelegacinLaPlata_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinLaPlata_23, 
                style: style_DelegacinLaPlata_23,
                interactive: true,
                title: '<img src="styles/legend/DelegacinLaPlata_23.png" /> Delegación La Plata'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Partidos_2.setVisible(true);lyr_PEAINDEC_3.setVisible(true);lyr_PoblacinpordeptoINDEC_4.setVisible(true);lyr_ViviendasruralesINDEC_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasdeovinosMAGyP_7.setVisible(true);lyr_CabezasdecaprinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreasdehortalizasINDEC_10.setVisible(true);lyr_HectreasdeduraznerosINDEC_11.setVisible(true);lyr_HectreasdelegumbresINDEC_12.setVisible(true);lyr_HectreasdearndanosINDEC_13.setVisible(true);lyr_HectreasdemazMAGyP_14.setVisible(true);lyr_HectreasdetrigoMAGyP_15.setVisible(true);lyr_HectreasdegirasolMAGyP_16.setVisible(true);lyr_HectreasdesojaMAGyP_17.setVisible(true);lyr_Capacitaciones2019tcnicas_18.setVisible(true);lyr_Localidades_19.setVisible(true);lyr_BER_20.setVisible(true);lyr_BER_21.setVisible(true);lyr_CAIR_22.setVisible(true);lyr_DelegacinLaPlata_23.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Partidos_2,lyr_PEAINDEC_3,lyr_PoblacinpordeptoINDEC_4,lyr_ViviendasruralesINDEC_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasdeovinosMAGyP_7,lyr_CabezasdecaprinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreasdehortalizasINDEC_10,lyr_HectreasdeduraznerosINDEC_11,lyr_HectreasdelegumbresINDEC_12,lyr_HectreasdearndanosINDEC_13,lyr_HectreasdemazMAGyP_14,lyr_HectreasdetrigoMAGyP_15,lyr_HectreasdegirasolMAGyP_16,lyr_HectreasdesojaMAGyP_17,lyr_Capacitaciones2019tcnicas_18,lyr_Localidades_19,lyr_BER_20,lyr_BER_21,lyr_CAIR_22,lyr_DelegacinLaPlata_23];
lyr_Partidos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PEAINDEC_3.set('fieldAliases', {'PEA': 'PEA', });
lyr_PoblacinpordeptoINDEC_4.set('fieldAliases', {'poblacion': 'poblacion', });
lyr_ViviendasruralesINDEC_5.set('fieldAliases', {'Viv-Rur': 'Viv-Rur', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'Porcinos': 'Porcinos', });
lyr_CabezasdeovinosMAGyP_7.set('fieldAliases', {'Ovinos': 'Ovinos', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldAliases', {'Caprinos': 'Caprinos', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'Bovinos': 'Bovinos', });
lyr_HectreasdehortalizasINDEC_10.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasdeduraznerosINDEC_11.set('fieldAliases', {'Durazno': 'Durazno', });
lyr_HectreasdelegumbresINDEC_12.set('fieldAliases', {'Legumbres': 'Legumbres', });
lyr_HectreasdearndanosINDEC_13.set('fieldAliases', {'Arandano': 'Arandano', });
lyr_HectreasdemazMAGyP_14.set('fieldAliases', {'Maiz': 'Maiz', });
lyr_HectreasdetrigoMAGyP_15.set('fieldAliases', {'Trigo': 'Trigo', });
lyr_HectreasdegirasolMAGyP_16.set('fieldAliases', {'Girasol': 'Girasol', });
lyr_HectreasdesojaMAGyP_17.set('fieldAliases', {'Soja': 'Soja', });
lyr_Capacitaciones2019tcnicas_18.set('fieldAliases', {'localidad': 'localidad', 'tipo capa.': 'tipo capa.', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_Localidades_19.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_BER_20.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_BER_21.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_CAIR_22.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', });
lyr_DelegacinLaPlata_23.set('fieldAliases', {'Delegacion': 'Delegacion', 'Direccion': 'Direccion', 'prest 2016': 'prest 2016', 'prest 2017': 'prest 2017', 'prest 2018': 'prest 2018', 'prest 2019': 'prest 2019', 'prest 2020': 'prest 2020', });
lyr_Partidos_2.set('fieldImages', {'Depto': 'TextEdit', });
lyr_PEAINDEC_3.set('fieldImages', {'PEA': 'TextEdit', });
lyr_PoblacinpordeptoINDEC_4.set('fieldImages', {'poblacion': 'TextEdit', });
lyr_ViviendasruralesINDEC_5.set('fieldImages', {'Viv-Rur': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'Porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_7.set('fieldImages', {'Ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldImages', {'Caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'Bovinos': 'TextEdit', });
lyr_HectreasdehortalizasINDEC_10.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasdeduraznerosINDEC_11.set('fieldImages', {'Durazno': 'TextEdit', });
lyr_HectreasdelegumbresINDEC_12.set('fieldImages', {'Legumbres': 'TextEdit', });
lyr_HectreasdearndanosINDEC_13.set('fieldImages', {'Arandano': 'TextEdit', });
lyr_HectreasdemazMAGyP_14.set('fieldImages', {'Maiz': 'TextEdit', });
lyr_HectreasdetrigoMAGyP_15.set('fieldImages', {'Trigo': 'TextEdit', });
lyr_HectreasdegirasolMAGyP_16.set('fieldImages', {'Girasol': 'TextEdit', });
lyr_HectreasdesojaMAGyP_17.set('fieldImages', {'Soja': 'TextEdit', });
lyr_Capacitaciones2019tcnicas_18.set('fieldImages', {'localidad': 'TextEdit', 'tipo capa.': 'TextEdit', 'tematica': 'TextEdit', 'fechas': 'TextEdit', 'asistentes': 'Range', });
lyr_Localidades_19.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_BER_20.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_BER_21.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_CAIR_22.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_DelegacinLaPlata_23.set('fieldImages', {'Delegacion': 'TextEdit', 'Direccion': '', 'prest 2016': '', 'prest 2017': '', 'prest 2018': '', 'prest 2019': '', 'prest 2020': '', });
lyr_Partidos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PEAINDEC_3.set('fieldLabels', {'PEA': 'inline label', });
lyr_PoblacinpordeptoINDEC_4.set('fieldLabels', {'poblacion': 'inline label', });
lyr_ViviendasruralesINDEC_5.set('fieldLabels', {'Viv-Rur': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'Porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_7.set('fieldLabels', {'Ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldLabels', {'Caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'Bovinos': 'inline label', });
lyr_HectreasdehortalizasINDEC_10.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasdeduraznerosINDEC_11.set('fieldLabels', {'Durazno': 'inline label', });
lyr_HectreasdelegumbresINDEC_12.set('fieldLabels', {'Legumbres': 'inline label', });
lyr_HectreasdearndanosINDEC_13.set('fieldLabels', {'Arandano': 'inline label', });
lyr_HectreasdemazMAGyP_14.set('fieldLabels', {'Maiz': 'inline label', });
lyr_HectreasdetrigoMAGyP_15.set('fieldLabels', {'Trigo': 'inline label', });
lyr_HectreasdegirasolMAGyP_16.set('fieldLabels', {'Girasol': 'header label', });
lyr_HectreasdesojaMAGyP_17.set('fieldLabels', {'Soja': 'inline label', });
lyr_Capacitaciones2019tcnicas_18.set('fieldLabels', {'localidad': 'inline label', 'tipo capa.': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_Localidades_19.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_BER_20.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_BER_21.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_CAIR_22.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', });
lyr_DelegacinLaPlata_23.set('fieldLabels', {'Delegacion': 'inline label', 'Direccion': 'inline label', 'prest 2016': 'inline label', 'prest 2017': 'inline label', 'prest 2018': 'inline label', 'prest 2019': 'inline label', 'prest 2020': 'inline label', });
lyr_DelegacinLaPlata_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});