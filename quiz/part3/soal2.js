/*
Diberikan sebuah function cariPelaku(kalimat) yang menerima satu parameter
berupa string. Function akan me-return jumlah berapa kali ditemukan kata 
"abc" secara berturut-turut di dalam kalimat tersebut. 
Gunakan regex untuk melatih kemampuan regex.
*/
function cariPelaku(str) {
    if (str) {
        let findWord = str.match(/abc/g)
        return findWord.length;
    } else {
        return 'Tidak ada string, ini null!';
    }
  }

  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2
  console.log(cariPelaku('')); // null