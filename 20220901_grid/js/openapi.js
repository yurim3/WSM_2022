<<<<<<< HEAD
//https://open.neis.go.kr/portal/data/service/selectServicePage.do?page=1&rows=10&sortColumn=&sortDirection=&infId=OPEN17320190722180924242823&infSeq=1
//시도교육청코드: B10: 서울특별시교육청
//표준학교코드: 7010569; 미림여자정보과학고등학교
=======
//https://open.neis.go.kr/portal/data/service/selectServicePage.do?page=1&rows=10&sortColumn=&sortDirection=&infId=OPEN17320190722180924242823&infSeq=2
//시도교육청코드: B10: 서울특별시교육청
//표준학교코드: 7010569: 미림여자정보과학고등학교
>>>>>>> eaca2dc76d68cf26524f91149a3df31ab30561a2
//식사코드: 2: 중식

//신청주소: https://open.neis.go.kr/hub/mealServiceDietInfo
//KEY: 
//ATPT_OFCDC_SC_CODE: 시도교육청코드
<<<<<<< HEAD
//SC_SCHUL_CODE: 표준학교코드
=======
//SD_SCHUL_CODE: 표준학교코드
>>>>>>> eaca2dc76d68cf26524f91149a3df31ab30561a2
//MMEAL_SC_CODE: 식사코드
//MLSV_YMD: 급식일자
//MLSV_FROM_YMD: 급식시작일자
//MLSV_TO_YMD: 급식종료일자
<<<<<<< HEAD
//https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010569&MMEAL_SC_CODE=2&MLSC_FROM_YMD=20220927
const KEY = "09a62e486b6941afb929f0c25a75bf14";
const ATPT_OFCDC_SC_CODE = "B10"; //서울특별시교육청
const SD_SCHUL_CODE = "7010569"; //미림여자정보과학고등학교
let MMEAL_SC_CODE = 2; //중식
let MLSV_YMD = "20221011"; //YYYYMMDD
let url = `https://open.neis.go.kr/hub/mealServiceDietInfo?` + `KEY=${KEY}` + `ATPT_OFCDC_SC_CODE=${ATPT_OFCDC_SC_CODE}` + `SD_SCHUL_CODE=${SD_SCHUL_CODE}` + `MLSV_YMD=${MLSV_YMD}` + `MMEAL_SC_CODE=${MMEAL_SC_CODE}`;
console.log(url);
=======
//https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010569&MMEAL_SC_CODE=2&MLSV_YMD=20220927&Type=json
const KEY = "d1dc39d63a314f2387d2dbd1c732b392";
const ATPT_OFCDC_SC_CODE = "B10";   //서울특별시교육청
const SD_SCHUL_CODE = "7010569";    //미림여자정보과학고등학교
let MMEAL_SC_CODE = 2;  //중식
let MLSV_YMD = "20220927";  //YYYYMMDD
<<<<<<< HEAD

>>>>>>> eaca2dc76d68cf26524f91149a3df31ab30561a2
=======
let url = `https://open.neis.go.kr/hub/mealServiceDietInfo?`
        + `KEY=${KEY}`
        + `ATPT_OFCDC_SC_CODE=${ATPT_OFCDC_SC_CODE}`
        + `SD_SCHUL_CODE=${SD_SCHUL_CODE}`
        + `MLSV_YMD=${MLSV_YMD}`
        + `MMEAL_SC_CODE=${MMEAL_SC_CODE}`;
console.log(url);
>>>>>>> 13968f784bea15563a541b2f782ac41b506508ca
