const fse = require('fs/promises');

// const uaMoviesFromIMDB = [
//   'tt19465630',
//   'tt19465630',
//   'tt16315948',
//   'tt16315948',
//   'tt19783714',
//   'tt19783714',
//   'tt16984916',
//   'tt16984916',
//   'tt9455468',
//   'tt9455468',
//   'tt21833376',
//   'tt21833376',
//   'tt8269856',
//   'tt8269856',
//   'tt13537200',
//   'tt13537200',
//   'tt1675746',
//   'tt1675746',
//   'tt7876510',
//   'tt7876510',
//   'tt28480219',
//   'tt28480219',
//   'tt21627590',
//   'tt21627590',
//   'tt7691572',
//   'tt7691572',
//   'tt11835464',
//   'tt11835464',
//   'tt10262160',
//   'tt10262160',
//   'tt10749786',
//   'tt10749786',
//   'tt20414812',
//   'tt20414812',
//   'tt3781118',
//   'tt3781118',
//   'tt9319960',
//   'tt9319960',
//   'tt7787336',
//   'tt7787336',
//   'tt27662509',
//   'tt27662509',
//   'tt26225074',
//   'tt26225074',
//   'tt10121784',
//   'tt10121784',
//   'tt12115998',
//   'tt12115998',
//   'tt5238240',
//   'tt5238240',
//   'tt11632488',
//   'tt11632488',
//   'tt7782854',
//   'tt7782854',
//   'tt9049560',
//   'tt9049560',
//   'tt3037582',
//   'tt3037582',
//   'tt21482550',
//   'tt21482550',
//   'tt11386020',
//   'tt11386020',
//   'tt12166434',
//   'tt12166434',
//   'tt16532434',
//   'tt16532434',
//   'tt5591786',
//   'tt5591786',
//   'tt14504008',
//   'tt14504008',
//   'tt7795376',
//   'tt7795376',
//   'tt13873372',
//   'tt13873372',
//   'tt14028890',
//   'tt14028890',
//   'tt21622742',
//   'tt21622742',
//   'tt11680986',
//   'tt11680986',
//   'tt12427090',
//   'tt12427090',
//   'tt11650320',
//   'tt11650320',
//   'tt11771626',
//   'tt11771626',
//   'tt16088624',
//   'tt16088624',
//   'tt8009354',
//   'tt8009354',
//   'tt7895530',
//   'tt7895530',
//   'tt28291829',
//   'tt28291829',
//   'tt18688348',
//   'tt18688348',
//   'tt14577022',
//   'tt14577022',
//   'tt23214780',
//   'tt23214780',
//   'tt1472191',
//   'tt1472191',
//   'tt14225832',
//   'tt14225832',
//   'tt10272460',
//   'tt10272460',
//   'tt30221991',
//   'tt30221991',
//   'tt11402054',
//   'tt11402054',
//   'tt12739780',
//   'tt12739780',
//   'tt15331466',
//   'tt15331466',
//   'tt10276554',
//   'tt10276554',
//   'tt27373034',
//   'tt27373034',
//   'tt8956464',
//   'tt8956464',
//   'tt14734896',
//   'tt14734896',
//   'tt11647030',
//   'tt11647030',
//   'tt14988574',
//   'tt14988574',
//   'tt20356188',
//   'tt20356188',
//   'tt4957736',
//   'tt4957736',
//   'tt8662114',
//   'tt8662114',
//   'tt4458082',
//   'tt4458082',
//   'tt9670284',
//   'tt9670284',
//   'tt26914506',
//   'tt26914506',
//   'tt9177988',
//   'tt9177988',
//   'tt3675486',
//   'tt3675486',
//   'tt0184080',
//   'tt0184080',
//   'tt12719560',
//   'tt12719560',
//   'tt6908712',
//   'tt6908712',
//   'tt7736212',
//   'tt7736212',
//   'tt8371238',
//   'tt8371238',
//   'tt9109206',
//   'tt9109206',
//   'tt9842732',
//   'tt9842732',
//   'tt28967828',
//   'tt28967828',
//   'tt7133202',
//   'tt7133202',
//   'tt28231936',
//   'tt28231936',
//   'tt4465532',
//   'tt4465532',
//   'tt10244550',
//   'tt10244550',
//   'tt15100112',
//   'tt15100112',
//   'tt21478170',
//   'tt21478170',
//   'tt2796680',
//   'tt2796680',
//   'tt30213663',
//   'tt30213663',
//   'tt8789704',
//   'tt8789704',
//   'tt15321692',
//   'tt15321692',
//   'tt16539516',
//   'tt16539516',
//   'tt7478494',
//   'tt7478494',
//   'tt13446396',
//   'tt13446396',
//   'tt15414016',
//   'tt15414016',
//   'tt7753106',
//   'tt7753106',
//   'tt10735778',
//   'tt10735778',
//   'tt23648222',
//   'tt23648222',
//   'tt13248156',
//   'tt13248156',
//   'tt11287380',
//   'tt11287380',
//   'tt28232295',
//   'tt28232295',
//   'tt15043774',
//   'tt15043774',
//   'tt21260826',
//   'tt21260826',
//   'tt7425298',
//   'tt7425298',
//   'tt13341244',
//   'tt13341244',
//   'tt28083023',
//   'tt28083023',
//   'tt13364844',
//   'tt13364844',
//   'tt7906356',
//   'tt7906356',
//   'tt5335198',
//   'tt5335198',
//   'tt16480598',
//   'tt16480598',
//   'tt19797962',
//   'tt19797962',
//   'tt5017008',
//   'tt5017008',
//   'tt12335574',
//   'tt12335574',
//   'tt14108464',
//   'tt14108464',
//   'tt12421658',
//   'tt12421658',
//   'tt5796882',
//   'tt5796882',
//   'tt11704144',
//   'tt11704144',
//   'tt27682840',
//   'tt27682840',
//   'tt21159480',
//   'tt21159480',
//   'tt14569326',
//   'tt14569326',
//   'tt10330046',
//   'tt10330046',
//   'tt15876298',
//   'tt15876298',
//   'tt1330039',
//   'tt1330039',
//   'tt14665658',
//   'tt14665658',
//   'tt4729890',
//   'tt4729890',
//   'tt8706874',
//   'tt8706874',
//   'tt13731484',
//   'tt13731484',
//   'tt14680562',
//   'tt14680562',
//   'tt28020652',
//   'tt28020652',
//   'tt2401213',
//   'tt2401213',
//   'tt6024596',
//   'tt6024596',
//   'tt27656520',
//   'tt27656520',
//   'tt6761474',
//   'tt6761474',
//   'tt11854142',
//   'tt11854142',
//   'tt22090720',
//   'tt22090720',
//   'tt19402176',
//   'tt19402176',
//   'tt10038830',
//   'tt10038830',
//   'tt29561824',
//   'tt29561824',
//   'tt15063208',
//   'tt15063208',
//   'tt12923406',
//   'tt12923406',
//   'tt6350750',
//   'tt6350750',
//   'tt28756710',
//   'tt28756710',
//   'tt6296278',
//   'tt6296278',
//   'tt15576730',
//   'tt15576730',
//   'tt26255866',
//   'tt26255866',
//   'tt18396082',
//   'tt18396082',
//   'tt3374220',
//   'tt3374220',
//   'tt10726144',
//   'tt10726144',
//   'tt11519834',
//   'tt11519834',
//   'tt11194062',
//   'tt11194062',
//   'tt9730964',
//   'tt9730964',
//   'tt10526632',
//   'tt10526632',
//   'tt2245906',
//   'tt2245906',
//   'tt9042128',
//   'tt9042128',
//   'tt7102424',
//   'tt7102424',
//   'tt12882180',
//   'tt12882180',
//   'tt29795745',
//   'tt29795745',
//   'tt7282104',
//   'tt7282104',
//   'tt6681866',
//   'tt6681866',
//   'tt0179186',
//   'tt0179186',
//   'tt9403904',
//   'tt9403904',
//   'tt29550202',
//   'tt29550202',
//   'tt7186036',
//   'tt7186036',
//   'tt3962188',
//   'tt3962188',
//   'tt5868596',
//   'tt5868596',
//   'tt11000242',
//   'tt11000242',
//   'tt15018186',
//   'tt15018186',
//   'tt15439584',
//   'tt15439584',
//   'tt2328529',
//   'tt2328529',
//   'tt9679102',
//   'tt9679102',
//   'tt6561394',
//   'tt6561394',
//   'tt0323279',
//   'tt0323279',
//   'tt13891782',
//   'tt13891782',
//   'tt8768514',
//   'tt8768514',
//   'tt22487374',
//   'tt22487374',
//   'tt8108190',
//   'tt8108190',
//   'tt4085618',
//   'tt4085618',
//   'tt22644170',
//   'tt22644170',
//   'tt14214642',
//   'tt14214642',
//   'tt10471386',
//   'tt10471386',
//   'tt27785084',
//   'tt27785084',
//   'tt6350328',
//   'tt6350328',
//   'tt17079924',
//   'tt17079924',
//   'tt15100676',
//   'tt15100676',
//   'tt0443684',
//   'tt0443684',
//   'tt27786180',
//   'tt27786180',
//   'tt8621360',
//   'tt8621360',
//   'tt9869952',
//   'tt9869952',
//   'tt22080044',
//   'tt22080044',
//   'tt7913038',
//   'tt7913038',
//   'tt12923836',
//   'tt12923836',
//   'tt17050716',
//   'tt17050716',
//   'tt9052412',
//   'tt9052412',
//   'tt13080206',
//   'tt13080206',
//   'tt0384309',
//   'tt0384309',
//   'tt15576984',
//   'tt15576984',
//   'tt7786752',
//   'tt7786752',
//   'tt3806596',
//   'tt3806596',
//   'tt5152604',
//   'tt5152604',
//   'tt2796402',
//   'tt2796402',
//   'tt28468549',
//   'tt28468549',
//   'tt10133380',
//   'tt10133380',
//   'tt7270676',
//   'tt7270676',
//   'tt16273930',
//   'tt16273930',
//   'tt14671226',
//   'tt14671226',
//   'tt16438032',
//   'tt16438032',
//   'tt13188590',
//   'tt13188590',
//   'tt30003482',
//   'tt30003482',
//   'tt5715530',
//   'tt5715530',
//   'tt29506516',
//   'tt29506516',
//   'tt10079788',
//   'tt10079788',
//   'tt7059626',
//   'tt7059626',
//   'tt11155372',
//   'tt11155372',
//   'tt15193236',
//   'tt15193236',
//   'tt23711286',
//   'tt23711286',
//   'tt11530798',
//   'tt11530798',
//   'tt3721712',
//   'tt3721712',
//   'tt9684016',
//   'tt9684016',
//   'tt10052364',
//   'tt10052364',
//   'tt10574812',
//   'tt10574812',
//   'tt19383322',
//   'tt19383322',
//   'tt10976696',
//   'tt10976696',
//   'tt8684786',
//   'tt8684786',
//   'tt9879060',
//   'tt9879060',
//   'tt21990036',
//   'tt21990036',
//   'tt11657968',
//   'tt11657968',
//   'tt7836760',
//   'tt7836760',
//   'tt10192598',
//   'tt10192598',
//   'tt27799569',
//   'tt27799569',
//   'tt9692876',
//   'tt9692876',
//   'tt25389578',
//   'tt25389578',
//   'tt11886428',
//   'tt11886428',
//   'tt10012930',
//   'tt10012930',
//   'tt27040823',
//   'tt27040823',
//   'tt11865568',
//   'tt11865568',
//   'tt21990068',
//   'tt21990068',
//   'tt4130062',
//   'tt4130062',
//   'tt26731285',
//   'tt26731285',
//   'tt10126826',
//   'tt10126826',
//   'tt6922724',
//   'tt6922724',
//   'tt12411314',
//   'tt12411314',
//   'tt21941774',
//   'tt21941774',
//   'tt3071684',
//   'tt3071684',
//   'tt29191802',
//   'tt29191802',
//   'tt7884568',
//   'tt7884568',
//   'tt5372696',
//   'tt5372696',
//   'tt6815378',
//   'tt6815378',
//   'tt10129414',
//   'tt10129414',
//   'tt7916122',
//   'tt7916122',
//   'tt25643152',
//   'tt25643152',
//   'tt15417042',
//   'tt15417042',
//   'tt10013588',
//   'tt10013588',
//   'tt3084300',
//   'tt3084300',
//   'tt0905633',
//   'tt0905633',
//   'tt2040319',
//   'tt2040319',
//   'tt10126780',
//   'tt10126780',
//   'tt23475990',
//   'tt23475990',
//   'tt18073434',
//   'tt18073434',
//   'tt13955190',
//   'tt13955190',
//   'tt10121758',
//   'tt10121758',
//   'tt0114865',
//   'tt0114865',
//   'tt10954342',
//   'tt10954342',
//   'tt11570330',
//   'tt11570330',
//   'tt15546030',
//   'tt15546030',
//   'tt19035130',
//   'tt19035130',
//   'tt8355636',
//   'tt8355636',
//   'tt11876324',
//   'tt11876324',
//   'tt5699160',
//   'tt5699160',
//   'tt24654284',
//   'tt24654284',
//   'tt26735614',
//   'tt26735614',
//   'tt19402124',
//   'tt19402124',
//   'tt14355636',
//   'tt14355636',
//   'tt0339812',
//   'tt0339812',
//   'tt11778520',
//   'tt11778520',
//   'tt13135858',
//   'tt13135858',
//   'tt5928514',
//   'tt5928514',
//   'tt15405254',
//   'tt15405254',
//   'tt22897796',
//   'tt22897796',
//   'tt11389314',
//   'tt11389314',
//   'tt15296270',
//   'tt15296270',
//   'tt21154640',
//   'tt21154640',
//   'tt3175580',
//   'tt3175580',
//   'tt1175104',
//   'tt1175104',
//   'tt28079401',
//   'tt28079401',
//   'tt10177992',
//   'tt10177992',
//   'tt9072434',
//   'tt9072434',
//   'tt8564984',
//   'tt8564984',
//   'tt10954268',
//   'tt10954268',
//   'tt15469538',
//   'tt15469538',
//   'tt13341296',
//   'tt13341296',
//   'tt13980940',
//   'tt13980940',
//   'tt5940526',
//   'tt5940526',
//   'tt4658808',
//   'tt4658808',
//   'tt2437790',
//   'tt2437790',
//   'tt5781866',
//   'tt5781866',
//   'tt11952822',
//   'tt11952822',
//   'tt15170066',
//   'tt15170066',
//   'tt11847910',
//   'tt11847910',
//   'tt6571718',
//   'tt6571718',
//   'tt27751782',
//   'tt27751782',
//   'tt10822150',
//   'tt10822150',
//   'tt10749964',
//   'tt10749964',
//   'tt3541032',
//   'tt3541032',
//   'tt27480865',
//   'tt27480865',
//   'tt1927035',
//   'tt1927035',
//   'tt22643762',
//   'tt22643762',
//   'tt22640430',
//   'tt22640430',
//   'tt21816340',
//   'tt21816340',
//   'tt24852810',
//   'tt24852810',
//   'tt2381127',
//   'tt2381127',
//   'tt6421094',
//   'tt6421094',
//   'tt5832790',
//   'tt5832790',
//   'tt12075254',
//   'tt12075254',
//   'tt29517087',
//   'tt29517087',
//   'tt4553866',
//   'tt4553866',
//   'tt28696876',
//   'tt28696876',
//   'tt11272742',
//   'tt11272742',
//   'tt7830198',
//   'tt7830198',
//   'tt10935750',
//   'tt10935750',
//   'tt2221310',
//   'tt2221310',
//   'tt10822166',
//   'tt10822166',
//   'tt4505450',
//   'tt4505450',
//   'tt27903985',
//   'tt27903985',
//   'tt9247852',
//   'tt9247852',
//   'tt29607542',
//   'tt29607542',
//   'tt12266168',
//   'tt12266168',
//   'tt7435138',
//   'tt7435138',
//   'tt14606410',
//   'tt14606410',
//   'tt22001346',
//   'tt22001346',
//   'tt3664426',
//   'tt3664426',
//   'tt23326528',
//   'tt23326528',
//   'tt21976226',
//   'tt21976226',
//   'tt15485194',
//   'tt15485194',
//   'tt28687787',
//   'tt28687787',
//   'tt7861996',
//   'tt7861996',
//   'tt13585362',
//   'tt13585362',
//   'tt30645113',
//   'tt30645113',
//   'tt4964950',
//   'tt4964950',
//   'tt29541998',
//   'tt29541998',
//   'tt16731880',
//   'tt16731880',
//   'tt2801564',
//   'tt2801564',
//   'tt11778092',
//   'tt11778092',
//   'tt3438754',
//   'tt3438754',
//   'tt6803160',
//   'tt6803160',
//   'tt9228588',
//   'tt9228588',
//   'tt6889706',
//   'tt6889706',
//   'tt11991578',
//   'tt11991578',
//   'tt5114626',
//   'tt5114626',
//   'tt22908060',
//   'tt22908060',
//   'tt11839364',
//   'tt11839364',
//   'tt4182266',
//   'tt4182266',
//   'tt1646145',
//   'tt1646145',
//   'tt22082752',
//   'tt22082752',
//   'tt15336820',
//   'tt15336820',
//   'tt21881790',
//   'tt21881790',
//   'tt18084088',
//   'tt18084088',
//   'tt27785069',
//   'tt27785069',
//   'tt28695627',
//   'tt28695627',
//   'tt11497734',
//   'tt11497734',
//   'tt15470328',
//   'tt15470328',
//   'tt21601960',
//   'tt21601960',
//   'tt22640434',
//   'tt22640434',
//   'tt6835428',
//   'tt6835428',
//   'tt19177446',
//   'tt19177446',
//   'tt16912626',
//   'tt16912626',
//   'tt11022662',
//   'tt11022662',
//   'tt6433558',
//   'tt6433558',
//   'tt5539060',
//   'tt5539060',
//   'tt15468886',
//   'tt15468886',
//   'tt5140522',
//   'tt5140522',
//   'tt10150330',
//   'tt10150330',
//   'tt26227444',
//   'tt26227444',
//   'tt4428692',
//   'tt4428692',
//   'tt27541139',
//   'tt27541139',
//   'tt10097664',
//   'tt10097664',
//   'tt8028608',
//   'tt8028608',
//   'tt0334669',
//   'tt0334669',
//   'tt0431490',
//   'tt0431490',
//   'tt23341958',
//   'tt23341958',
//   'tt15263682',
//   'tt15263682',
//   'tt14965102',
//   'tt14965102',
//   'tt28070640',
//   'tt28070640',
//   'tt3411212',
//   'tt3411212',
//   'tt0228041',
//   'tt0228041',
//   'tt13925292',
//   'tt13925292',
//   'tt12942880',
//   'tt12942880',
//   'tt27729246',
//   'tt27729246',
//   'tt28610803',
//   'tt28610803',
//   'tt4590496',
//   'tt4590496',
//   'tt1438198',
//   'tt1438198',
//   'tt28671119',
//   'tt28671119',
//   'tt14536366',
//   'tt14536366',
//   'tt5539042',
//   'tt5539042',
//   'tt30463223',
//   'tt30463223',
//   'tt7256354',
//   'tt7256354',
//   'tt9857802',
//   'tt9857802',
//   'tt27899883',
//   'tt27899883',
//   'tt29520440',
//   'tt29520440',
//   'tt15940154',
//   'tt15940154',
//   'tt18307232',
//   'tt18307232',
//   'tt9319940',
//   'tt9319940',
//   'tt30005162',
//   'tt30005162',
//   'tt3620296',
//   'tt3620296',
//   'tt27238277',
//   'tt27238277',
//   'tt4991666',
//   'tt4991666',
//   'tt27663408',
//   'tt27663408',
//   'tt3057372',
//   'tt3057372',
//   'tt12957596',
//   'tt12957596',
//   'tt2805526',
//   'tt2805526',
//   'tt1413568',
//   'tt1413568',
//   'tt2904506',
//   'tt2904506',
//   'tt29573029',
//   'tt29573029',
//   'tt8176862',
//   'tt8176862',
//   'tt14597306',
//   'tt14597306',
//   'tt8013768',
//   'tt8013768',
//   'tt14577922',
//   'tt14577922',
//   'tt11062910',
//   'tt11062910',
//   'tt27219397',
//   'tt27219397',
//   'tt20878066',
//   'tt20878066',
//   'tt26340745',
//   'tt26340745',
//   'tt29517889',
//   'tt29517889',
//   'tt13135104',
//   'tt13135104',
//   'tt15485418',
//   'tt15485418',
//   'tt10935954',
//   'tt10935954',
//   'tt27441126',
//   'tt27441126',
//   'tt9662690',
//   'tt9662690',
//   'tt9348978',
//   'tt9348978',
//   'tt21354096',
//   'tt21354096',
//   'tt9748464',
//   'tt9748464',
//   'tt6970002',
//   'tt6970002',
//   'tt10199970',
//   'tt10199970',
//   'tt10137106',
//   'tt10137106',
//   'tt17351158',
//   'tt17351158',
//   'tt15101352',
//   'tt15101352',
//   'tt9170328',
//   'tt9170328',
//   'tt4289388',
//   'tt4289388',
//   'tt14111722',
//   'tt14111722',
//   'tt7526894',
//   'tt7526894',
//   'tt14113696',
//   'tt14113696',
//   'tt11899162',
//   'tt11899162',
//   'tt27165769',
//   'tt27165769',
//   'tt28681317',
//   'tt28681317',
//   'tt8503162',
//   'tt8503162',
//   'tt10178002',
//   'tt10178002',
//   'tt26738872',
//   'tt26738872',
//   'tt16976110',
//   'tt16976110',
//   'tt6282546',
//   'tt6282546',
//   'tt21990200',
//   'tt21990200',
//   'tt3084258',
//   'tt3084258',
//   'tt3813192',
//   'tt3813192',
//   'tt17079116',
//   'tt17079116',
//   'tt28456753',
//   'tt28456753',
// ];

