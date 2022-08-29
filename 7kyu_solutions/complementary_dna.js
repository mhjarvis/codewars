function DNAStrand(dna){
    dna = dna.split("");
    let arr = [];
    for(let i = 0; i < dna.length; i++) {
      if(dna[i] == 'A') {
        arr.push('T');
      } else if(dna[i] == 'T') {
        arr.push('A');
      } else if(dna[i] == 'C') {
        arr.push('G');
      } else if(dna[i] == 'G') {
        arr.push('C');
      }
    }
    return arr.join("");
  }