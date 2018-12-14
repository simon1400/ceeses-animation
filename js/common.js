var draw = SVG.get('svg'),
    duration = '4200',
    dasharray = '2000';

var path1 = draw.path('M1366,171.87H895.13C778,54.71,588,54.71,470.87,171.87s-117.16,307.1,0,424.26,307.1,117.16,424.26,0H1366').attr({fill: 'none'}).stroke({color: '#00a1df', linecap: 'round', linejoin: 'round', width: '4px'}),
    path2 = draw.path('M1366,573.8H872.8C768,678.63,598,678.63,493.2,573.8S388.37,299,493.2,194.2,768,89.37,872.8,194.2H1366').attr({fill: 'none'}).stroke({color: '#00a1df', linecap: 'round', linejoin: 'round', width: '4px'}),
    path3 = draw.path('M1366,529.14H828.14C748,609.3,618,609.3,537.86,529.14s-80.16-210.12,0-290.28,210.12-80.16,290.28,0A204.35,204.35,0,0,1,887.6,368.21H541.8a142.08,142.08,0,0,1,241.68-84.69l22.33-22.33a173.68,173.68,0,0,0-295.76,138.6H824.2a142.08,142.08,0,0,1-241.68,84.69l-22.33,22.33A173.67,173.67,0,0,0,856,399.79H1366').attr({fill: 'none'}).stroke({color: '#00a1df', linecap: 'round', linejoin: 'round', width: '4px'}),
    path4 = draw.path('M1366,368.21H919.25a235.82,235.82,0,0,0-68.78-151.68C758,124,608,124,515.53,216.53S423,459,515.53,551.47s242.45,92.5,334.94,0H1366').attr({fill: 'none'}).stroke({color: '#00a1df', linecap: 'round', linejoin: 'round', width: '4px'}),

    path1_line = draw.path('M1366,171.87H895.13C778,54.71,588,54.71,470.87,171.87s-117.16,307.1,0,424.26,307.1,117.16,424.26,0H1366').attr({fill: 'none'}).stroke({color: '#80cff0', linecap: 'round', linejoin: 'round', width: '2px'}),
    path2_line = draw.path('M1366,573.8H872.8C768,678.63,598,678.63,493.2,573.8S388.37,299,493.2,194.2,768,89.37,872.8,194.2H1366').attr({fill: 'none'}).stroke({color: '#80cff0', linecap: 'round', linejoin: 'round', width: '2px'}),
    path3_line = draw.path('M1366,529.14H828.14C748,609.3,618,609.3,537.86,529.14s-80.16-210.12,0-290.28,210.12-80.16,290.28,0A204.35,204.35,0,0,1,887.6,368.21H541.8a142.08,142.08,0,0,1,241.68-84.69l22.33-22.33a173.68,173.68,0,0,0-295.76,138.6H824.2a142.08,142.08,0,0,1-241.68,84.69l-22.33,22.33A173.67,173.67,0,0,0,856,399.79H1366').attr({fill: 'none'}).stroke({color: '#80cff0', linecap: 'round', linejoin: 'round', width: '2px'}),
    path4_line = draw.path('M1366,368.21H919.25a235.82,235.82,0,0,0-68.78-151.68C758,124,608,124,515.53,216.53S423,459,515.53,551.47s242.45,92.5,334.94,0H1366').attr({fill: 'none'}).stroke({color: '#80cff0', linecap: 'round', linejoin: 'round', width: '2px'});

    // path1_blur = draw.path('M1366,171.87H895.13C778,54.71,588,54.71,470.87,171.87s-117.16,307.1,0,424.26,307.1,117.16,424.26,0H1366').attr({fill: 'none'}).stroke({color: '#80cff0', linecap: 'round', linejoin: 'round', width: '2px'}),
    // path2_blur = draw.path('M1366,573.8H872.8C768,678.63,598,678.63,493.2,573.8S388.37,299,493.2,194.2,768,89.37,872.8,194.2H1366').attr({fill: 'none'}).stroke({color: '#80cff0', linecap: 'round', linejoin: 'round', width: '2px'}),
    // path3_blur = draw.path('M1366,529.14H828.14C748,609.3,618,609.3,537.86,529.14s-80.16-210.12,0-290.28,210.12-80.16,290.28,0A204.35,204.35,0,0,1,887.6,368.21H541.8a142.08,142.08,0,0,1,241.68-84.69l22.33-22.33a173.68,173.68,0,0,0-295.76,138.6H824.2a142.08,142.08,0,0,1-241.68,84.69l-22.33,22.33A173.67,173.67,0,0,0,856,399.79H1366').attr({fill: 'none'}).stroke({color: '#80cff0', linecap: 'round', linejoin: 'round', width: '2px'}),
    // path4_blur = draw.path('M1366,368.21H919.25a235.82,235.82,0,0,0-68.78-151.68C758,124,608,124,515.53,216.53S423,459,515.53,551.47s242.45,92.5,334.94,0H1366').attr({fill: 'none'}).stroke({color: '#80cff0', linecap: 'round', linejoin: 'round', width: '2px'});

function animationPath(path, delay, rychlost) {
  path.stroke({dasharray: `0 ${path.length()}`, dashoffset: '0'})
      .animate({ duration: duration, delay: delay }).stroke({dasharray: `${dasharray} ${path.length()}`})
      .animate(rychlost).stroke({dashoffset: `-${path.length()}`})
      .after(function() {
        animationPath(path, '0s', rychlost)
      })
}


animationPath(path1, '0s', '5000')
animationPath(path2, '0.5s', '4000')
animationPath(path3, '1s', '11000')
animationPath(path4, '2s', '4000')

animationPath(path1_line, '0s', '5000')
animationPath(path2_line, '0.5s', '4000')
animationPath(path3_line, '1s', '11000')
animationPath(path4_line, '2s', '4000')