const uaMovieIDsDatabase = [
  'tt19465630',
  'tt16315948',
  'tt19783714',
  'tt9455468',
  'tt21833376',
  'tt8269856',
  'tt13537200',
  'tt7876510',
  'tt28480219',
  'tt7691572',
  'tt10262160',
  'tt10749786',
  'tt20414812',
  'tt3781118',
  'tt9319960',
  'tt27662509',
  'tt26225074',
  'tt5238240',
  'tt7782854',
  'tt9049560',
  'tt3037582',
  'tt21482550',
  'tt11386020',
  'tt12166434',
  'tt16532434',
  'tt5591786',
  'tt7795376',
  'tt14028890',
  'tt21622742',
  'tt11680986',
  'tt12427090',
  'tt11650320',
  'tt11771626',
  'tt16088624',
  'tt8009354',
  'tt28291829',
  'tt18688348',
  'tt14577022',
  'tt23214780',
  'tt14225832',
  'tt10272460',
  'tt30221991',
  'tt11402054',
  'tt15331466',
  'tt10276554',
  'tt8956464',
  'tt14734896',
  'tt14988574',
  'tt20356188',
  'tt4957736',
  'tt8662114',
  'tt9670284',
  'tt26914506',
  'tt9177988',
  'tt3675486',
  'tt6908712',
  'tt7736212',
  'tt8371238',
  'tt9109206',
  'tt9842732',
  'tt28967828',
  'tt7133202',
  'tt10244550',
  'tt15100112',
  'tt2796680',
  'tt30213663',
  'tt8789704',
  'tt16539516',
  'tt7478494',
  'tt15414016',
  'tt7753106',
  'tt10735778',
  'tt23648222',
  'tt13248156',
  'tt11287380',
  'tt15043774',
  'tt21260826',
  'tt7425298',
  'tt13341244',
  'tt13364844',
  'tt7906356',
  'tt5335198',
  'tt16480598',
  'tt19797962',
  'tt5017008',
  'tt12335574',
  'tt14108464',
  'tt12421658',
  'tt5796882',
  'tt11704144',
  'tt14569326',
  'tt10330046',
  'tt15876298',
  'tt1330039',
  'tt14665658',
  'tt4729890',
  'tt8706874',
  'tt13731484',
  'tt14680562',
  'tt28020652',
  'tt2401213',
  'tt27656520',
  'tt6761474',
  'tt11854142',
  'tt22090720',
  'tt10038830',
  'tt29561824',
  'tt12923406',
  'tt6350750',
  'tt28756710',
  'tt6296278',
  'tt18396082',
  'tt3374220',
  'tt10726144',
  'tt11519834',
  'tt11194062',
  'tt10526632',
  'tt2245906',
  'tt9042128',
  'tt7102424',
  'tt12882180',
  'tt29795745',
  'tt7282104',
  'tt0179186',
  'tt9403904',
  'tt29550202',
  'tt7186036',
  'tt3962188',
  'tt5868596',
  'tt11000242',
  'tt15018186',
  'tt15439584',
  'tt2328529',
  'tt6561394',
  'tt0323279',
  'tt13891782',
  'tt8768514',
  'tt22487374',
  'tt8108190',
  'tt4085618',
  'tt22644170',
  'tt14214642',
  'tt10471386',
  'tt6350328',
  'tt15100676',
  'tt0443684',
  'tt27786180',
  'tt8621360',
  'tt9869952',
  'tt22080044',
  'tt12923836',
  'tt17050716',
  'tt9052412',
  'tt13080206',
  'tt0384309',
  'tt15576984',
  'tt7786752',
  'tt3806596',
  'tt5152604',
  'tt2796402',
  'tt10133380',
  'tt7270676',
  'tt16273930',
  'tt14671226',
  'tt16438032',
  'tt13188590',
  'tt5715530',
  'tt29506516',
  'tt7059626',
  'tt11155372',
  'tt15193236',
  'tt23711286',
  'tt11530798',
  'tt3721712',
  'tt9684016',
  'tt10052364',
  'tt10574812',
  'tt8684786',
  'tt9879060',
  'tt21990036',
  'tt11657968',
  'tt10192598',
  'tt27799569',
  'tt9692876',
  'tt25389578',
  'tt10012930',
  'tt27040823',
  'tt11865568',
  'tt21990068',
  'tt4130062',
  'tt26731285',
  'tt6922724',
  'tt21941774',
  'tt3071684',
  'tt29191802',
  'tt5372696',
  'tt6815378',
  'tt10129414',
  'tt7916122',
  'tt25643152',
  'tt15417042',
  'tt10013588',
  'tt0905633',
  'tt2040319',
  'tt10126780',
  'tt18073434',
  'tt13955190',
  'tt0114865',
  'tt10954342',
  'tt15546030',
  'tt19035130',
  'tt8355636',
  'tt5699160',
  'tt24654284',
  'tt26735614',
  'tt14355636',
  'tt0339812',
  'tt13135858',
  'tt5928514',
  'tt15405254',
  'tt22897796',
  'tt11389314',
  'tt21154640',
  'tt3175580',
  'tt1175104',
  'tt28079401',
  'tt9072434',
  'tt8564984',
  'tt10954268',
  'tt13341296',
  'tt13980940',
  'tt5940526',
  'tt4658808',
  'tt2437790',
  'tt5781866',
  'tt11952822',
  'tt15170066',
  'tt6571718',
  'tt27751782',
  'tt3541032',
  'tt27480865',
  'tt1927035',
  'tt22643762',
  'tt22640430',
  'tt21816340',
  'tt24852810',
  'tt2381127',
  'tt29517087',
  'tt28696876',
  'tt11272742',
  'tt7830198',
  'tt10935750',
  'tt2221310',
  'tt4505450',
  'tt27903985',
  'tt9247852',
  'tt29607542',
  'tt12266168',
  'tt7435138',
  'tt14606410',
  'tt22001346',
  'tt3664426',
  'tt23326528',
  'tt21976226',
  'tt15485194',
  'tt28687787',
  'tt13585362',
  'tt30645113',
  'tt4964950',
  'tt29541998',
  'tt2801564',
  'tt11778092',
  'tt3438754',
  'tt9228588',
  'tt6889706',
  'tt11991578',
  'tt5114626',
  'tt11839364',
  'tt4182266',
  'tt1646145',
  'tt22082752',
  'tt15336820',
  'tt18084088',
  'tt27785069',
  'tt15470328',
  'tt22640434',
  'tt6835428',
  'tt19177446',
  'tt16912626',
  'tt11022662',
  'tt5140522',
  'tt10150330',
  'tt26227444',
  'tt4428692',
  'tt27541139',
  'tt10097664',
  'tt8028608',
  'tt0334669',
  'tt0431490',
  'tt23341958',
  'tt15263682',
  'tt14965102',
  'tt28070640',
  'tt3411212',
  'tt0228041',
  'tt13925292',
  'tt27729246',
  'tt28610803',
  'tt1438198',
  'tt28671119',
  'tt14536366',
  'tt30463223',
  'tt7256354',
  'tt9857802',
  'tt27899883',
  'tt29520440',
  'tt15940154',
  'tt18307232',
  'tt9319940',
  'tt30005162',
  'tt3620296',
  'tt27238277',
  'tt4991666',
  'tt27663408',
  'tt3057372',
  'tt12957596',
  'tt2805526',
  'tt1413568',
  'tt2904506',
  'tt29573029',
  'tt8176862',
  'tt14597306',
  'tt8013768',
  'tt14577922',
  'tt27219397',
  'tt20878066',
  'tt29517889',
  'tt13135104',
  'tt15485418',
  'tt10935954',
  'tt27441126',
  'tt9348978',
  'tt9748464',
  'tt10199970',
  'tt10137106',
  'tt17351158',
  'tt15101352',
  'tt14111722',
  'tt7526894',
  'tt27165769',
  'tt28681317',
  'tt8503162',
  'tt16976110',
  'tt6282546',
  'tt21990200',
  'tt3084258',
  'tt3813192',
  'tt17079116',
  'tt28456753',
  'tt13939234',
  'tt16607284',
  'tt5701852',
  'tt16430516',
  'tt15408478',
  'tt13561228',
  'tt9723286',
  'tt4133400',
  'tt11336910',
  'tt6541602',
  'tt4151824',
  'tt27549741',
  'tt21934732',
  'tt6429058',
  'tt13075648',
  'tt15362546',
  'tt5425170',
  'tt7643478',
  'tt18602002',
  'tt3954346',
  'tt23454366',
  'tt26420168',
  'tt15131386',
  'tt29684928',
  'tt6971342',
  'tt10527470',
  'tt14562870',
  'tt8528360',
  'tt20242354',
  'tt21849870',
  'tt1217044',
  'tt15312342',
  'tt29520254',
  'tt15535800',
  'tt5826698',
  'tt16283122',
  'tt11372222',
  'tt26731190',
  'tt15507482',
  'tt12193984',
  'tt28775495',
  'tt27516890',
  'tt27930913',
  'tt30217945',
  'tt2183158',
  'tt21376314',
  'tt5822552',
  'tt8268292',
  'tt21605410',
  'tt15462252',
  'tt29888719',
  'tt17279614',
  'tt15310678',
  'tt11647208',
  'tt5891316',
  'tt2572068',
  'tt0334631',
  'tt9186628',
  'tt3963324',
  'tt6363050',
  'tt13549538',
  'tt4935644',
  'tt28694469',
  'tt22756094',
  'tt13959760',
  'tt28645989',
  'tt22022678',
  'tt9753764',
  'tt5140214',
  'tt28106926',
  'tt7131142',
  'tt28696273',
  'tt19781724',
  'tt20417586',
  'tt7227166',
  'tt29434784',
  'tt15514594',
  'tt10368524',
  'tt9820788',
  'tt29354717',
  'tt28173108',
  'tt29685112',
  'tt28115610',
  'tt9734324',
  'tt28485843',
  'tt26455435',
  'tt11187462',
  'tt26370496',
  'tt7844164',
  'tt13517192',
  'tt19497246',
  'tt29482221',
  'tt10242126',
  'tt6740104',
  'tt16968554',
  'tt28131457',
  'tt11534364',
  'tt23329932',
  'tt18826392',
  'tt15354248',
  'tt29649958',
  'tt15499654',
  'tt21743166',
  'tt9051516',
  'tt29518165',
  'tt13428798',
  'tt27917371',
  'tt12111994',
  'tt11591406',
  'tt19783734',
  'tt7662728',
  'tt4506806',
  'tt4929014',
  'tt7425354',
  'tt8174432',
  'tt4363438',
  'tt13248252',
  'tt12281596',
  'tt15501204',
  'tt21144510',
  'tt27536760',
  'tt14625706',
  'tt17508130',
  'tt18816096',
  'tt8000618',
  'tt27865286',
  'tt29429585',
  'tt6825362',
  'tt5721678',
  'tt22075220',
  'tt11016614',
  'tt9100658',
  'tt18933754',
  'tt11035210',
  'tt15467444',
  'tt15405382',
  'tt10939400',
  'tt15438960',
  'tt17507902',
  'tt27923283',
  'tt19047434',
  'tt27432753',
  'tt14258326',
  'tt16024824',
  'tt27050181',
  'tt12937336',
  'tt15940156',
  'tt15341418',
  'tt11876766',
  'tt29978060',
  'tt13860156',
  'tt7168134',
  'tt5131832',
  'tt3863442',
  'tt6129040',
  'tt6386486',
  'tt28108051',
  'tt9831182',
  'tt15234956',
  'tt4991262',
  'tt11055900',
  'tt10581108',
  'tt15438732',
  'tt11016160',
  'tt28764775',
  'tt15670768',
  'tt5883812',
  'tt15462760',
  'tt8800496',
  'tt3335476',
  'tt15362352',
  'tt21365724',
  'tt28333135',
  'tt20696796',
  'tt3624578',
  'tt26235068',
  'tt27413063',
  'tt27630146',
  'tt5097238',
  'tt5559596',
  'tt28816242',
  'tt12700606',
  'tt2373058',
  'tt2266793',
  'tt10481406',
  'tt3746274',
  'tt27789517',
  'tt14033058',
  'tt19223548',
  'tt15089228',
  'tt15411792',
  'tt29279680',
  'tt6285226',
  'tt13671762',
  'tt21802754',
  'tt28373752',
  'tt16356778',
  'tt27237139',
  'tt6566686',
  'tt18277850',
  'tt20192764',
  'tt0105727',
  'tt28565145',
  'tt16981140',
  'tt3212782',
  'tt13134692',
  'tt5561324',
  'tt5774924',
  'tt28650832',
  'tt20449760',
  'tt27337792',
  'tt17818868',
  'tt3301940',
  'tt28102894',
  'tt15411286',
  'tt4940562',
  'tt21806928',
  'tt27751433',
  'tt4179212',
  'tt22025208',
  'tt27645610',
  'tt16912692',
  'tt5196540',
  'tt17508056',
  'tt5898168',
  'tt24633858',
  'tt4991288',
  'tt18934266',
  'tt10893702',
  'tt14559810',
  'tt6194436',
  'tt8653504',
  'tt6163906',
  'tt6216664',
  'tt15211006',
  'tt9549128',
  'tt10165214',
  'tt11016314',
  'tt7027460',
  'tt21248148',
  'tt15417218',
  'tt20356444',
  'tt15168574',
  'tt4032718',
  'tt2368128',
  'tt18277750',
  'tt4743024',
  'tt14342302',
  'tt13428812',
  'tt15714610',
  'tt2363341',
  'tt20764788',
  'tt6879162',
  'tt4858734',
  'tt14648314',
  'tt15655594',
  'tt2547832',
  'tt3378194',
  'tt16983410',
  'tt5921638',
  'tt3753406',
  'tt10327664',
  'tt2142951',
  'tt25024412',
  'tt11223320',
  'tt9067120',
  'tt20355748',
  'tt5139270',
  'tt5807380',
  'tt27720037',
  'tt15342180',
  'tt2693552',
  'tt11290286',
  'tt5016578',
  'tt3770300',
  'tt14597266',
  'tt14979340',
  'tt15489068',
  'tt10939338',
  'tt4924480',
  'tt14224470',
  'tt8887916',
  'tt4363076',
  'tt5781830',
  'tt13518828',
  'tt20412108',
  'tt2144179',
  'tt9270018',
  'tt15485226',
  'tt15517680',
  'tt6571730',
  'tt28750339',
  'tt6930536',
  'tt15507362',
  'tt8772332',
  'tt9201918',
  'tt9753262',
  'tt5482558',
  'tt2144089',
  'tt4935864',
  'tt1217023',
  'tt21359908',
  'tt13073192',
  'tt28623222',
  'tt12170264',
  'tt27737335',
  'tt14936394',
  'tt15819526',
  'tt5434232',
  'tt26347925',
  'tt18276510',
  'tt5883934',
  'tt1135988',
  'tt3750682',
  'tt15488938',
  'tt8661556',
  'tt4831212',
  'tt10172366',
  'tt27534116',
  'tt16912504',
  'tt5840634',
  'tt7285600',
  'tt9301976',
  'tt10218164',
  'tt5602130',
  'tt5869786',
  'tt9131778',
  'tt11868172',
  'tt4512358',
  'tt10580380',
  'tt3610108',
  'tt16976534',
  'tt3746204',
  'tt5796220',
  'tt10939468',
  'tt29375974',
  'tt5869768',
  'tt18546804',
  'tt6289546',
  'tt15672516',
  'tt15341934',
  'tt8559300',
  'tt9044492',
  'tt8992558',
  'tt6146836',
  'tt18931130',
  'tt3905016',
  'tt5447642',
  'tt15341944',
  'tt19023982',
  'tt10300426',
  'tt6228378',
  'tt28491337',
  'tt3136518',
  'tt15462128',
  'tt6950090',
  'tt13843166',
  'tt4505314',
  'tt29669309',
  'tt3911692',
  'tt3335618',
  'tt13786014',
  'tt29057213',
  'tt9802900',
  'tt23032206',
  'tt15708244',
  'tt21619202',
  'tt0432981',
  'tt7434978',
  'tt13517108',
  'tt4706840',
  'tt18931082',
  'tt4759252',
  'tt26731246',
  'tt20412130',
  'tt8531360',
  'tt15519466',
  'tt27170339',
  'tt15456380',
  'tt6573690',
  'tt11035102',
  'tt15419288',
  'tt12398226',
  'tt22805596',
  'tt15411592',
  'tt13779894',
  'tt22345334',
  'tt18933660',
  'tt2613248',
  'tt15094918',
  'tt8752094',
  'tt21967726',
  'tt21840890',
  'tt19113238',
  'tt9880724',
  'tt23985684',
  'tt21476184',
  'tt2144185',
  'tt15414640',
  'tt11147294',
  'tt13215754',
  'tt2547720',
  'tt2144111',
  'tt15509484',
  'tt3417830',
  'tt23559514',
  'tt15864440',
  'tt10217722',
  'tt5840796',
  'tt3747934',
  'tt20201564',
  'tt27730823',
  'tt14558294',
  'tt9639852',
  'tt4743714',
  'tt16282950',
  'tt29713487',
  'tt10165022',
  'tt9644792',
  'tt15504076',
  'tt7969154',
  'tt15312826',
  'tt2629782',
  'tt13650518',
  'tt8382284',
  'tt8559686',
  'tt23876172',
  'tt27076904',
  'tt28173092',
  'tt15394046',
  'tt13779946',
  'tt11662030',
  'tt2697400',
  'tt15046584',
  'tt9645246',
  'tt15438826',
  'tt2144153',
  'tt12980298',
  'tt11035494',
  'tt27637324',
  'tt12107404',
  'tt27683896',
  'tt23638682',
  'tt2735210',
  'tt29354971',
  'tt9803120',
  'tt15507274',
  'tt2806088',
  'tt3796254',
  'tt8800572',
  'tt8736042',
  'tt1695133',
  'tt11023018',
  'tt21653388',
  'tt9815472',
  'tt20356010',
  'tt26902273',
  'tt15495302',
  'tt23050340',
  'tt15341990',
  'tt10935892',
  'tt23463294',
  'tt26516155',
  'tt12415660',
  'tt6880798',
  'tt15412288',
  'tt21197134',
  'tt24484832',
  'tt4476824',
  'tt12719590',
  'tt6950774',
  'tt0174794',
  'tt9873566',
  'tt15864516',
  'tt6169630',
  'tt27685739',
  'tt27630391',
  'tt20412034',
  'tt26346250',
  'tt1935060',
  'tt30018400',
  'tt5704354',
  'tt29932928',
  'tt5311548',
  'tt11877424',
  'tt23032664',
  'tt3208466',
  'tt9859814',
  'tt23050154',
  'tt7970046',
  'tt9603132',
  'tt15417332',
  'tt2936698',
  'tt11036226',
  'tt8416954',
  'tt11570326',
  'tt15414572',
  'tt8207622',
  'tt9098234',
  'tt8372328',
  'tt15491746',
  'tt15485394',
  'tt16404878',
  'tt7167512',
  'tt0769532',
  'tt26492870',
  'tt10270254',
  'tt6274792',
  'tt2552612',
  'tt10270280',
  'tt11010180',
  'tt11570302',
  'tt8382270',
  'tt21806736',
  'tt15156376',
  'tt29520383',
  'tt6732030',
  'tt3210442',
  'tt13091280',
  'tt15280214',
  'tt15362392',
  'tt13428808',
  'tt11967376',
  'tt3417644',
  'tt29474875',
  'tt23050208',
  'tt0422118',
  'tt15072034',
  'tt27521883',
  'tt16283108',
  'tt14628982',
  'tt15468514',
  'tt15331572',
  'tt15036638',
  'tt16354934',
  'tt15451108',
  'tt3084244',
  'tt23056212',
  'tt13779990',
  'tt12311124',
  'tt15540504',
  'tt3856728',
  'tt27660635',
  'tt25752442',
  'tt21378746',
  'tt10330404',
  'tt6194430',
  'tt14834064',
  'tt17514090',
  'tt15857638',
  'tt9755470',
  'tt16282964',
  'tt14693988',
  'tt26742888',
  'tt8289028',
  'tt12402922',
  'tt10038650',
  'tt12108142',
  'tt13549618',
  'tt6871402',
  'tt10509346',
  'tt9182842',
  'tt14260988',
  'tt15083122',
  'tt29669184',
  'tt16401798',
  'tt27644413',
  'tt21803072',
  'tt15527462',
  'tt27341059',
  'tt7031912',
  'tt14540232',
  'tt28994080',
  'tt27616050',
  'tt7168136',
  'tt7230242',
  'tt21854738',
  'tt4277124',
  'tt2144155',
  'tt11513698',
  'tt23744214',
  'tt10939514',
  'tt1369483',
  'tt15342020',
  'tt9856266',
  'tt15082826',
  'tt11581350',
  'tt18814452',
  'tt9818522',
  'tt10079838',
  'tt15518052',
  'tt16762778',
  'tt22805220',
  'tt21967914',
  'tt28069572',
  'tt14550078',
  'tt10182866',
  'tt6754684',
  'tt9114194',
  'tt9856544',
  'tt7017810',
  'tt2235736',
  'tt27800523',
  'tt28428949',
  'tt15446342',
  'tt16404636',
  'tt27791718',
  'tt16282994',
  'tt6254514',
  'tt15864048',
  'tt26628590',
  'tt16117222',
  'tt14700534',
  'tt2265255',
  'tt6120856',
  'tt9856628',
  'tt15484764',
  'tt12927872',
  'tt11570488',
  'tt27989541',
  'tt13565364',
  'tt5832674',
  'tt26899550',
  'tt11016416',
  'tt29506331',
  'tt15510226',
  'tt27643641',
  'tt20769458',
  'tt30005407',
  'tt27789856',
  'tt4682870',
  'tt22644362',
  'tt2257758',
  'tt15613750',
  'tt16283164',
  'tt12740126',
  'tt20140240',
  'tt16912550',
  'tt11341770',
  'tt5688064',
  'tt27191086',
  'tt6194422',
  'tt15394028',
  'tt15426110',
  'tt7241942',
  'tt17537990',
  'tt4477700',
  'tt11023534',
  'tt14214832',
  'tt1281380',
  'tt15467872',
  'tt9114294',
  'tt27313649',
  'tt15313646',
  'tt16282988',
  'tt22031152',
  'tt22176660',
  'tt15444348',
  'tt15502636',
  'tt10267642',
  'tt18953124',
  'tt10930640',
  'tt7133040',
  'tt15550202',
  'tt15083248',
  'tt8196294',
  'tt12106890',
  'tt21108904',
  'tt22743902',
  'tt16356568',
  'tt9297038',
  'tt20426600',
  'tt30401134',
  'tt15063334',
  'tt7137874',
  'tt15499196',
  'tt15030094',
  'tt15342812',
  'tt29544237',
  'tt15313232',
  'tt15834104',
  'tt15341958',
  'tt5874194',
  'tt27651969',
  'tt2274808',
  'tt28156860',
  'tt13074478',
  'tt6848580',
  'tt14794372',
  'tt15313600',
  'tt13598166',
  'tt21203652',
  'tt25884638',
  'tt5912810',
  'tt9800030',
  'tt29742745',
  'tt24133826',
  'tt11035806',
  'tt15342072',
  'tt23778110',
  'tt29817355',
  'tt27286642',
  'tt22080372',
  'tt10938898',
  'tt2706602',
  'tt22644250',
  'tt8981426',
  'tt6015804',
  'tt23747634',
  'tt11036048',
  'tt11945636',
  'tt16283098',
  'tt10274550',
  'tt0312356',
  'tt12392178',
  'tt9818014',
  'tt15511896',
  'tt12339022',
  'tt27496736',
  'tt11016096',
  'tt21867710',
  'tt20411322',
  'tt15342056',
  'tt11764568',
  'tt20411586',
  'tt17002210',
  'tt7970108',
  'tt15484962',
  'tt12937890',
  'tt13091222',
  'tt29803227',
  'tt9803044',
  'tt29383720',
  'tt15254758',
  'tt14261084',
  'tt13135392',
  'tt10270232',
  'tt12631378',
  'tt26730406',
  'tt12739954',
  'tt10787224',
  'tt27534916',
  'tt16769926',
  'tt11867808',
  'tt15150104',
  'tt9269902',
  'tt16151276',
  'tt29936619',
  'tt8438198',
  'tt21941320',
  'tt21207890',
  'tt11886616',
  'tt22005322',
  'tt12740192',
  'tt13810158',
  'tt15446672',
  'tt12158936',
  'tt2144215',
  'tt10319532',
  'tt9410076',
  'tt9815298',
  'tt28197271',
  'tt3822114',
  'tt15109400',
  'tt15139560',
  'tt9490358',
  'tt7115430',
  'tt2144069',
  'tt15209402',
  'tt15482494',
  'tt10262594',
  'tt9728328',
  'tt11570280',
  'tt16528946',
  'tt10735402',
  'tt21207792',
  'tt13998558',
  'tt15321482',
  'tt27236653',
  'tt2144087',
  'tt28566898',
  'tt16283176',
  'tt24133366',
  'tt29966544',
  'tt21443078',
  'tt7813234',
  'tt13235928',
  'tt7425166',
  'tt21977608',
  'tt15707944',
  'tt4860716',
  'tt2375783',
  'tt2142843',
  'tt22805764',
  'tt2144063',
  'tt8148534',
  'tt7718496',
  'tt2142861',
  'tt2856958',
  'tt22163742',
  'tt15089078',
  'tt5722044',
  'tt21919550',
  'tt22816954',
  'tt8559800',
  'tt26733603',
  'tt2144107',
  'tt9753646',
  'tt15131736',
  'tt13873484',
  'tt3342206',
  'tt8978496',
  'tt3822674',
  'tt2144015',
  'tt23623596',
  'tt15131620',
  'tt3004870',
  'tt9815406',
  'tt29978358',
  'tt8620876',
  'tt15071490',
  'tt15243528',
  'tt2142901',
  'tt11016220',
  'tt9859588',
  'tt12719570',
  'tt11886648',
  'tt23334102',
  'tt11750004',
  'tt14084240',
  'tt4661080',
  'tt16345184',
  'tt8844078',
  'tt9842550',
  'tt10256242',
  'tt10268562',
  'tt22805388',
  'tt0431264',
  'tt3320652',
  'tt9301820',
  'tt15471888',
  'tt9800574',
  'tt9174598',
  'tt12753646',
  'tt22082434',
  'tt8239030',
  'tt15155126',
  'tt13893542',
  'tt15342122',
  'tt15362308',
  'tt10081190',
  'tt29961277',
  'tt14947478',
  'tt30014629',
  'tt15361158',
  'tt15100888',
  'tt9818254',
  'tt7285398',
  'tt8382306',
  'tt11034922',
  'tt26923373',
  'tt7662562',
  'tt27789789',
  'tt22867576',
  'tt3288676',
  'tt21233946',
  'tt8800534',
  'tt11023306',
  'tt9859740',
  'tt12107000',
  'tt27797561',
  'tt21084646',
  'tt13428810',
  'tt27919944',
  'tt15379946',
  'tt10079912',
  'tt12884804',
  'tt2142903',
  'tt11036536',
  'tt11591110',
  'tt22984088',
  'tt15371778',
  'tt13091352',
  'tt15708382',
  'tt9302008',
  'tt26730342',
  'tt28778788',
  'tt9166436',
  'tt8768418',
  'tt8769566',
  'tt17100976',
  'tt10784386',
  'tt10786952',
  'tt8077724',
  'tt11623378',
  'tt10268538',
  'tt15149948',
  'tt16609396',
  'tt2321245',
  'tt7369936',
  'tt15495110',
  'tt11213434',
  'tt15146780',
  'tt8768344',
  'tt13576600',
  'tt16609756',
  'tt14054534',
  'tt21970458',
  'tt15128236',
  'tt14243634',
  'tt11591148',
  'tt15142006',
  'tt30746362',
];

const storedData = [];

function storeData(data) {
  storedData.push(data);
}

console.log(uaMovieIDsDatabase.length);

fse.appendFile('database_copy.txt', JSON.stringify(uaMovieIDsDatabase));

async function getData() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7111099f99msh2cbd1cdb12d2a6bp16bba2jsn8b393f9df304',
      'X-RapidAPI-Host': 'imdb146.p.rapidapi.com',
    },
  };
  for (let i = 0; i < 2; i++) {
    // for (const item of arrayOfMovieLinkID) {
    // const url = `https://imdb146.p.rapidapi.com/v1/title/?id=${item}`;
    const url = `https://imdb146.p.rapidapi.com/v1/title/?id=tt19465630`;
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      storeData(result);
    } catch (error) {
      console.error(error);
    }
  }
  fse.appendFile(
    'storedDataFromArray.txt',
    `${JSON.stringify(storedData)}\n\n\n`,
  );
}

// getData();

// const message = () => console.log('hello');
// setInterval(message, 5000);
