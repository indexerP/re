export const dataProcessingAboutSalary = (f, s) => {};

export const calculateCashback = (isCashback, sum, cb) => {};

export const getHolidaysNotifications = (f, s) => {};

export const getHolidayPrizes = (f, s, t) => {

  
  let dataTod = Date.now();

  let f;
  let s;
  let t;

  if (s[1].getMonth() && s[1].getDate() === dataTod.getMonth() && dataTod.getDate()) {
    
    let result = "У" + f[1] + "сегодня праздник, его премия составляет" + t[1]/100*Number(s[1].getDate());
    });
    
    else if (s[2].getMonth() && s[2].getDate() === dataTod.getMonth() && dataTod.getDate()) {
    
      let result = "У" + f[2] + "сегодня праздник, его премия составляет" + t[2]/100*Number(s[2].getDate());
      });

      else if (s[3].getMonth() && s[3].getDate() === dataTod.getMonth() && dataTod.getDate()) {
    
        let result = "У" + f[3] + "сегодня праздник, его премия составляет" + t[3]/100*Number(s[1].getDate());
        });
      else  if (s[4].getMonth() && s[4].getDate() === dataTod.getMonth() && dataTod.getDate()) {
    
          let result = "У" + f[4] + "сегодня праздник, его премия составляет" + t[4]/100*Number(s[1].getDate());
          });
      else if(){
        let result = "сегодня не у кого нет дня рождения"
      };

    return Math.round10(result);
  }


};
