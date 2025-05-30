/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    //your code here
    let splitStr = str.split(",")
    let ranged = /Ranged/;
    let melee = /Melee/;

    let filterRanged = splitStr.filter(element => {return ranged.test(element);})
    let filterMelee = splitStr.filter(element => {return melee.test(element);})
   
    const heroRanged = filterRanged.map(nama => nama.split('-')[0])
    const heroMelee = filterMelee.map(nama => nama.split('-')[0])
    
    return [heroRanged, heroMelee];

  }
  // TEST CASE
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  console.log(meleeRangedGrouping('')); // []