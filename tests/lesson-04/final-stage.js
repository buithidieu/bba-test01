//drm va in ra co bao nhieu cap so tu 1 toi 100 co tong chia het cho 17
//(1,16), (2,15), (3,14) la cap so hop le vi co tong chia het cho 17
//vong lap i tu 1 den 100
//vong lap j tu 1 den 100
//dk i+j & 17 ===0
function tongchiahet17 (){
  let count = 0;
  //vong1
  for(let i =1; i <= 100; i++){
    for(let j = i; j <= 100; j++) {
        if((i+j)%17 === 0){
            console.log(`Cap ${i} va ${j} - Tong la ${i+j}`);
            count++;
        }
    }
  }
  console.log(`Tong cong co ${count} so chia het cho 17`);
}
  tongchiahet17();

